var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initErrorHandlers);
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views')
};
// 处理404错误
keystone.set('404', function(req, res, next) {
    res.notfound();
});
 
// 处理其它错误
keystone.set('500', function(err, req, res, next) {
    var title, message;
    if (err instanceof Error) {
        message = err.message;
        err = err.stack;
    }
    res.err(err, title, message);
});
// Setup Route Bindings
exports = module.exports = function (app) {
	// Views
	app.all('/*', keystone.middleware.cors);
	app.get('/', routes.views.index);
	app.get('/home', routes.views.index);
	app.get('/home/:post', routes.views.post);
	app.get('/tag/:cat', routes.views.tag);
	app.get('/archive/:time', routes.views.archive);
	app.get('/search/:val', routes.views.search);
	app.get('/about', routes.views.about);
	app.get('/work', routes.views.work);
	app.get('/work/:cat', routes.views.work);
	app.get('/work/:cat/:list', routes.views.work);
	app.all('/addcomments', routes.views.addComments);
	
	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

};
