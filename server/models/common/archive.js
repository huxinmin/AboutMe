var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Tag Model
 * ==========
 */

var Archive = new keystone.List('Archive',{
	autokey: { path: 'key', from: 'name', unique: true },
	label: '存档日期',
	singular:'存档日期',
	plural:'存档日期'
});

Archive.add({
	name: { type: String, label:"存档日期"}
});

Archive.register();
