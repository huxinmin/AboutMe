var keystone = require('keystone');
var Enumerable = require('linq');
var middleware = require('../middleware');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	var _blog = keystone.list('Blog');
	var _tag = keystone.list('Tag').model;
	locals.data={
		tree:[],
		archives:[],
		tags:[],
		friendlinks:[],
		tagResults:[]
	}
	locals.page={}
	locals.section = 'tag';
	
	view.on('init', function (next) {
		_tag.findOne({_id:req.params.cat}).exec(function(err,tag){
			//设置头部的标题和关键字描述
			locals.page.title = "关于"+tag.name+"的一些文章";
			locals.page.keywords = "关于"+tag.name+"的一些文章";
			locals.page.description = "关于"+tag.name+"的一些文章";
			next(err);
		});
	});
	middleware.getRightData(req, res, view,keystone,locals, Enumerable);
	
	view.on('init', function (next) {
		_blog.paginate({
			page: req.query.page || 1,
			perPage: 40,
			maxPages: 10
		}).where({ isShow:true}).find({"tags":req.params.cat})
			.populate('tags')
				.select('name intro tags time pic comments views')
					.sort('-time')
						.exec(function(err,pageQuery){
							locals.data.tagResults = pageQuery.results;
							next(err);
						});
	});
	
	view.render('tag');
};
