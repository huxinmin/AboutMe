var keystone = require('keystone');
var Enumerable = require('linq');
var client = require('../../aliyun');
var middleware = require('../middleware');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.data={
		recentlyComments:[],
		tree:[],
		archives:[],
		tags:[],
		recentlyPosts:[],
		carousels:[],
		friendlinks:[]
	}
	locals.page={}
	locals.section = 'home';
	//设置头部的标题和关键字描述
	locals.page.title = '胡新敏的个人博客|专注互联网IT技术';
	locals.page.keywords = '胡新敏,huxinmin,个人网站,个人博客,学习,作品展示,个人介绍,互联网技术,IT教程,在线工具';
	locals.page.description = '胡新敏的个人网站,huxinmin个人博客系统,个人介绍,个人作品展示,知识管理,一些学习资料和工具的收集,IT技术学习教程';
	middleware.getRightData(req, res, view,keystone,locals, Enumerable);
	var _blog = keystone.list('Blog');
	view.on('init', function (next) {
		var prefix = '轮播图/';
			client.list({
  				prefix: prefix
			}).then(function (result) {
				//第一个会是空对象，所以要裁切
				result.objects.splice(0,1);
				locals.data.carousels = result.objects;
  				next();
			}).catch(function (err) {
  				console.error(err);
  				next(err);
			});
	});
	view.on('init', function (next) {
		getPosts(next);
	});
	function getPosts(next){
		_blog.paginate({
			page: req.query.page || 1,
			perPage: 20,
			maxPages: 2
		}).where({ isShow:true}).populate('tags').select('name intro tags time pic comments views').sort('-time').exec(function(err,pageQuery){
			locals.data.recentlyPosts = pageQuery.results;
			if(!!req.query.page){
				// 检验sid以防伪造ajax
				if(req.sessionID !== req.signedCookies["this.sid"]){
					return
				}
				res.json(pageQuery)
			}else{
				next(err);
			}
		});
	}
	req.query.page?getPosts():view.render('index');
};
