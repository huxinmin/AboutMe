webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/antd/lib/col/index.js":
/*!********************************************!*\
  !*** ./node_modules/antd/lib/col/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _grid = __webpack_require__(/*! ../grid */ "./node_modules/antd/lib/grid/index.js");

exports['default'] = _grid.Col;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/col/style/css.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/col/style/css.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ../../grid/style/index.css */ "./node_modules/antd/lib/grid/style/index.css");

/***/ }),

/***/ "./node_modules/antd/lib/grid/RowContext.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/grid/RowContext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createReactContext = __webpack_require__(/*! create-react-context */ "./node_modules/create-react-context/lib/index.js");

var _createReactContext2 = _interopRequireDefault(_createReactContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var RowContext = (0, _createReactContext2['default'])({});
exports['default'] = RowContext;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/grid/col.js":
/*!*******************************************!*\
  !*** ./node_modules/antd/lib/grid/col.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends4 = _interopRequireDefault(_extends3);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var PropTypes = _interopRequireWildcard(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _RowContext = __webpack_require__(/*! ./RowContext */ "./node_modules/antd/lib/grid/RowContext.js");

var _RowContext2 = _interopRequireDefault(_RowContext);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var stringOrNumber = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);
var objectOrNumber = PropTypes.oneOfType([PropTypes.object, PropTypes.number]);

var Col = function (_React$Component) {
    (0, _inherits3['default'])(Col, _React$Component);

    function Col() {
        (0, _classCallCheck3['default'])(this, Col);
        return (0, _possibleConstructorReturn3['default'])(this, (Col.__proto__ || Object.getPrototypeOf(Col)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Col, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var props = this.props;

            var span = props.span,
                order = props.order,
                offset = props.offset,
                push = props.push,
                pull = props.pull,
                className = props.className,
                children = props.children,
                _props$prefixCls = props.prefixCls,
                prefixCls = _props$prefixCls === undefined ? 'ant-col' : _props$prefixCls,
                others = __rest(props, ["span", "order", "offset", "push", "pull", "className", "children", "prefixCls"]);

            var sizeClassObj = {};
            ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].forEach(function (size) {
                var _extends2;

                var sizeProps = {};
                if (typeof props[size] === 'number') {
                    sizeProps.span = props[size];
                } else if ((0, _typeof3['default'])(props[size]) === 'object') {
                    sizeProps = props[size] || {};
                }
                delete others[size];
                sizeClassObj = (0, _extends4['default'])({}, sizeClassObj, (_extends2 = {}, (0, _defineProperty3['default'])(_extends2, prefixCls + '-' + size + '-' + sizeProps.span, sizeProps.span !== undefined), (0, _defineProperty3['default'])(_extends2, prefixCls + '-' + size + '-order-' + sizeProps.order, sizeProps.order || sizeProps.order === 0), (0, _defineProperty3['default'])(_extends2, prefixCls + '-' + size + '-offset-' + sizeProps.offset, sizeProps.offset || sizeProps.offset === 0), (0, _defineProperty3['default'])(_extends2, prefixCls + '-' + size + '-push-' + sizeProps.push, sizeProps.push || sizeProps.push === 0), (0, _defineProperty3['default'])(_extends2, prefixCls + '-' + size + '-pull-' + sizeProps.pull, sizeProps.pull || sizeProps.pull === 0), _extends2));
            });
            var classes = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + span, span !== undefined), (0, _defineProperty3['default'])(_classNames, prefixCls + '-order-' + order, order), (0, _defineProperty3['default'])(_classNames, prefixCls + '-offset-' + offset, offset), (0, _defineProperty3['default'])(_classNames, prefixCls + '-push-' + push, push), (0, _defineProperty3['default'])(_classNames, prefixCls + '-pull-' + pull, pull), _classNames), className, sizeClassObj);
            return React.createElement(
                _RowContext2['default'].Consumer,
                null,
                function (_ref) {
                    var gutter = _ref.gutter;

                    var style = others.style;
                    if (gutter > 0) {
                        style = (0, _extends4['default'])({ paddingLeft: gutter / 2, paddingRight: gutter / 2 }, style);
                    }
                    return React.createElement(
                        'div',
                        (0, _extends4['default'])({}, others, { style: style, className: classes }),
                        children
                    );
                }
            );
        }
    }]);
    return Col;
}(React.Component);

exports['default'] = Col;

