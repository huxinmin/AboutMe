var keystone = require('keystone');
var Types = keystone.Field.Types;
var middleware = require('../../routes/middleware');

var Blog = new keystone.List('Blog',{
	label: '博客',
	singular:'博客',
	plural:'博客'
});
var storage = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  fs: {
    path: 'public/upload/post/pics',
    publicPath: '/pics',
  },
});

Blog.add({
	name: { type: String, initial: true, index:true, label:"名称"},
	intro: { type: String, initial: true, index:true, label:"简介"},
	keywords:{type: String, initial: true, label:"关键词"},
	description:{type: String, initial: true, index:true, label:"简介描述"},
	tags: {type: Types.Relationship, ref: 'Tag', many: true, initial: true, label:"标签"},
	time:{type: Types.Date, default: Date.now, initial: true, label:"创建时间", format:'YYYY-MM-DD'},
	contents:{type: Types.Markdown, height: 200, initial: true, label:"内容"},
	pic:{type: Types.File, storage: storage , initial: true, label:"缩略图"},
	comments:{ type: Number, noedit: true, default:0, label:"评论数", collapse: true},
	views:{ type: Number, noedit: true, default:0, label:"浏览量", collapse: true},
	isShow:{type:Boolean,label:"是否显示"}
});
Blog.defaultColumns = 'name, pic, time, comments, views, isShow';
Blog.defaultSort = '-time';
Blog.relationship({ ref: 'Blogcomments', path: 'blogcomments', refPath: 'post' });

Blog.schema.methods.refreshComments = function(callback) {
	var post = this;
	keystone.list('Blogcomments').model.count()
		.where('post').in([post.id])
		.exec(function(err, count) {
			if (err) return callback(err);
			post.comments = count;
			post.save(callback);
		});
}
Blog.schema.methods.refreshViews = function(number, callback) {
	var post = this;
	post.views = number;
	post.save(callback);
}
Blog.schema.post('save', function() {
	middleware.createSiteMap();
});

Blog.register();
