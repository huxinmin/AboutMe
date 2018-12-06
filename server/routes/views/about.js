var keystone = require('keystone');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.section = 'about';
	locals.data = {};
	locals.page={}
	//设置头部的标题和关键字描述
	locals.page.title = '关于我|胡新敏';
	locals.page.keywords = '关于胡新敏的一些个人信息和个人介绍';
	locals.page.description = '胡新敏的个人信息，个人介绍,关于胡新敏';

	var _about = keystone.list('Info').model;

	view.on('init', function(next) {
		_about.findOne().exec(function(err, about) {
			locals.data = about;
			next(err);
		});
	});
	// Render the view
	view.render('about');

};
