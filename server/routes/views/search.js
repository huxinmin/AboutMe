var keystone = require('keystone');
var Enumerable = require('linq');
var middleware = require('../middleware');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.data={
		tree:[],
		archives:[],
		tags:[],
		friendlinks:[],
		searchResults:[]
	}
	locals.page={}
	locals.section = 'search';
	//设置头部的标题和关键字描述
	locals.page.title = "关于"+req.params.val+"的一些文章";
	locals.page.keywords = "关于"+req.params.val+"的一些文章";
	locals.page.description = "关于"+req.params.val+"的一些文章";
	middleware.getRightData(req, res, view,keystone,locals, Enumerable);

	var _blog = keystone.list('Blog');
	var reg = new RegExp(req.params.val, 'i'); //不区分大小写
	view.on('init', function (next) {
		_blog.paginate({
			page: req.query.page || 1,
			perPage: 40,
			maxPages: 10
		}).where({ isShow:true}).find({"$or":[{"description":reg},{"name":reg},{"intro":reg}]})
			.populate('tags')
				.select('name intro tags time pic comments views')
					.sort('-time')
						.exec(function(err,pageQuery){
							locals.data.searchResults = pageQuery.results;
							next(err);
						});
	});
	
	// res.json(locals.data);
	view.render('search');
};
