var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Work Model
 * ==========
 */

var Work = new keystone.List('Work',{
	autokey: { path: 'key', from: 'name', unique: true },
	label: '作品',
	singular:'作品',
	plural:'作品'
});
var storage = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  fs: {
    path: 'public/upload/work/pics',
    publicPath: '/pics',
  },
});



Work.add({
	name: { type: String, initial: true, label:"名称" },
	type:{type: Types.Select, options: '摄影作品, 代码作品, UI作品, 视频作品', index: true, initial: true, label:"类别"},
	intro:{type:String, initial: true, label:"简介" },
	time:{type: Types.Date, default: Date.now, initial: true, label:"时间"},
	pic:{type: Types.File, storage: storage , initial: true, label:"缩略图"}
});
Work.defaultColumns = 'name, type, time';
Work.register();
