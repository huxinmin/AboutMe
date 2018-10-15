var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Carousel Model
 * ==========
 */

var Friendlink = new keystone.List('Friendlink',{
	label: '友情链接',
	singular:'友情链接',
	plural:'友情链接'
});


Friendlink.add({
	caption: { type: String, initial: true, label:"链接名称" },
	src:{type:Types.Url, initial: true, label:"链接网址"}
});
Friendlink.defaultColumns = 'caption, src';
Friendlink.register();
