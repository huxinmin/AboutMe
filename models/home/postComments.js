var keystone = require('keystone');
var Types = keystone.Field.Types;

var BlogComments = new keystone.List('Blogcomments',{
	label: '博客评论',
	singular:'博客评论',
	plural:'博客评论'
});

BlogComments.add({
	post:{type: Types.Relationship, ref: 'Blog', initial: true, label:"对应的博客"},
	name: { type: Types.Name,  label:"姓名" },
	email: { type: Types.Email,  label:"邮箱" },
	message: { type: Types.Textarea,  label:"留言" },
	time:{type: Types.Date, default: Date.now, initial: true, label:"评论时间", format:'YYYY-MM-DD'}
});
BlogComments.defaultColumns = 'name, message, time,post';
//评论成功则更新博客的评论数
BlogComments.schema.post('save', function() {
	keystone.list('Blog').model.findById(this.post, function(err, post) {
		if (post) post.refreshComments();
	});
});

BlogComments.schema.post('remove', function() {
	keystone.list('Blog').model.findById(this.post, function(err, post) {
		if (post) post.refreshComments();
	});
})
BlogComments.register();
