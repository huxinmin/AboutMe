//配置参考地址      https://help.aliyun.com/document_detail/32070.html?spm=5176.doc32068.6.738.d5iRqV
//ali-oss教程地址   https://github.com/ali-sdk/ali-oss?spm=5176.doc32068.2.2.d5iRqV#getobjecturlname-baseurl
// 使用异步方式教程地址 https://cnodejs.org/topic/570f8961400ca111729e8858?spm=5176.doc32070.2.8.HrYpHs
var OSS = require('ali-oss').Wrapper;
require('dotenv').config();

var client = new OSS({	
  //region的参考列表   https://help.aliyun.com/document_detail/31837.html?spm=5176.doc32070.2.6.hxunTS
  region: process.env.ali_oss_region,
  //云账号AccessKey有所有API访问权限，建议遵循阿里云安全最佳实践，部署在服务端使用RAM子账号或STS，部署在客户端使用STS。
  accessKeyId: process.env.ali_oss_accessKeyId,
  accessKeySecret: process.env.ali_oss_accessKeySecret,
  bucket: 'huxinmin',
  secure:true
});

module.exports = client;