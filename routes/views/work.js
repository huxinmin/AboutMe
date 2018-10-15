var keystone = require('keystone');
var client = require('../../aliyun');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	var _work = keystone.list('Work').model;
	// Init locals
	locals.section = 'work';
	locals.page={}
	var filter = {"photographs":"摄影作品","webs":"代码作品","uis":"UI作品","videos":"视频作品"};
	//如果是作品主页面
	if(JSON.stringify(req.params) == "{}"){
		locals.data = [];
		//设置头部的标题和关键字描述
		locals.page.title = "胡新敏的个人作品";
		locals.page.keywords = "胡新敏的个人作品";
		locals.page.description = "胡新敏的个人作品,包含摄影作品,UI作品,还有代码作品,视频作品";
		view.on('init', function(next) {
			_work.find({type:"摄影作品"}).limit(8).exec(function(err, photographs) {
				locals.data.push({type:"摄影作品",href:"/work/photographs", data:photographs});
				next(err);
			});
		});
		view.on('init', function(next) {
			_work.find({type:"代码作品"}).limit(8).exec(function(err, webs) {
				locals.data.push({type:"代码作品",href:"/work/webs", data:webs})
				next(err);
			});
		});
		view.on('init', function(next) {
			_work.find({type:"UI作品"}).limit(8).exec(function(err, uis) {
				locals.data.push({type:"UI作品",href:"/work/uis", data:uis})
				next(err);
			});
		});
		view.on('init', function(next) {
			_work.find({type:"视频作品"}).limit(8).exec(function(err, videos) {
				locals.data.push({type:"视频作品",href:"/work/videos", data:videos})
				next(err);
			});
		});
		view.render('work');
	}
	//如果是某一个类别的主页面
	else if(!!req.params.cat&& !!!req.params.list){
		locals.data = {};
		//设置头部的标题和关键字描述
		locals.page.title = "胡新敏的个人作品|"+filter[req.params.cat];
		locals.page.keywords = "胡新敏的个人作品|"+filter[req.params.cat];
		locals.page.description = "胡新敏的个人作品|"+filter[req.params.cat];
		view.on('init', function(next) {
			_work.find({type: filter[req.params.cat]}).exec(function(err, cats) {
				locals.data.type = filter[req.params.cat];
				locals.data.cats = cats;
				next(err);
			});
		});
		view.render('workcat');
	}
	//如果是详情页
	else{
		locals.data = {};
		view.on('init', function(next) {
			_work.findOne({_id: req.params.list}).exec(function(err, list) {
				locals.data = list;
				//设置头部的标题和关键字描述
				locals.page.title = list.name;
				locals.page.keywords = list.intro;
				locals.page.description = list.intro;
				next(err);
			});
		});
		view.on('init', function(next) {
			var prefix = '作品/'+ locals.data.type.substring(0,2)+'/'+locals.data.name+"/";
			client.list({
  				prefix: prefix
			}).then(function (result) {
				//第一个会是空对象，所以要裁切
				result.objects.splice(0,1);
				locals.data.files = result.objects;
  				next();
			}).catch(function (err) {
  				console.error(err);
  				next(err);
			});
		});
		view.render('worklist');
	}
};
