var keystone = require('keystone');
var Enumerable = require('linq');
var middleware = require('../middleware');
var svgCaptcha = require('svg-captcha');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	var _comments = keystone.list('Blogcomments');
	var _blog = keystone.list('Blog').model;
	locals.data={
		recentlyComments:[],
		tree:[],
		archives:[],
		tags:[],
		post:{},
		friendlinks:[],
		comments:[],
		captcha:""
	}
	locals.page={}
	locals.page._id = req.params.post;
	//用svg生成验证码 https://github.com/lemonce/svg-captcha
	var captcha = svgCaptcha.create({size:4,ignoreChars:'0o1i',noise:1,color:true});
	req.session.captcha = captcha.text;
	locals.data.captcha = captcha.data;
	
	middleware.getRightData(req, res, view,keystone,locals, Enumerable);

	locals.section = 'post';
	
	view.on('init', function (next) {
		_blog.findOne({_id: req.params.post, isShow:true})
			.populate('tags')
			.select('name  tags time contents comments views intro keywords description').exec(function(err,post){
				//每访问一次，都会增加该博客的访问量
				post.refreshViews(post.views+1);
				//设置头部的标题和关键字描述
				locals.page.title =post.name;
				locals.page.keywords = post.keywords;
				locals.page.description =  post.description;
				locals.data.post = post;
				middleware.addCopyright(locals.data.post.contents);
				getComments(next);
			});
	});
	function getComments(next){
		_comments.paginate({
					page: req.query.page || 1,
					perPage: 20,
					maxPages: 2
				}).find({"post":req.params.post}).sort('-time').exec(function(err,comments){
					locals.data.comments = comments.results;
					if(!!req.query.page){
						//检验sid以防伪造ajax
						if(req.sessionID !== req.signedCookies["this.sid"]){
							return
						}
						res.json(comments.results)
					}else{
						next(err);
					}
		});
	}
	req.query.page?getComments():view.render('post');
};