Col.propTypes = {
    span: stringOrNumber,
    order: stringOrNumber,
    offset: stringOrNumber,
    push: stringOrNumber,
    pull: stringOrNumber,
    className: PropTypes.string,
    children: PropTypes.node,
    xs: objectOrNumber,
    sm: objectOrNumber,
    md: objectOrNumber,
    lg: objectOrNumber,
    xl: objectOrNumber,
    xxl: objectOrNumber
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/grid/index.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/grid/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Col = exports.Row = undefined;

var _row = __webpack_require__(/*! ./row */ "./node_modules/antd/lib/grid/row.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(/*! ./col */ "./node_modules/antd/lib/grid/col.js");

var _col2 = _interopRequireDefault(_col);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports.Row = _row2['default'];
exports.Col = _col2['default'];

/***/ }),

/***/ "./node_modules/antd/lib/grid/row.js":
/*!*******************************************!*\
  !*** ./node_modules/antd/lib/grid/row.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends4 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends5 = _interopRequireDefault(_extends4);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var PropTypes = _interopRequireWildcard(_propTypes);

var _RowContext = __webpack_require__(/*! ./RowContext */ "./node_modules/antd/lib/grid/RowContext.js");

var _RowContext2 = _interopRequireDefault(_RowContext);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82
var enquire = void 0;
if (typeof window !== 'undefined') {
    var matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
        return {
            media: mediaQuery,
            matches: false,
            addListener: function addListener() {},
            removeListener: function removeListener() {}
        };
    };
    window.matchMedia = window.matchMedia || matchMediaPolyfill;
    enquire = __webpack_require__(/*! enquire.js */ "./node_modules/enquire.js/src/index.js");
}

var responsiveArray = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
var responsiveMap = {
    xs: '(max-width: 575px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1600px)'
};

var Row = function (_React$Component) {
    (0, _inherits3['default'])(Row, _React$Component);

    function Row() {
        (0, _classCallCheck3['default'])(this, Row);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));

        _this.state = {
            screens: {}
        };
        return _this;
    }

    (0, _createClass3['default'])(Row, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            Object.keys(responsiveMap).map(function (screen) {
                return enquire.register(responsiveMap[screen], {
                    match: function match() {
                        if ((0, _typeof3['default'])(_this2.props.gutter) !== 'object') {
                            return;
                        }
                        _this2.setState(function (prevState) {
                            return {
                                screens: (0, _extends5['default'])({}, prevState.screens, (0, _defineProperty3['default'])({}, screen, true))
                            };
                        });
                    },
                    unmatch: function unmatch() {
                        if ((0, _typeof3['default'])(_this2.props.gutter) !== 'object') {
                            return;
                        }
                        _this2.setState(function (prevState) {
                            return {
                                screens: (0, _extends5['default'])({}, prevState.screens, (0, _defineProperty3['default'])({}, screen, false))
                            };
                        });
                    },
                    // Keep a empty destory to avoid triggering unmatch when unregister
                    destroy: function destroy() {}
                });
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            Object.keys(responsiveMap).map(function (screen) {
                return enquire.unregister(responsiveMap[screen]);
            });
        }
    }, {
        key: 'getGutter',
        value: function getGutter() {
            var gutter = this.props.gutter;

            if ((typeof gutter === 'undefined' ? 'undefined' : (0, _typeof3['default'])(gutter)) === 'object') {
                for (var i = 0; i <= responsiveArray.length; i++) {
                    var breakpoint = responsiveArray[i];
                    if (this.state.screens[breakpoint] && gutter[breakpoint] !== undefined) {
                        return gutter[breakpoint];
                    }
                }
            }
            return gutter;
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _a = this.props,
                type = _a.type,
                justify = _a.justify,
                align = _a.align,
                className = _a.className,
                style = _a.style,
                children = _a.children,
                _a$prefixCls = _a.prefixCls,
                prefixCls = _a$prefixCls === undefined ? 'ant-row' : _a$prefixCls,
                others = __rest(_a, ["type", "justify", "align", "className", "style", "children", "prefixCls"]);
            var gutter = this.getGutter();
            var classes = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls, !type), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + type, type), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + type + '-' + justify, type && justify), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + type + '-' + align, type && align), _classNames), className);
            var rowStyle = gutter > 0 ? (0, _extends5['default'])({ marginLeft: gutter / -2, marginRight: gutter / -2 }, style) : style;
            var otherProps = (0, _extends5['default'])({}, others);
            delete otherProps.gutter;
            return React.createElement(
                _RowContext2['default'].Provider,
                { value: { gutter: gutter } },
                React.createElement(
                    'div',
                    (0, _extends5['default'])({}, otherProps, { className: classes, style: rowStyle }),
                    children
                )
            );
        }
    }]);
    return Row;
}(React.Component);

exports['default'] = Row;

