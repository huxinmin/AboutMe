var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Tag Model
 * ==========
 */

var Tree2 = new keystone.List('Treecat',{
	autokey: { path: 'slug', from: 'name', unique: true },
	label: '树形分类-二级分类',
	singular:'树形分类-二级分类',
	plural:'树形分类-二级分类'
});

Tree2.add({
	name: { type: String, label:"分类名称"},
	parent:{ type:Types.Relationship, ref: 'Tree', initial: true, label:"一级分类"}
});
Tree2.relationship({ ref: 'Tag', path: 'tags', refPath: 'parent' });
Tree2.defaultColumns = 'name, parent';
Tree2.register();
