var keystone = require('keystone');
var Enumerable = require('linq');
var middleware = require('../middleware');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.data={
		recentlyComments:[],
		tree:[],
		archives:[],
		tags:[],
		friendlinks:[],
		archiveResults:[]
	}
	locals.page={}
	locals.section = 'archive';
	//设置头部的标题和关键字描述
	locals.page.title = req.params.time+'月份的文章存档';
	locals.page.keywords = req.params.time+'月份的文章存档';
	locals.page.description = req.params.time+'月份的文章存档';
	middleware.getRightData(req, res, view,keystone,locals, Enumerable);

	var _blog = keystone.list('Blog');
	//日期模糊查询用$gt大于和$lt小于
	var date = new Date(req.params.time);
	var firstDay =  new Date(date.getFullYear(), date.getMonth(), 1);
	var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
	// $lt", "$lte", "$gt", "$gte", "$ne"就是全部的比较操作符，对应于"<", "<=", ">", ">=","!="。
	view.on('init', function (next) {
		_blog.paginate({
			page: req.query.page || 1,
			perPage: 40,
			maxPages: 10
		}).where({ isShow:true}).find({"$and":[{"time":{"$gte":firstDay}},{"time":{"$lte":lastDay}}]})
			.populate('tags')
				.select('name intro tags time pic comments views')
					.sort('-time')
						.exec(function(err,pageQuery){
							console.log(pageQuery)
							locals.data.archiveResults = pageQuery.results;
							next(err);
						});
	});
	
	// res.json(locals.data);
	view.render('archive');
};