Row.defaultProps = {
    gutter: 0
};
Row.propTypes = {
    type: PropTypes.string,
    align: PropTypes.string,
    justify: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    gutter: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    prefixCls: PropTypes.string
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/row/index.js":
/*!********************************************!*\
  !*** ./node_modules/antd/lib/row/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _grid = __webpack_require__(/*! ../grid */ "./node_modules/antd/lib/grid/index.js");

exports['default'] = _grid.Row;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/row/style/css.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/row/style/css.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ../../grid/style/index.css */ "./node_modules/antd/lib/grid/style/index.css");

/***/ }),

/***/ "./node_modules/enquire.js/src/MediaQuery.js":
/*!***************************************************!*\
  !*** ./node_modules/enquire.js/src/MediaQuery.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var QueryHandler = __webpack_require__(/*! ./QueryHandler */ "./node_modules/enquire.js/src/QueryHandler.js");
var each = __webpack_require__(/*! ./Util */ "./node_modules/enquire.js/src/Util.js").each;

/**
 * Represents a single media query, manages it's state and registered handlers for this query
 *
 * @constructor
 * @param {string} query the media query string
 * @param {boolean} [isUnconditional=false] whether the media query should run regardless of whether the conditions are met. Primarily for helping older browsers deal with mobile-first design
 */
function MediaQuery(query, isUnconditional) {
    this.query = query;
    this.isUnconditional = isUnconditional;
    this.handlers = [];
    this.mql = window.matchMedia(query);

    var self = this;
    this.listener = function(mql) {
        // Chrome passes an MediaQueryListEvent object, while other browsers pass MediaQueryList directly
        self.mql = mql.currentTarget || mql;
        self.assess();
    };
    this.mql.addListener(this.listener);
}

MediaQuery.prototype = {

    constuctor : MediaQuery,

    /**
     * add a handler for this query, triggering if already active
     *
     * @param {object} handler
     * @param {function} handler.match callback for when query is activated
     * @param {function} [handler.unmatch] callback for when query is deactivated
     * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
     * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
     */
    addHandler : function(handler) {
        var qh = new QueryHandler(handler);
        this.handlers.push(qh);

        this.matches() && qh.on();
    },

    /**
     * removes the given handler from the collection, and calls it's destroy methods
     *
     * @param {object || function} handler the handler to remove
     */
    removeHandler : function(handler) {
        var handlers = this.handlers;
        each(handlers, function(h, i) {
            if(h.equals(handler)) {
                h.destroy();
                return !handlers.splice(i,1); //remove from array and exit each early
            }
        });
    },

    /**
     * Determine whether the media query should be considered a match
     *
     * @return {Boolean} true if media query can be considered a match, false otherwise
     */
    matches : function() {
        return this.mql.matches || this.isUnconditional;
    },

    /**
     * Clears all handlers and unbinds events
     */
    clear : function() {
        each(this.handlers, function(handler) {
            handler.destroy();
        });
        this.mql.removeListener(this.listener);
        this.handlers.length = 0; //clear array
    },

    /*
        * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
        */
    assess : function() {
        var action = this.matches() ? 'on' : 'off';

        each(this.handlers, function(handler) {
            handler[action]();
        });
    }
};

module.exports = MediaQuery;


/***/ }),

/***/ "./node_modules/enquire.js/src/MediaQueryDispatch.js":
/*!***********************************************************!*\
  !*** ./node_modules/enquire.js/src/MediaQueryDispatch.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MediaQuery = __webpack_require__(/*! ./MediaQuery */ "./node_modules/enquire.js/src/MediaQuery.js");
var Util = __webpack_require__(/*! ./Util */ "./node_modules/enquire.js/src/Util.js");
var each = Util.each;
var isFunction = Util.isFunction;
var isArray = Util.isArray;

/**
 * Allows for registration of query handlers.
 * Manages the query handler's state and is responsible for wiring up browser events
 *
 * @constructor
 */
function MediaQueryDispatch () {
    if(!window.matchMedia) {
        throw new Error('matchMedia not present, legacy browsers require a polyfill');
    }

    this.queries = {};
    this.browserIsIncapable = !window.matchMedia('only all').matches;
}

