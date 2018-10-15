var _ = require('lodash');

exports.initLocals = function(req, res, next) {
    res.locals.user = req.user;
    next();
};
/**
    初始化错误处理函数到`res`中
*/
exports.initErrorHandlers = function(req, res, next) {

    res.err = function(err, title, message) {
        res.status(500).render('errors/500', {
            err: err,
            errorTitle: title,
            errorMsg: message
        });
    }

    res.notfound = function(title, message) {
        res.status(404).render('errors/404', {
            errorTitle: title,
            errorMsg: message
        });
    }

    next();

};
exports.createSiteMap = function() {
    var keystone = require('keystone');
    var async = require('async');
    var sm = require('sitemap');
    var fs = require('fs');
    require('dotenv').config();

    var urls = [
        { url: '/', changefreq: 'yearly', priority: 1.0 },
        { url: '/home', changefreq: 'yearly', priority: 1.0 },
        { url: '/work', changefreq: 'yearly', priority: 0.6 },
        { url: '/about', changefreq: 'yearly', priority: 0.8 }
    ]
    var createSiteMapFile = function() {
        var sitemap = sm.createSitemap({
            hostname: process.env.HOST_NAME,
            cacheTime: 600000, // 600 sec - cache purge period 
            urls: urls
        });
        //存储到本地
        fs.writeFileSync("./public/sitemap.xml", sitemap.toString());
    };
    //生成二级的url的公共方法
    function generateUrls(nav, id, priority) {
        urls.push({ url: nav + id, changefreq: 'yearly', priority: priority })
    }

    function getPost(next) {
        keystone.list('Blog').model.find({ isShow: true }).exec(function(err, posts) {
            posts.forEach(function(post) {
                generateUrls('/home/', post._id + '.html', 1);
            });
            next();
        });
    }

    function getWorkCat(next) {
        var arr = ["photographs", "webs", "uis", "videos"];
        arr.forEach(function(cat) {
            generateUrls('/work/', cat+ '.html', 0.6);
        });
        next();
    }

    function getWorkCatList(next) {
        keystone.list('Work').model.find().exec(function(err, works) {
            works.forEach(function(work) {
                generateUrls('/work/', work._id+ '.html', 0.6);
            });
            next();
        });
    }

    async.waterfall([
        function(next) {
            getPost(function() {
                next();
            });
        },
        function(next) {
            getWorkCat(function() {
                next();
            });
        },
        function(next) {
            getWorkCatList(function() {
                next();
            });
        }
    ], function() {
        createSiteMapFile();
    });
};

exports.addCopyright = function(contents) {
    String.prototype.replaceAll = function(s1, s2) {
        return this.replace(new RegExp(s1, "gm"), s2);
    }
    var originHtml = contents.html;
    var randomLabelStart = ["</h2><p", "</h2><div", "</h2><h3", "</h2><h4", "</h2><h5", "</h2><span", "</h2><ul", "</h2><li"];
    var randomLabelEnd = ["</p>", "</div>", "</h3>", "</h4>", "</h5>", "</span>", "</ul>", "</li>"];
    var randomText = ["原文出自[胡新敏的个人博客] 转载请保留原文链接:<a href='http://huxinmin.com'>http://huxinmin.com</a>",
        "本文原文地址,原文链接:<a href='http://huxinmin.com'>http://huxinmin.com</a>",
        "本文禁止任何形式的非法采集,原文地址：胡新敏的个人博客,原文链接:<a href='http://huxinmin.com'>http://huxinmin.com</a>",
        "谢绝转载,原文地址在胡新敏的个人博客,原文链接:<a href='http://huxinmin.com'>http://huxinmin.com</a>",
        "未经作者同意,谢绝转载,原文链接:<a href='http://huxinmin.com'>http://huxinmin.com</a>",
        "禁止非法采集，原文地址,原文链接:<a href='http://huxinmin.com'>http://huxinmin.com</a>",
        "本文出自,原文链接:<a href='http://huxinmin.com'>http://huxinmin.com</a>"
    ];
    var randomClass = ["huxinmin-copyright", "not-allowed-copy", "hu-copy", "huxi-copy", "xinmin-copy",
        "huxin-not-allow", "hxm-co", "not-hux", "not-huxinmin", "xinm-ns", "cop-hsdi", "sdf-uih"
    ];
    var randomLabelNum = Math.floor(Math.random() * randomLabelStart.length);
    var randomTextNum = Math.floor(Math.random() * randomText.length);
    var randomClassNum = Math.floor(Math.random() * randomClass.length);
    appendText = randomLabelStart[randomLabelNum] + " class='" + randomClass[randomClassNum] + "'>" + randomText[randomTextNum] + randomLabelEnd[randomLabelNum];
    var newHtml = originHtml.replace("</h2>", appendText)
    contents.html = newHtml;
};

