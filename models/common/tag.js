var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Tag Model
 * ==========
 */

var Tag = new keystone.List('Tag',{
	autokey: { path: 'key', from: 'name', unique: true },
	label: '标签',
	singular:'标签',
	plural:'标签'
});

Tag.add({
	name: { type: String, label:"名称"},
	ancestor:{ type:Types.Relationship, ref: 'Tree', initial: true, label:"一级分类"},
	parent:{type: Types.Relationship, ref: 'Treecat', label:"二级分类", filters:{parent:":ancestor"}},
	ishot:{type:Types.Boolean, label:"是否为热门标签"}
});
Tag.relationship({ ref: 'Blog', path: 'blogs', refPath: 'tags' });
Tag.defaultColumns = 'name, ishot,ancestor,parent';
Tag.register();
