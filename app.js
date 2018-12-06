require('dotenv').config();

var keystone = require('keystone');

keystone.init({
	'name': 'huxinmin',
	'brand': 'huxinmin',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'pug',
	'auto update': true,
	'session': true,
	'session store': 'mongo',
	'auth': true,
	'user model': 'User',

	'basedir': __dirname,
	'view cache': false,
	'cors allow origin': true
});

// Load your project's Models
keystone.import('models');

keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
	navLinks: require('./config').navLinks
});

// Load your project's Routes
keystone.set('routes', require('./routes'));

// Configure the navigation bar in Keystone's Admin UI
//Add nav-links for custom pages #1645  https://github.com/keystonejs/keystone/issues/1645
keystone.set('nav', {
	'首页':['blogs','friendlinks','blogcomments'],
	"关于":['infos'],
	"作品":['works'],
	"公共部分":['archives','tags','trees','treecats'],
	"用户":'users'
});

// Start Keystone to connect to your database and initialise the web server
// 自定义nav的形式{label: '上传作品',key: 'upload',path: '/upload'}

keystone.start();
