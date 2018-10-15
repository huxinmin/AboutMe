var keystone = require('keystone');
var Types = keystone.Field.Types;

var Info = new keystone.List('Info', {
 label: '基本信息',
 singular: '基本信息',
 plural: '基本信息'
});
var storage = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  fs: {
    path: 'public/upload/about',
    publicPath: '/pics',
  },
});


Info.add({
 name: { type: String, label:"基本信息"},
 avater: { type: Types.File, storage: storage, initial: true, label: "头像" },
 video: { type: Types.File, storage: storage, initial: true, label: "视频" },
 infos: { type: Types.Markdown, label: "基本信息" }
});


Info.register();