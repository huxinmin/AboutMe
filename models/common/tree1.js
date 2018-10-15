var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Tag Model
 * ==========
 */

var Tree1 = new keystone.List('Tree',{
	autokey: { path: 'slug', from: 'name', unique: true },
	label: '树形分类-一级分类',
	singular:'树形分类-一级分类',
	plural:'树形分类-一级分类'
});

Tree1.add({
	name: { type: String, label:"分类名称"}
});

Tree1.relationship({ ref: 'Treecat', path: 'treecats', refPath: 'parent' });
Tree1.relationship({ ref: 'Tag', path: 'tags', refPath: 'ancestor' });

Tree1.register();