/**
	Fetches and clears the flashMessages before a view is rendered
*/
exports.flashMessages = function(req, res, next) {
    var flashMessages = {
        info: req.flash('info'),
        success: req.flash('success'),
        warning: req.flash('warning'),
        error: req.flash('error'),
    };
    res.locals.messages = _.some(flashMessages, function(msgs) { return msgs.length; }) ? flashMessages : false;
    next();
};


/**
	Prevents people from accessing protected pages when they're not signed in
 */
exports.requireUser = function(req, res, next) {
    if (!req.user) {
        req.flash('error', 'Please sign in to access this page.');
        res.redirect('/keystone/signin');
    } else {
        next();
    }
};


exports.getRightData = function(req, res, view, keystone, locals, Enumerable) {
    var tree1 = [],
        tree2 = [],
        tree3 = [];
    var _friendlink = keystone.list('Friendlink').model;
    var _archive = keystone.list('Archive').model;
    var _tag = keystone.list('Tag').model;
    var _tree1 = keystone.list('Tree').model;
    var _tree2 = keystone.list('Treecat').model;
    var _tree3 = keystone.list('Tag').model;
    var _comments = keystone.list('Blogcomments').model;
    view.on('init', function(next) {
        _comments.find().limit(10).sort('-time').exec(function(err, recentlyComments) {
            locals.data.recentlyComments = recentlyComments;
            next(err);
        });
    });
    view.on('init', function(next) {
        _friendlink.find().exec(function(err, friendlinks) {
            locals.data.friendlinks = friendlinks;
            next(err);
        });
    });
    view.on('init', function(next) {
        _archive.find().exec(function(err, archives) {
            locals.data.archives = archives;
            next(err);
        });
    });
    view.on('init', function(next) {
        _tag.find({ ishot: true }).exec(function(err, tags) {
            locals.data.tags = tags;
            next(err);
        });
    });
    view.on('init', function(next) {
        _tree1.find().exec(function(err, tree1s) {
            tree1 = tree1s;
            next(err);
        });
    });
    view.on('init', function(next) {
        _tree2.find().exec(function(err, tree2s) {
            tree2 = tree2s;
            next(err);
        });
    });
    view.on('init', function(next) {
        _tree3.find().exec(function(err, tree3s) {
            tree3 = tree3s;
            next(err);
        });
    });
    view.on('init', function(next) {
        for (var i = 0; i < tree1.length; i++) {
            var temp1 = { text: tree1[i].name, nodes: [] };
            for (var j = 0; j < tree2.length; j++) {
                var temp2 = { text: tree2[j].name, nodes: [] };
                var queryResult = Enumerable.from(tree3)
                    // .where(function(x) { return x.ancestor.toString() == tree1[i]._id.toString() })
                    .where(function(x) { return x.parent.toString() === tree2[j]._id.toString() })
                    .select(function(x) { return { text: x.name, _id: x._id } })
                    .forEach(function(x) {
                        temp2.nodes.push({ text: x.text, href: "/tag/" + x._id.toString() + ".html" })
                    });
                if (tree2[j].parent.toString() == tree1[i]._id.toString()) {
                    temp1.nodes.push(temp2);
                }
            }
            locals.data.tree.push(temp1);
        }
        next();
    });
}