MediaQueryDispatch.prototype = {

    constructor : MediaQueryDispatch,

    /**
     * Registers a handler for the given media query
     *
     * @param {string} q the media query
     * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
     * @param {function} options.match fired when query matched
     * @param {function} [options.unmatch] fired when a query is no longer matched
     * @param {function} [options.setup] fired when handler first triggered
     * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
     * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
     */
    register : function(q, options, shouldDegrade) {
        var queries         = this.queries,
            isUnconditional = shouldDegrade && this.browserIsIncapable;

        if(!queries[q]) {
            queries[q] = new MediaQuery(q, isUnconditional);
        }

        //normalise to object in an array
        if(isFunction(options)) {
            options = { match : options };
        }
        if(!isArray(options)) {
            options = [options];
        }
        each(options, function(handler) {
            if (isFunction(handler)) {
                handler = { match : handler };
            }
            queries[q].addHandler(handler);
        });

        return this;
    },

    /**
     * unregisters a query and all it's handlers, or a specific handler for a query
     *
     * @param {string} q the media query to target
     * @param {object || function} [handler] specific handler to unregister
     */
    unregister : function(q, handler) {
        var query = this.queries[q];

        if(query) {
            if(handler) {
                query.removeHandler(handler);
            }
            else {
                query.clear();
                delete this.queries[q];
            }
        }

        return this;
    }
};

module.exports = MediaQueryDispatch;


/***/ }),

/***/ "./node_modules/enquire.js/src/QueryHandler.js":
/*!*****************************************************!*\
  !*** ./node_modules/enquire.js/src/QueryHandler.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Delegate to handle a media query being matched and unmatched.
 *
 * @param {object} options
 * @param {function} options.match callback for when the media query is matched
 * @param {function} [options.unmatch] callback for when the media query is unmatched
 * @param {function} [options.setup] one-time callback triggered the first time a query is matched
 * @param {boolean} [options.deferSetup=false] should the setup callback be run immediately, rather than first time query is matched?
 * @constructor
 */
function QueryHandler(options) {
    this.options = options;
    !options.deferSetup && this.setup();
}

QueryHandler.prototype = {

    constructor : QueryHandler,

    /**
     * coordinates setup of the handler
     *
     * @function
     */
    setup : function() {
        if(this.options.setup) {
            this.options.setup();
        }
        this.initialised = true;
    },

    /**
     * coordinates setup and triggering of the handler
     *
     * @function
     */
    on : function() {
        !this.initialised && this.setup();
        this.options.match && this.options.match();
    },

    /**
     * coordinates the unmatch event for the handler
     *
     * @function
     */
    off : function() {
        this.options.unmatch && this.options.unmatch();
    },

    /**
     * called when a handler is to be destroyed.
     * delegates to the destroy or unmatch callbacks, depending on availability.
     *
     * @function
     */
    destroy : function() {
        this.options.destroy ? this.options.destroy() : this.off();
    },

    /**
     * determines equality by reference.
     * if object is supplied compare options, if function, compare match callback
     *
     * @function
     * @param {object || function} [target] the target for comparison
     */
    equals : function(target) {
        return this.options === target || this.options.match === target;
    }

};

module.exports = QueryHandler;


/***/ }),

/***/ "./node_modules/enquire.js/src/Util.js":
/*!*********************************************!*\
  !*** ./node_modules/enquire.js/src/Util.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helper function for iterating over a collection
 *
 * @param collection
 * @param fn
 */
function each(collection, fn) {
    var i      = 0,
        length = collection.length,
        cont;

    for(i; i < length; i++) {
        cont = fn(collection[i], i);
        if(cont === false) {
            break; //allow early exit
        }
    }
}

/**
 * Helper function for determining whether target object is an array
 *
 * @param target the object under test
 * @return {Boolean} true if array, false otherwise
 */
function isArray(target) {
    return Object.prototype.toString.apply(target) === '[object Array]';
}

/**
 * Helper function for determining whether target object is a function
 *
 * @param target the object under test
 * @return {Boolean} true if function, false otherwise
 */
function isFunction(target) {
    return typeof target === 'function';
}

module.exports = {
    isFunction : isFunction,
    isArray : isArray,
    each : each
};


/***/ }),

/***/ "./node_modules/enquire.js/src/index.js":
/*!**********************************************!*\
  !*** ./node_modules/enquire.js/src/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MediaQueryDispatch = __webpack_require__(/*! ./MediaQueryDispatch */ "./node_modules/enquire.js/src/MediaQueryDispatch.js");
module.exports = new MediaQueryDispatch();


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row/style/css */ "./node_modules/antd/lib/row/style/css.js");
/* harmony import */ var antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/col/style/css */ "./node_modules/antd/lib/col/style/css.js");
/* harmony import */ var antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layouts */ "./layouts/index.js");





var _jsxFileName = "F:\\myProject\\huxinminBlog\\client\\pages\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_layouts__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "index-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
        gutter: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: "gutter-row",
        span: 18,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "gutter-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "col-18")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_4___default.a, {
        className: "gutter-row",
        span: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "gutter-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "col-6")))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, userAgent;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
                return _context.abrupt("return", {
                  userAgent: userAgent
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.06c3e7c55ad93b27e22f.hot-update.js.map