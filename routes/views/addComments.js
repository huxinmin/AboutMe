var keystone = require('keystone');
var Blogcomments = keystone.list('Blogcomments');
var _blog = keystone.list('Blog');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.page={}
	//设置头部的标题和关键字描述
	locals.page.title = '添加评论';
	locals.page.keywords = '添加评论';
	locals.page.description = '添加评论';
	
	locals.section = 'comments';
	locals.formData = req.body || {};
	if(req.body.checkCaptcha){
		if(req.session.captcha.toLowerCase() === req.body.captcha.toLowerCase()){
			res.json({captchaIsRight:true});
		}else{
			res.json({captchaIsRight:false});
		}
	}else{
		view.on('post', { action: 'comments' }, function (next) {
		if(req.session.captcha.toLowerCase() !== req.body.captcha.toLowerCase()){
			req.flash('error','验证码不正确');
			return next();
		}
		var Comments = new Blogcomments.model();
		var updater = Comments.getUpdateHandler(req);
		
		updater.process(req.body, {
			flashErrors: true
		}, function (err) {
			if (err) {
				
			} else {
				req.flash('success','评论成功,正在为您返回上一页');
				locals.submitted = true;
			}
			next();
		});

		});
		view.render('comments');
	}
	

}
