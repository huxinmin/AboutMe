webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/card.js":
/*!****************************!*\
  !*** ./components/card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style/css */ "./node_modules/antd/lib/card/style/css.js");
/* harmony import */ var antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "F:\\myProject\\huxinminBlog\\client\\components\\card.js";

var Meta = antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a.Meta;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
    hoverable: true,
    style: {
      width: 240
    },
    cover: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      alt: "example",
      src: "https://www.huxinmin.com/upload/post/pics/DYQbN1uFPF0iLQ-0.jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Meta, {
    title: "Europe Street beat",
    description: "www.instagram.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
});

/***/ }),

/***/ "./node_modules/antd/lib/_util/isFlexSupported.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/_util/isFlexSupported.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports['default'] = isFlexSupported;
function isFlexSupported() {
    if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
        var documentElement = window.document.documentElement;

        return 'flex' in documentElement.style || 'webkitFlex' in documentElement.style || 'Flex' in documentElement.style || 'msFlex' in documentElement.style;
    }
    return false;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/_util/throttleByAnimationFrame.js":
/*!*****************************************************************!*\
  !*** ./node_modules/antd/lib/_util/throttleByAnimationFrame.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports['default'] = throttleByAnimationFrame;
exports.throttleByAnimationFrameDecorator = throttleByAnimationFrameDecorator;

var _raf = __webpack_require__(/*! raf */ "./node_modules/raf/index.js");

var _raf2 = _interopRequireDefault(_raf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function throttleByAnimationFrame(fn) {
    var requestId = void 0;
    var later = function later(args) {
        return function () {
            requestId = null;
            fn.apply(undefined, (0, _toConsumableArray3['default'])(args));
        };
    };
    var throttled = function throttled() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        if (requestId == null) {
            requestId = (0, _raf2['default'])(later(args));
        }
    };
    throttled.cancel = function () {
        return _raf2['default'].cancel(requestId);
    };
    return throttled;
}
function throttleByAnimationFrameDecorator() {
    return function (target, key, descriptor) {
        var fn = descriptor.value;
        var definingProperty = false;
        return {
            configurable: true,
            get: function get() {
                if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
                    return fn;
                }
                var boundFn = throttleByAnimationFrame(fn.bind(this));
                definingProperty = true;
                Object.defineProperty(this, key, {
                    value: boundFn,
                    configurable: true,
                    writable: true
                });
                definingProperty = false;
                return boundFn;
            }
        };
    };
}

/***/ }),

/***/ "./node_modules/antd/lib/card/Grid.js":
/*!********************************************!*\
  !*** ./node_modules/antd/lib/card/Grid.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

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

exports['default'] = function (props) {
    var _props$prefixCls = props.prefixCls,
        prefixCls = _props$prefixCls === undefined ? 'ant-card' : _props$prefixCls,
        className = props.className,
        others = __rest(props, ["prefixCls", "className"]);

    var classString = (0, _classnames2['default'])(prefixCls + '-grid', className);
    return React.createElement('div', (0, _extends3['default'])({}, others, { className: classString }));
};

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/card/Meta.js":
/*!********************************************!*\
  !*** ./node_modules/antd/lib/card/Meta.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

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

exports['default'] = function (props) {
    var _props$prefixCls = props.prefixCls,
        prefixCls = _props$prefixCls === undefined ? 'ant-card' : _props$prefixCls,
        className = props.className,
        avatar = props.avatar,
        title = props.title,
        description = props.description,
        others = __rest(props, ["prefixCls", "className", "avatar", "title", "description"]);

    var classString = (0, _classnames2['default'])(prefixCls + '-meta', className);
    var avatarDom = avatar ? React.createElement(
        'div',
        { className: prefixCls + '-meta-avatar' },
        avatar
    ) : null;
    var titleDom = title ? React.createElement(
        'div',
        { className: prefixCls + '-meta-title' },
        title
    ) : null;
    var descriptionDom = description ? React.createElement(
        'div',
        { className: prefixCls + '-meta-description' },
        description
    ) : null;
    var MetaDetail = titleDom || descriptionDom ? React.createElement(
        'div',
        { className: prefixCls + '-meta-detail' },
        titleDom,
        descriptionDom
    ) : null;
    return React.createElement(
        'div',
        (0, _extends3['default'])({}, others, { className: classString }),
        avatarDom,
        MetaDetail
    );
};

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/card/index.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/card/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _addEventListener = __webpack_require__(/*! rc-util/lib/Dom/addEventListener */ "./node_modules/rc-util/lib/Dom/addEventListener.js");

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _omit = __webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js");

var _omit2 = _interopRequireDefault(_omit);

var _Grid = __webpack_require__(/*! ./Grid */ "./node_modules/antd/lib/card/Grid.js");

var _Grid2 = _interopRequireDefault(_Grid);

var _Meta = __webpack_require__(/*! ./Meta */ "./node_modules/antd/lib/card/Meta.js");

var _Meta2 = _interopRequireDefault(_Meta);

var _tabs = __webpack_require__(/*! ../tabs */ "./node_modules/antd/lib/tabs/index.js");

var _tabs2 = _interopRequireDefault(_tabs);

var _row = __webpack_require__(/*! ../row */ "./node_modules/antd/lib/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(/*! ../col */ "./node_modules/antd/lib/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _throttleByAnimationFrame = __webpack_require__(/*! ../_util/throttleByAnimationFrame */ "./node_modules/antd/lib/_util/throttleByAnimationFrame.js");

var _warning = __webpack_require__(/*! ../_util/warning */ "./node_modules/antd/lib/_util/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3["default"])(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Card = function (_React$Component) {
    (0, _inherits3["default"])(Card, _React$Component);

    function Card() {
        (0, _classCallCheck3["default"])(this, Card);

        var _this = (0, _possibleConstructorReturn3["default"])(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));

        _this.state = {
            widerPadding: false
        };
        _this.updateWiderPaddingCalled = false;
        _this.onTabChange = function (key) {
            if (_this.props.onTabChange) {
                _this.props.onTabChange(key);
            }
        };
        _this.saveRef = function (node) {
            _this.container = node;
        };
        return _this;
    }

    (0, _createClass3["default"])(Card, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.updateWiderPadding();
            this.resizeEvent = (0, _addEventListener2["default"])(window, 'resize', this.updateWiderPadding);
            if ('noHovering' in this.props) {
                (0, _warning2["default"])(!this.props.noHovering, '`noHovering` of Card is deprecated, you can remove it safely or use `hoverable` instead.');
                (0, _warning2["default"])(!!this.props.noHovering, '`noHovering={false}` of Card is deprecated, use `hoverable` instead.');
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            if (this.resizeEvent) {
                this.resizeEvent.remove();
            }
            this.updateWiderPadding.cancel();
        }
    }, {
        key: "updateWiderPadding",
        value: function updateWiderPadding() {
            var _this2 = this;

            if (!this.container) {
                return;
            }
            // 936 is a magic card width pixel number indicated by designer
            var WIDTH_BOUNDARY_PX = 936;
            if (this.container.offsetWidth >= WIDTH_BOUNDARY_PX && !this.state.widerPadding) {
                this.setState({ widerPadding: true }, function () {
                    _this2.updateWiderPaddingCalled = true; // first render without css transition
                });
            }
            if (this.container.offsetWidth < WIDTH_BOUNDARY_PX && this.state.widerPadding) {
                this.setState({ widerPadding: false }, function () {
                    _this2.updateWiderPaddingCalled = true; // first render without css transition
                });
            }
        }
    }, {
        key: "isContainGrid",
        value: function isContainGrid() {
            var containGrid = void 0;
            React.Children.forEach(this.props.children, function (element) {
                if (element && element.type && element.type === _Grid2["default"]) {
                    containGrid = true;
                }
            });
            return containGrid;
        }
    }, {
        key: "getAction",
        value: function getAction(actions) {
            if (!actions || !actions.length) {
                return null;
            }
            var actionList = actions.map(function (action, index) {
                return React.createElement(
                    "li",
                    { style: { width: 100 / actions.length + "%" }, key: "action-" + index },
                    React.createElement(
                        "span",
                        null,
                        action
                    )
                );
            });
            return actionList;
        }
        // For 2.x compatible

    }, {
        key: "getCompatibleHoverable",
        value: function getCompatibleHoverable() {
            var _props = this.props,
                noHovering = _props.noHovering,
                hoverable = _props.hoverable;

            if ('noHovering' in this.props) {
                return !noHovering || hoverable;
            }
            return !!hoverable;
        }
    }, {
        key: "render",
        value: function render() {
            var _classNames;

            var _a = this.props,
                _a$prefixCls = _a.prefixCls,
                prefixCls = _a$prefixCls === undefined ? 'ant-card' : _a$prefixCls,
                className = _a.className,
                extra = _a.extra,
                _a$headStyle = _a.headStyle,
                headStyle = _a$headStyle === undefined ? {} : _a$headStyle,
                _a$bodyStyle = _a.bodyStyle,
                bodyStyle = _a$bodyStyle === undefined ? {} : _a$bodyStyle,
                noHovering = _a.noHovering,
                hoverable = _a.hoverable,
                title = _a.title,
                loading = _a.loading,
                _a$bordered = _a.bordered,
                bordered = _a$bordered === undefined ? true : _a$bordered,
                type = _a.type,
                cover = _a.cover,
                actions = _a.actions,
                tabList = _a.tabList,
                children = _a.children,
                activeTabKey = _a.activeTabKey,
                defaultActiveTabKey = _a.defaultActiveTabKey,
                others = __rest(_a, ["prefixCls", "className", "extra", "headStyle", "bodyStyle", "noHovering", "hoverable", "title", "loading", "bordered", "type", "cover", "actions", "tabList", "children", "activeTabKey", "defaultActiveTabKey"]);
            var classString = (0, _classnames2["default"])(prefixCls, className, (_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + "-loading", loading), (0, _defineProperty3["default"])(_classNames, prefixCls + "-bordered", bordered), (0, _defineProperty3["default"])(_classNames, prefixCls + "-hoverable", this.getCompatibleHoverable()), (0, _defineProperty3["default"])(_classNames, prefixCls + "-wider-padding", this.state.widerPadding), (0, _defineProperty3["default"])(_classNames, prefixCls + "-padding-transition", this.updateWiderPaddingCalled), (0, _defineProperty3["default"])(_classNames, prefixCls + "-contain-grid", this.isContainGrid()), (0, _defineProperty3["default"])(_classNames, prefixCls + "-contain-tabs", tabList && tabList.length), (0, _defineProperty3["default"])(_classNames, prefixCls + "-type-" + type, !!type), _classNames));
            var loadingBlockStyle = bodyStyle.padding === 0 || bodyStyle.padding === '0px' ? { padding: 24 } : undefined;
            var loadingBlock = React.createElement(
                "div",
                { className: prefixCls + "-loading-content", style: loadingBlockStyle },
                React.createElement(
                    _row2["default"],
                    { gutter: 8 },
                    React.createElement(
                        _col2["default"],
                        { span: 22 },
                        React.createElement("div", { className: prefixCls + "-loading-block" })
                    )
                ),
                React.createElement(
                    _row2["default"],
                    { gutter: 8 },
                    React.createElement(
                        _col2["default"],
                        { span: 8 },
                        React.createElement("div", { className: prefixCls + "-loading-block" })
                    ),
                    React.createElement(
                        _col2["default"],
                        { span: 15 },
                        React.createElement("div", { className: prefixCls + "-loading-block" })
                    )
                ),
                React.createElement(
                    _row2["default"],
                    { gutter: 8 },
                    React.createElement(
                        _col2["default"],
                        { span: 6 },
                        React.createElement("div", { className: prefixCls + "-loading-block" })
                    ),
                    React.createElement(
                        _col2["default"],
                        { span: 18 },
                        React.createElement("div", { className: prefixCls + "-loading-block" })
                    )
                ),
                React.createElement(
                    _row2["default"],
                    { gutter: 8 },
                    React.createElement(
                        _col2["default"],
                        { span: 13 },
                        React.createElement("div", { className: prefixCls + "-loading-block" })
                    ),
                    React.createElement(
                        _col2["default"],
                        { span: 9 },
                        React.createElement("div", { className: prefixCls + "-loading-block" })
                    )
                ),
                React.createElement(
                    _row2["default"],
                    { gutter: 8 },
                    React.createElement(
                        _col2["default"],
                        { span: 4 },
                        React.createElement("div", { className: prefixCls + "-loading-block" })
                    ),
                    React.createElement(
                        _col2["default"],
                        { span: 3 },
                        React.createElement("div", { className: prefixCls + "-loading-block" })
                    ),
                    React.createElement(
                        _col2["default"],
                        { span: 16 },
                        React.createElement("div", { className: prefixCls + "-loading-block" })
                    )
                ),
                React.createElement(
                    _row2["default"],
                    { gutter: 8 },
                    React.createElement(
                        _col2["default"],
                        { span: 8 },
                        React.createElement("div", { className: prefixCls + "-loading-block" })
                    ),
                    React.createElement(
                        _col2["default"],
                        { span: 6 },
                        React.createElement("div", { className: prefixCls + "-loading-block" })
                    ),
                    React.createElement(
                        _col2["default"],
                        { span: 8 },
                        React.createElement("div", { className: prefixCls + "-loading-block" })
                    )
                )
            );
            var hasActiveTabKey = activeTabKey !== undefined;
            var extraProps = (0, _defineProperty3["default"])({}, hasActiveTabKey ? 'activeKey' : 'defaultActiveKey', hasActiveTabKey ? activeTabKey : defaultActiveTabKey);
            var head = void 0;
            var tabs = tabList && tabList.length ? React.createElement(
                _tabs2["default"],
                (0, _extends3["default"])({}, extraProps, { className: prefixCls + "-head-tabs", size: "large", onChange: this.onTabChange }),
                tabList.map(function (item) {
                    return React.createElement(_tabs2["default"].TabPane, { tab: item.tab, disabled: item.disabled, key: item.key });
                })
            ) : null;
            if (title || extra || tabs) {
                head = React.createElement(
                    "div",
                    { className: prefixCls + "-head", style: headStyle },
                    React.createElement(
                        "div",
                        { className: prefixCls + "-head-wrapper" },
                        title && React.createElement(
                            "div",
                            { className: prefixCls + "-head-title" },
                            title
                        ),
                        extra && React.createElement(
                            "div",
                            { className: prefixCls + "-extra" },
                            extra
                        )
                    ),
                    tabs
                );
            }
            var coverDom = cover ? React.createElement(
                "div",
                { className: prefixCls + "-cover" },
                cover
            ) : null;
            var body = React.createElement(
                "div",
                { className: prefixCls + "-body", style: bodyStyle },
                loading ? loadingBlock : children
            );
            var actionDom = actions && actions.length ? React.createElement(
                "ul",
                { className: prefixCls + "-actions" },
                this.getAction(actions)
            ) : null;
            var divProps = (0, _omit2["default"])(others, ['onTabChange']);
            return React.createElement(
                "div",
                (0, _extends3["default"])({}, divProps, { className: classString, ref: this.saveRef }),
                head,
                coverDom,
                body,
                actionDom
            );
        }
    }]);
    return Card;
}(React.Component);

exports["default"] = Card;

Card.Grid = _Grid2["default"];
Card.Meta = _Meta2["default"];
__decorate([(0, _throttleByAnimationFrame.throttleByAnimationFrameDecorator)()], Card.prototype, "updateWiderPadding", null);
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/antd/lib/card/style/css.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/card/style/css.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/card/style/index.css");

__webpack_require__(/*! ../../tabs/style/css */ "./node_modules/antd/lib/tabs/style/css.js");

/***/ }),

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

/***/ "./node_modules/antd/lib/tabs/TabBar.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/tabs/TabBar.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _ScrollableInkTabBar = __webpack_require__(/*! rc-tabs/lib/ScrollableInkTabBar */ "./node_modules/rc-tabs/lib/ScrollableInkTabBar.js");

var _ScrollableInkTabBar2 = _interopRequireDefault(_ScrollableInkTabBar);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = __webpack_require__(/*! ../icon */ "./node_modules/antd/lib/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TabBar = function (_React$Component) {
    (0, _inherits3['default'])(TabBar, _React$Component);

    function TabBar() {
        (0, _classCallCheck3['default'])(this, TabBar);
        return (0, _possibleConstructorReturn3['default'])(this, (TabBar.__proto__ || Object.getPrototypeOf(TabBar)).apply(this, arguments));
    }

    (0, _createClass3['default'])(TabBar, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props,
                tabBarStyle = _props.tabBarStyle,
                animated = _props.animated,
                renderTabBar = _props.renderTabBar,
                tabBarExtraContent = _props.tabBarExtraContent,
                tabPosition = _props.tabPosition,
                prefixCls = _props.prefixCls,
                className = _props.className,
                size = _props.size,
                type = _props.type;

            var inkBarAnimated = (typeof animated === 'undefined' ? 'undefined' : (0, _typeof3['default'])(animated)) === 'object' ? animated.inkBar : animated;
            var isVertical = tabPosition === 'left' || tabPosition === 'right';
            var prevIconType = isVertical ? 'up' : 'left';
            var nextIconType = isVertical ? 'down' : 'right';
            var prevIcon = React.createElement(
                'span',
                { className: prefixCls + '-tab-prev-icon' },
                React.createElement(_icon2['default'], { type: prevIconType, className: prefixCls + '-tab-prev-icon-target' })
            );
            var nextIcon = React.createElement(
                'span',
                { className: prefixCls + '-tab-next-icon' },
                React.createElement(_icon2['default'], { type: nextIconType, className: prefixCls + '-tab-next-icon-target' })
            );
            // Additional className for style usage
            var cls = (0, _classnames2['default'])(prefixCls + '-' + tabPosition + '-bar', (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + size + '-bar', !!size), (0, _defineProperty3['default'])(_classNames, prefixCls + '-card-bar', type && type.indexOf('card') >= 0), _classNames), className);
            var renderProps = (0, _extends3['default'])({}, this.props, { inkBarAnimated: inkBarAnimated, extraContent: tabBarExtraContent, style: tabBarStyle, prevIcon: prevIcon,
                nextIcon: nextIcon, className: cls });
            var RenderTabBar = void 0;
            if (renderTabBar) {
                RenderTabBar = renderTabBar(renderProps, _ScrollableInkTabBar2['default']);
            } else {
                RenderTabBar = React.createElement(_ScrollableInkTabBar2['default'], renderProps);
            }
            return React.cloneElement(RenderTabBar);
        }
    }]);
    return TabBar;
}(React.Component);

exports['default'] = TabBar;

TabBar.defaultProps = {
    animated: true,
    type: 'line'
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/tabs/index.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/tabs/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var ReactDOM = _interopRequireWildcard(_reactDom);

var _rcTabs = __webpack_require__(/*! rc-tabs */ "./node_modules/rc-tabs/es/index.js");

var _rcTabs2 = _interopRequireDefault(_rcTabs);

var _TabContent = __webpack_require__(/*! rc-tabs/lib/TabContent */ "./node_modules/rc-tabs/lib/TabContent.js");

var _TabContent2 = _interopRequireDefault(_TabContent);

var _TabBar = __webpack_require__(/*! ./TabBar */ "./node_modules/antd/lib/tabs/TabBar.js");

var _TabBar2 = _interopRequireDefault(_TabBar);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = __webpack_require__(/*! ../icon */ "./node_modules/antd/lib/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _warning = __webpack_require__(/*! ../_util/warning */ "./node_modules/antd/lib/_util/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _isFlexSupported = __webpack_require__(/*! ../_util/isFlexSupported */ "./node_modules/antd/lib/_util/isFlexSupported.js");

var _isFlexSupported2 = _interopRequireDefault(_isFlexSupported);

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

var Tabs = function (_React$Component) {
    (0, _inherits3['default'])(Tabs, _React$Component);

    function Tabs() {
        (0, _classCallCheck3['default'])(this, Tabs);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));

        _this.removeTab = function (targetKey, e) {
            e.stopPropagation();
            if (!targetKey) {
                return;
            }
            var onEdit = _this.props.onEdit;
            if (onEdit) {
                onEdit(targetKey, 'remove');
            }
        };
        _this.handleChange = function (activeKey) {
            var onChange = _this.props.onChange;
            if (onChange) {
                onChange(activeKey);
            }
        };
        _this.createNewTab = function (targetKey) {
            var onEdit = _this.props.onEdit;

            if (onEdit) {
                onEdit(targetKey, 'add');
            }
        };
        return _this;
    }

    (0, _createClass3['default'])(Tabs, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var NO_FLEX = ' no-flex';
            var tabNode = ReactDOM.findDOMNode(this);
            if (tabNode && !(0, _isFlexSupported2['default'])() && tabNode.className.indexOf(NO_FLEX) === -1) {
                tabNode.className += NO_FLEX;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames,
                _this2 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                _props$className = _props.className,
                className = _props$className === undefined ? '' : _props$className,
                size = _props.size,
                _props$type = _props.type,
                type = _props$type === undefined ? 'line' : _props$type,
                tabPosition = _props.tabPosition,
                children = _props.children,
                _props$animated = _props.animated,
                animated = _props$animated === undefined ? true : _props$animated,
                hideAdd = _props.hideAdd;
            var tabBarExtraContent = this.props.tabBarExtraContent;

            var tabPaneAnimated = (typeof animated === 'undefined' ? 'undefined' : (0, _typeof3['default'])(animated)) === 'object' ? animated.tabPane : animated;
            // card tabs should not have animation
            if (type !== 'line') {
                tabPaneAnimated = 'animated' in this.props ? tabPaneAnimated : false;
            }
            (0, _warning2['default'])(!(type.indexOf('card') >= 0 && (size === 'small' || size === 'large')), 'Tabs[type=card|editable-card] doesn\'t have small or large size, it\'s by design.');
            var cls = (0, _classnames2['default'])(className, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-vertical', tabPosition === 'left' || tabPosition === 'right'), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + size, !!size), (0, _defineProperty3['default'])(_classNames, prefixCls + '-card', type.indexOf('card') >= 0), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + type, true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-no-animation', !tabPaneAnimated), _classNames));
            // only card type tabs can be added and closed
            var childrenWithClose = [];
            if (type === 'editable-card') {
                childrenWithClose = [];
                React.Children.forEach(children, function (child, index) {
                    var closable = child.props.closable;
                    closable = typeof closable === 'undefined' ? true : closable;
                    var closeIcon = closable ? React.createElement(_icon2['default'], { type: 'close', className: prefixCls + '-close-x', onClick: function onClick(e) {
                            return _this2.removeTab(child.key, e);
                        } }) : null;
                    childrenWithClose.push(React.cloneElement(child, {
                        tab: React.createElement(
                            'div',
                            { className: closable ? undefined : prefixCls + '-tab-unclosable' },
                            child.props.tab,
                            closeIcon
                        ),
                        key: child.key || index
                    }));
                });
                // Add new tab handler
                if (!hideAdd) {
                    tabBarExtraContent = React.createElement(
                        'span',
                        null,
                        React.createElement(_icon2['default'], { type: 'plus', className: prefixCls + '-new-tab', onClick: this.createNewTab }),
                        tabBarExtraContent
                    );
                }
            }
            tabBarExtraContent = tabBarExtraContent ? React.createElement(
                'div',
                { className: prefixCls + '-extra-content' },
                tabBarExtraContent
            ) : null;
            var _a = this.props,
                dropped = _a.className,
                tabBarProps = __rest(_a, ["className"]);
            var contentCls = (0, _classnames2['default'])(prefixCls + '-' + tabPosition + '-content', type.indexOf('card') >= 0 && prefixCls + '-card-content');
            return React.createElement(
                _rcTabs2['default'],
                (0, _extends3['default'])({}, this.props, { className: cls, tabBarPosition: tabPosition, renderTabBar: function renderTabBar() {
                        return React.createElement(_TabBar2['default'], (0, _extends3['default'])({}, tabBarProps, { tabBarExtraContent: tabBarExtraContent }));
                    }, renderTabContent: function renderTabContent() {
                        return React.createElement(_TabContent2['default'], { className: contentCls, animated: tabPaneAnimated, animatedWithMargin: true });
                    }, onChange: this.handleChange }),
                childrenWithClose.length > 0 ? childrenWithClose : children
            );
        }
    }]);
    return Tabs;
}(React.Component);

exports['default'] = Tabs;

Tabs.TabPane = _rcTabs.TabPane;
Tabs.defaultProps = {
    prefixCls: 'ant-tabs',
    hideAdd: false,
    tabPosition: 'top'
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/tabs/style/css.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/tabs/style/css.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/tabs/style/index.css");

/***/ }),

/***/ "./node_modules/rc-tabs/es/KeyCode.js":
/*!********************************************!*\
  !*** ./node_modules/rc-tabs/es/KeyCode.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   * LEFT
   */
  LEFT: 37, // also NUM_WEST
  /**
   * UP
   */
  UP: 38, // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39, // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40 // also NUM_SOUTH
});

/***/ }),

/***/ "./node_modules/rc-tabs/es/Sentinel.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-tabs/es/Sentinel.js ***!
  \*********************************************/
/*! exports provided: SentinelProvider, SentinelConsumer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentinelProvider", function() { return SentinelProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentinelConsumer", function() { return SentinelConsumer; });
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/es/KeyCode */ "./node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var create_react_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! create-react-context */ "./node_modules/create-react-context/lib/index.js");
/* harmony import */ var create_react_context__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(create_react_context__WEBPACK_IMPORTED_MODULE_7__);




/* eslint-disable jsx-a11y/no-noninteractive-tabindex */





var SentinelContext = create_react_context__WEBPACK_IMPORTED_MODULE_7___default()({});
var SentinelProvider = SentinelContext.Provider;
var SentinelConsumer = SentinelContext.Consumer;

var sentinelStyle = { width: 0, height: 0, overflow: 'hidden' };

var Sentinel = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Sentinel, _React$Component);

  function Sentinel() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Sentinel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_ref = Sentinel.__proto__ || Object.getPrototypeOf(Sentinel)).call.apply(_ref, [this].concat(args))), _this), _this.onKeyDown = function (_ref2) {
      var target = _ref2.target,
          which = _ref2.which,
          shiftKey = _ref2.shiftKey;
      var _this$props = _this.props,
          nextElement = _this$props.nextElement,
          prevElement = _this$props.prevElement;

      if (which !== rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__["default"].TAB || document.activeElement !== target) return;

      // Tab next
      if (!shiftKey && nextElement) {
        nextElement.focus();
      }

      // Tab prev
      if (shiftKey && prevElement) {
        prevElement.focus();
      }
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Sentinel, [{
    key: 'render',
    value: function render() {
      var setRef = this.props.setRef;


      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('div', {
        tabIndex: 0,
        ref: setRef,
        style: sentinelStyle,
        onKeyDown: this.onKeyDown,
        role: 'presentation'
      });
    }
  }]);

  return Sentinel;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Sentinel.propTypes = {
  setRef: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  prevElement: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  nextElement: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Sentinel);

/***/ }),

/***/ "./node_modules/rc-tabs/es/TabContent.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-tabs/es/TabContent.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./node_modules/rc-tabs/es/utils.js");











var TabContent = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(TabContent, _React$Component);

  function TabContent() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, TabContent);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (TabContent.__proto__ || Object.getPrototypeOf(TabContent)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(TabContent, [{
    key: 'getTabPanes',
    value: function getTabPanes() {
      var props = this.props;
      var activeKey = props.activeKey;
      var children = props.children;
      var newChildren = [];

      react__WEBPACK_IMPORTED_MODULE_6___default.a.Children.forEach(children, function (child) {
        if (!child) {
          return;
        }
        var key = child.key;
        var active = activeKey === key;
        newChildren.push(react__WEBPACK_IMPORTED_MODULE_6___default.a.cloneElement(child, {
          active: active,
          destroyInactiveTabPane: props.destroyInactiveTabPane,
          rootPrefixCls: props.prefixCls
        }));
      });

      return newChildren;
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var props = this.props;
      var prefixCls = props.prefixCls,
          children = props.children,
          activeKey = props.activeKey,
          className = props.className,
          tabBarPosition = props.tabBarPosition,
          animated = props.animated,
          animatedWithMargin = props.animatedWithMargin;
      var style = props.style;

      var classes = classnames__WEBPACK_IMPORTED_MODULE_8___default()((_classnames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classnames, prefixCls + '-content', true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classnames, animated ? prefixCls + '-content-animated' : prefixCls + '-content-no-animated', true), _classnames), className);
      if (animated) {
        var activeIndex = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getActiveIndex"])(children, activeKey);
        if (activeIndex !== -1) {
          var animatedStyle = animatedWithMargin ? Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getMarginStyle"])(activeIndex, tabBarPosition) : Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getTransformPropValue"])(Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getTransformByIndex"])(activeIndex, tabBarPosition));
          style = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, style, animatedStyle);
        } else {
          style = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, style, {
            display: 'none'
          });
        }
      }
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
        'div',
        {
          className: classes,
          style: style
        },
        this.getTabPanes()
      );
    }
  }]);

  return TabContent;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TabContent);


TabContent.propTypes = {
  animated: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  animatedWithMargin: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node,
  activeKey: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,
  tabBarPosition: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
};

TabContent.defaultProps = {
  animated: true
};

/***/ }),

/***/ "./node_modules/rc-tabs/es/TabPane.js":
/*!********************************************!*\
  !*** ./node_modules/rc-tabs/es/TabPane.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ "./node_modules/rc-tabs/es/utils.js");
/* harmony import */ var _Sentinel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Sentinel */ "./node_modules/rc-tabs/es/Sentinel.js");













var TabPane = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(TabPane, _React$Component);

  function TabPane() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, TabPane);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (TabPane.__proto__ || Object.getPrototypeOf(TabPane)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(TabPane, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          id = _props.id,
          className = _props.className,
          destroyInactiveTabPane = _props.destroyInactiveTabPane,
          active = _props.active,
          forceRender = _props.forceRender,
          rootPrefixCls = _props.rootPrefixCls,
          style = _props.style,
          children = _props.children,
          placeholder = _props.placeholder,
          restProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_props, ['id', 'className', 'destroyInactiveTabPane', 'active', 'forceRender', 'rootPrefixCls', 'style', 'children', 'placeholder']);

      this._isActived = this._isActived || active;
      var prefixCls = rootPrefixCls + '-tabpane';
      var cls = classnames__WEBPACK_IMPORTED_MODULE_9___default()((_classnames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classnames, prefixCls, 1), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classnames, prefixCls + '-inactive', !active), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classnames, prefixCls + '-active', active), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classnames, className, className), _classnames));
      var isRender = destroyInactiveTabPane ? active : this._isActived;
      var shouldRender = isRender || forceRender;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _Sentinel__WEBPACK_IMPORTED_MODULE_11__["SentinelConsumer"],
        null,
        function (_ref) {
          var sentinelStart = _ref.sentinelStart,
              sentinelEnd = _ref.sentinelEnd,
              setPanelSentinelStart = _ref.setPanelSentinelStart,
              setPanelSentinelEnd = _ref.setPanelSentinelEnd;

          // Create sentinel
          var panelSentinelStart = void 0;
          var panelSentinelEnd = void 0;
          if (active && shouldRender) {
            panelSentinelStart = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Sentinel__WEBPACK_IMPORTED_MODULE_11__["default"], {
              setRef: setPanelSentinelStart,
              prevElement: sentinelStart
            });
            panelSentinelEnd = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Sentinel__WEBPACK_IMPORTED_MODULE_11__["default"], {
              setRef: setPanelSentinelEnd,
              nextElement: sentinelEnd
            });
          }

          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            'div',
            babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
              style: style,
              role: 'tabpanel',
              'aria-hidden': active ? 'false' : 'true',
              className: cls,
              id: id
            }, Object(_utils__WEBPACK_IMPORTED_MODULE_10__["getDataAttr"])(restProps)),
            panelSentinelStart,
            shouldRender ? children : placeholder,
            panelSentinelEnd
          );
        }
      );
    }
  }]);

  return TabPane;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TabPane);


TabPane.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  active: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  style: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any,
  destroyInactiveTabPane: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  forceRender: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node,
  rootPrefixCls: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node,
  id: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
};

TabPane.defaultProps = {
  placeholder: null
};

/***/ }),

/***/ "./node_modules/rc-tabs/es/Tabs.js":
/*!*****************************************!*\
  !*** ./node_modules/rc-tabs/es/Tabs.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! raf */ "./node_modules/raf/index.js");
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(raf__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _KeyCode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./KeyCode */ "./node_modules/rc-tabs/es/KeyCode.js");
/* harmony import */ var _TabPane__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TabPane */ "./node_modules/rc-tabs/es/TabPane.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils */ "./node_modules/rc-tabs/es/utils.js");
/* harmony import */ var _Sentinel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Sentinel */ "./node_modules/rc-tabs/es/Sentinel.js");
















function noop() {}

function getDefaultActiveKey(props) {
  var activeKey = void 0;
  react__WEBPACK_IMPORTED_MODULE_7___default.a.Children.forEach(props.children, function (child) {
    if (child && !activeKey && !child.props.disabled) {
      activeKey = child.key;
    }
  });
  return activeKey;
}

function activeKeyIsValid(props, key) {
  var keys = react__WEBPACK_IMPORTED_MODULE_7___default.a.Children.map(props.children, function (child) {
    return child && child.key;
  });
  return keys.indexOf(key) >= 0;
}

var Tabs = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Tabs, _React$Component);

  function Tabs(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Tabs);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    _initialiseProps.call(_this);

    var activeKey = void 0;
    if ('activeKey' in props) {
      activeKey = props.activeKey;
    } else if ('defaultActiveKey' in props) {
      activeKey = props.defaultActiveKey;
    } else {
      activeKey = getDefaultActiveKey(props);
    }

    _this.state = {
      activeKey: activeKey
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Tabs, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('activeKey' in nextProps) {
        this.setState({
          activeKey: nextProps.activeKey
        });
      } else if (!activeKeyIsValid(nextProps, this.state.activeKey)) {
        // https://github.com/ant-design/ant-design/issues/7093
        this.setState({
          activeKey: getDefaultActiveKey(nextProps)
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.destroy = true;
      raf__WEBPACK_IMPORTED_MODULE_10___default.a.cancel(this.sentinelId);
    }

    // Sentinel for tab index

  }, {
    key: 'updateSentinelContext',
    value: function updateSentinelContext() {
      var _this2 = this;

      if (this.destroy) return;

      raf__WEBPACK_IMPORTED_MODULE_10___default.a.cancel(this.sentinelId);
      this.sentinelId = raf__WEBPACK_IMPORTED_MODULE_10___default()(function () {
        _this2.forceUpdate();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var props = this.props;

      var prefixCls = props.prefixCls,
          navWrapper = props.navWrapper,
          tabBarPosition = props.tabBarPosition,
          className = props.className,
          renderTabContent = props.renderTabContent,
          renderTabBar = props.renderTabBar,
          destroyInactiveTabPane = props.destroyInactiveTabPane,
          restProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(props, ['prefixCls', 'navWrapper', 'tabBarPosition', 'className', 'renderTabContent', 'renderTabBar', 'destroyInactiveTabPane']);

      var cls = classnames__WEBPACK_IMPORTED_MODULE_9___default()((_classnames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classnames, prefixCls, 1), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classnames, prefixCls + '-' + tabBarPosition, 1), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classnames, className, !!className), _classnames));

      this.tabBar = renderTabBar();

      var tabBar = react__WEBPACK_IMPORTED_MODULE_7___default.a.cloneElement(this.tabBar, {
        prefixCls: prefixCls,
        navWrapper: navWrapper,
        key: 'tabBar',
        onKeyDown: this.onNavKeyDown,
        tabBarPosition: tabBarPosition,
        onTabClick: this.onTabClick,
        panels: props.children,
        activeKey: this.state.activeKey
      });

      var tabContent = react__WEBPACK_IMPORTED_MODULE_7___default.a.cloneElement(renderTabContent(), {
        prefixCls: prefixCls,
        tabBarPosition: tabBarPosition,
        activeKey: this.state.activeKey,
        destroyInactiveTabPane: destroyInactiveTabPane,
        children: props.children,
        onChange: this.setActiveKey,
        key: 'tabContent'
      });

      var sentinelStart = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Sentinel__WEBPACK_IMPORTED_MODULE_14__["default"], {
        key: 'sentinelStart',
        setRef: this.setSentinelStart,
        nextElement: this.panelSentinelStart
      });
      var sentinelEnd = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Sentinel__WEBPACK_IMPORTED_MODULE_14__["default"], {
        key: 'sentinelEnd',
        setRef: this.setSentinelEnd,
        prevElement: this.panelSentinelEnd
      });

      var contents = [];
      if (tabBarPosition === 'bottom') {
        contents.push(sentinelStart, tabContent, sentinelEnd, tabBar);
      } else {
        contents.push(tabBar, sentinelStart, tabContent, sentinelEnd);
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        _Sentinel__WEBPACK_IMPORTED_MODULE_14__["SentinelProvider"],
        {
          value: {
            sentinelStart: this.sentinelStart,
            sentinelEnd: this.sentinelEnd,
            setPanelSentinelStart: this.setPanelSentinelStart,
            setPanelSentinelEnd: this.setPanelSentinelEnd
          }
        },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          'div',
          babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            className: cls,
            style: props.style
          }, Object(_utils__WEBPACK_IMPORTED_MODULE_13__["getDataAttr"])(restProps), {
            onScroll: this.onScroll
          }),
          contents
        )
      );
    }
  }]);

  return Tabs;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onTabClick = function (activeKey, e) {
    if (_this3.tabBar.props.onTabClick) {
      _this3.tabBar.props.onTabClick(activeKey, e);
    }
    _this3.setActiveKey(activeKey);
  };

  this.onNavKeyDown = function (e) {
    var eventKeyCode = e.keyCode;
    if (eventKeyCode === _KeyCode__WEBPACK_IMPORTED_MODULE_11__["default"].RIGHT || eventKeyCode === _KeyCode__WEBPACK_IMPORTED_MODULE_11__["default"].DOWN) {
      e.preventDefault();
      var nextKey = _this3.getNextActiveKey(true);
      _this3.onTabClick(nextKey);
    } else if (eventKeyCode === _KeyCode__WEBPACK_IMPORTED_MODULE_11__["default"].LEFT || eventKeyCode === _KeyCode__WEBPACK_IMPORTED_MODULE_11__["default"].UP) {
      e.preventDefault();
      var previousKey = _this3.getNextActiveKey(false);
      _this3.onTabClick(previousKey);
    }
  };

  this.onScroll = function (_ref) {
    var target = _ref.target,
        currentTarget = _ref.currentTarget;

    if (target === currentTarget && target.scrollLeft > 0) {
      target.scrollLeft = 0;
    }
  };

  this.setSentinelStart = function (node) {
    _this3.sentinelStart = node;
  };

  this.setSentinelEnd = function (node) {
    _this3.sentinelEnd = node;
  };

  this.setPanelSentinelStart = function (node) {
    if (node !== _this3.panelSentinelStart) {
      _this3.updateSentinelContext();
    }
    _this3.panelSentinelStart = node;
  };

  this.setPanelSentinelEnd = function (node) {
    if (node !== _this3.panelSentinelEnd) {
      _this3.updateSentinelContext();
    }
    _this3.panelSentinelEnd = node;
  };

  this.setActiveKey = function (activeKey) {
    if (_this3.state.activeKey !== activeKey) {
      if (!('activeKey' in _this3.props)) {
        _this3.setState({
          activeKey: activeKey
        });
      }
      _this3.props.onChange(activeKey);
    }
  };

  this.getNextActiveKey = function (next) {
    var activeKey = _this3.state.activeKey;
    var children = [];
    react__WEBPACK_IMPORTED_MODULE_7___default.a.Children.forEach(_this3.props.children, function (c) {
      if (c && !c.props.disabled) {
        if (next) {
          children.push(c);
        } else {
          children.unshift(c);
        }
      }
    });
    var length = children.length;
    var ret = length && children[0].key;
    children.forEach(function (child, i) {
      if (child.key === activeKey) {
        if (i === length - 1) {
          ret = children[0].key;
        } else {
          ret = children[i + 1].key;
        }
      }
    });
    return ret;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Tabs);


Tabs.propTypes = {
  destroyInactiveTabPane: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  renderTabBar: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  renderTabContent: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  navWrapper: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  tabBarPosition: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  activeKey: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  defaultActiveKey: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
};

Tabs.defaultProps = {
  prefixCls: 'rc-tabs',
  destroyInactiveTabPane: false,
  onChange: noop,
  navWrapper: function navWrapper(arg) {
    return arg;
  },
  tabBarPosition: 'top',
  children: null,
  style: {}
};

Tabs.TabPane = _TabPane__WEBPACK_IMPORTED_MODULE_12__["default"];

/***/ }),

/***/ "./node_modules/rc-tabs/es/index.js":
/*!******************************************!*\
  !*** ./node_modules/rc-tabs/es/index.js ***!
  \******************************************/
/*! exports provided: default, TabPane, TabContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tabs */ "./node_modules/rc-tabs/es/Tabs.js");
/* harmony import */ var _TabPane__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabPane */ "./node_modules/rc-tabs/es/TabPane.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabPane", function() { return _TabPane__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _TabContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TabContent */ "./node_modules/rc-tabs/es/TabContent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabContent", function() { return _TabContent__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/* harmony default export */ __webpack_exports__["default"] = (_Tabs__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/rc-tabs/es/utils.js":
/*!******************************************!*\
  !*** ./node_modules/rc-tabs/es/utils.js ***!
  \******************************************/
/*! exports provided: toArray, getActiveIndex, getActiveKey, setTransform, isTransformSupported, setTransition, getTransformPropValue, isVertical, getTransformByIndex, getMarginStyle, getStyle, setPxStyle, getDataAttr, getLeft, getTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveIndex", function() { return getActiveIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveKey", function() { return getActiveKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTransform", function() { return setTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTransformSupported", function() { return isTransformSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTransition", function() { return setTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransformPropValue", function() { return getTransformPropValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVertical", function() { return isVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransformByIndex", function() { return getTransformByIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarginStyle", function() { return getMarginStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPxStyle", function() { return setPxStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataAttr", function() { return getDataAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLeft", function() { return getLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTop", function() { return getTop; });
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function toArray(children) {
  // allow [c,[a,b]]
  var c = [];
  react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.forEach(children, function (child) {
    if (child) {
      c.push(child);
    }
  });
  return c;
}

function getActiveIndex(children, activeKey) {
  var c = toArray(children);
  for (var i = 0; i < c.length; i++) {
    if (c[i].key === activeKey) {
      return i;
    }
  }
  return -1;
}

function getActiveKey(children, index) {
  var c = toArray(children);
  return c[index].key;
}

function setTransform(style, v) {
  style.transform = v;
  style.webkitTransform = v;
  style.mozTransform = v;
}

function isTransformSupported(style) {
  return 'transform' in style || 'webkitTransform' in style || 'MozTransform' in style;
}

function setTransition(style, v) {
  style.transition = v;
  style.webkitTransition = v;
  style.MozTransition = v;
}
function getTransformPropValue(v) {
  return {
    transform: v,
    WebkitTransform: v,
    MozTransform: v
  };
}

function isVertical(tabBarPosition) {
  return tabBarPosition === 'left' || tabBarPosition === 'right';
}

function getTransformByIndex(index, tabBarPosition) {
  var translate = isVertical(tabBarPosition) ? 'translateY' : 'translateX';
  return translate + '(' + -index * 100 + '%) translateZ(0)';
}

function getMarginStyle(index, tabBarPosition) {
  var marginDirection = isVertical(tabBarPosition) ? 'marginTop' : 'marginLeft';
  return babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, marginDirection, -index * 100 + '%');
}

function getStyle(el, property) {
  return +window.getComputedStyle(el).getPropertyValue(property).replace('px', '');
}

function setPxStyle(el, value, vertical) {
  value = vertical ? '0px, ' + value + 'px, 0px' : value + 'px, 0px, 0px';
  setTransform(el.style, 'translate3d(' + value + ')');
}

function getDataAttr(props) {
  return Object.keys(props).reduce(function (prev, key) {
    if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
      prev[key] = props[key];
    }
    return prev;
  }, {});
}

function toNum(style, property) {
  return +style.getPropertyValue(property).replace('px', '');
}

function getTypeValue(start, current, end, tabNode, wrapperNode) {
  var total = getStyle(wrapperNode, 'padding-' + start);
  if (!tabNode || !tabNode.parentNode) {
    return total;
  }

  var childNodes = tabNode.parentNode.childNodes;

  Array.prototype.some.call(childNodes, function (node) {
    var style = window.getComputedStyle(node);

    if (node !== tabNode) {
      total += toNum(style, 'margin-' + start);
      total += node[current];
      total += toNum(style, 'margin-' + end);

      if (style.boxSizing === 'content-box') {
        total += toNum(style, 'border-' + start + '-width') + toNum(style, 'border-' + end + '-width');
      }
      return false;
    }

    // We need count current node margin
    // ref: https://github.com/react-component/tabs/pull/139#issuecomment-431005262
    total += toNum(style, 'margin-' + start);

    return true;
  });

  return total;
}

function getLeft(tabNode, wrapperNode) {
  return getTypeValue('left', 'offsetWidth', 'right', tabNode, wrapperNode);
}

function getTop(tabNode, wrapperNode) {
  return getTypeValue('top', 'offsetHeight', 'bottom', tabNode, wrapperNode);
}

/***/ }),

/***/ "./node_modules/rc-tabs/lib/InkTabBarNode.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-tabs/lib/InkTabBarNode.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/rc-tabs/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _componentDidUpdate(component, init) {
  var _component$props = component.props,
      styles = _component$props.styles,
      panels = _component$props.panels,
      activeKey = _component$props.activeKey;

  var rootNode = component.props.getRef('root');
  var wrapNode = component.props.getRef('nav') || rootNode;
  var inkBarNode = component.props.getRef('inkBar');
  var activeTab = component.props.getRef('activeTab');
  var inkBarNodeStyle = inkBarNode.style;
  var tabBarPosition = component.props.tabBarPosition;
  var activeIndex = (0, _utils.getActiveIndex)(panels, activeKey);
  if (init) {
    // prevent mount animation
    inkBarNodeStyle.display = 'none';
  }
  if (activeTab) {
    var tabNode = activeTab;
    var transformSupported = (0, _utils.isTransformSupported)(inkBarNodeStyle);

    // Reset current style
    (0, _utils.setTransform)(inkBarNodeStyle, '');
    inkBarNodeStyle.width = '';
    inkBarNodeStyle.height = '';
    inkBarNodeStyle.left = '';
    inkBarNodeStyle.top = '';
    inkBarNodeStyle.bottom = '';
    inkBarNodeStyle.right = '';

    if (tabBarPosition === 'top' || tabBarPosition === 'bottom') {
      var left = (0, _utils.getLeft)(tabNode, wrapNode);
      var width = tabNode.offsetWidth;

      // If tabNode'width width equal to wrapNode'width when tabBarPosition is top or bottom
      // It means no css working, then ink bar should not have width until css is loaded
      // Fix https://github.com/ant-design/ant-design/issues/7564
      if (width === rootNode.offsetWidth) {
        width = 0;
      } else if (styles.inkBar && styles.inkBar.width !== undefined) {
        width = parseFloat(styles.inkBar.width, 10);
        if (width) {
          left += (tabNode.offsetWidth - width) / 2;
        }
      }

      // use 3d gpu to optimize render
      if (transformSupported) {
        (0, _utils.setTransform)(inkBarNodeStyle, 'translate3d(' + left + 'px,0,0)');
      } else {
        inkBarNodeStyle.left = left + 'px';
      }
      inkBarNodeStyle.width = width + 'px';
    } else {
      var top = (0, _utils.getTop)(tabNode, wrapNode, true);
      var height = tabNode.offsetHeight;
      if (styles.inkBar && styles.inkBar.height !== undefined) {
        height = parseFloat(styles.inkBar.height, 10);
        if (height) {
          top += (tabNode.offsetHeight - height) / 2;
        }
      }
      if (transformSupported) {
        (0, _utils.setTransform)(inkBarNodeStyle, 'translate3d(0,' + top + 'px,0)');
        inkBarNodeStyle.top = '0';
      } else {
        inkBarNodeStyle.top = top + 'px';
      }
      inkBarNodeStyle.height = height + 'px';
    }
  }
  inkBarNodeStyle.display = activeIndex !== -1 ? 'block' : 'none';
}

var InkTabBarNode = function (_React$Component) {
  (0, _inherits3['default'])(InkTabBarNode, _React$Component);

  function InkTabBarNode() {
    (0, _classCallCheck3['default'])(this, InkTabBarNode);
    return (0, _possibleConstructorReturn3['default'])(this, (InkTabBarNode.__proto__ || Object.getPrototypeOf(InkTabBarNode)).apply(this, arguments));
  }

  (0, _createClass3['default'])(InkTabBarNode, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // ref https://github.com/ant-design/ant-design/issues/8678
      // ref https://github.com/react-component/tabs/issues/135
      // InkTabBarNode need parent/root ref for calculating position
      // since parent componentDidMount triggered after child componentDidMount
      // we're doing a quick fix here to use setTimeout to calculate position
      // after parent/root component mounted
      this.timeout = setTimeout(function () {
        _componentDidUpdate(_this2, true);
      }, 0);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      _componentDidUpdate(this);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          styles = _props.styles,
          inkBarAnimated = _props.inkBarAnimated;

      var className = prefixCls + '-ink-bar';
      var classes = (0, _classnames3['default'])((_classnames = {}, (0, _defineProperty3['default'])(_classnames, className, true), (0, _defineProperty3['default'])(_classnames, inkBarAnimated ? className + '-animated' : className + '-no-animated', true), _classnames));
      return _react2['default'].createElement('div', {
        style: styles.inkBar,
        className: classes,
        key: 'inkBar',
        ref: this.props.saveRef('inkBar')
      });
    }
  }]);
  return InkTabBarNode;
}(_react2['default'].Component);

exports['default'] = InkTabBarNode;


InkTabBarNode.propTypes = {
  prefixCls: _propTypes2['default'].string,
  styles: _propTypes2['default'].object,
  inkBarAnimated: _propTypes2['default'].bool,
  saveRef: _propTypes2['default'].func
};

InkTabBarNode.defaultProps = {
  prefixCls: '',
  inkBarAnimated: true,
  styles: {},
  saveRef: function saveRef() {}
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-tabs/lib/SaveRef.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-tabs/lib/SaveRef.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SaveRef = function (_React$Component) {
  (0, _inherits3['default'])(SaveRef, _React$Component);

  function SaveRef() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3['default'])(this, SaveRef);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3['default'])(this, (_ref = SaveRef.__proto__ || Object.getPrototypeOf(SaveRef)).call.apply(_ref, [this].concat(args))), _this), _this.getRef = function (name) {
      return _this[name];
    }, _this.saveRef = function (name) {
      return function (node) {
        if (node) {
          _this[name] = node;
        }
      };
    }, _temp), (0, _possibleConstructorReturn3['default'])(_this, _ret);
  }

  (0, _createClass3['default'])(SaveRef, [{
    key: 'render',
    value: function render() {
      return this.props.children(this.saveRef, this.getRef);
    }
  }]);
  return SaveRef;
}(_react2['default'].Component);

exports['default'] = SaveRef;


SaveRef.propTypes = {
  children: _propTypes2['default'].func
};

SaveRef.defaultProps = {
  children: function children() {
    return null;
  }
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-tabs/lib/ScrollableInkTabBar.js":
/*!*********************************************************!*\
  !*** ./node_modules/rc-tabs/lib/ScrollableInkTabBar.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _InkTabBarNode = __webpack_require__(/*! ./InkTabBarNode */ "./node_modules/rc-tabs/lib/InkTabBarNode.js");

var _InkTabBarNode2 = _interopRequireDefault(_InkTabBarNode);

var _TabBarTabsNode = __webpack_require__(/*! ./TabBarTabsNode */ "./node_modules/rc-tabs/lib/TabBarTabsNode.js");

var _TabBarTabsNode2 = _interopRequireDefault(_TabBarTabsNode);

var _TabBarRootNode = __webpack_require__(/*! ./TabBarRootNode */ "./node_modules/rc-tabs/lib/TabBarRootNode.js");

var _TabBarRootNode2 = _interopRequireDefault(_TabBarRootNode);

var _ScrollableTabBarNode = __webpack_require__(/*! ./ScrollableTabBarNode */ "./node_modules/rc-tabs/lib/ScrollableTabBarNode.js");

var _ScrollableTabBarNode2 = _interopRequireDefault(_ScrollableTabBarNode);

var _SaveRef = __webpack_require__(/*! ./SaveRef */ "./node_modules/rc-tabs/lib/SaveRef.js");

var _SaveRef2 = _interopRequireDefault(_SaveRef);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* eslint-disable react/prefer-stateless-function */
var ScrollableInkTabBar = function (_React$Component) {
  (0, _inherits3['default'])(ScrollableInkTabBar, _React$Component);

  function ScrollableInkTabBar() {
    (0, _classCallCheck3['default'])(this, ScrollableInkTabBar);
    return (0, _possibleConstructorReturn3['default'])(this, (ScrollableInkTabBar.__proto__ || Object.getPrototypeOf(ScrollableInkTabBar)).apply(this, arguments));
  }

  (0, _createClass3['default'])(ScrollableInkTabBar, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2['default'].createElement(
        _SaveRef2['default'],
        null,
        function (saveRef, getRef) {
          return _react2['default'].createElement(
            _TabBarRootNode2['default'],
            (0, _extends3['default'])({ saveRef: saveRef }, _this2.props),
            _react2['default'].createElement(
              _ScrollableTabBarNode2['default'],
              (0, _extends3['default'])({ saveRef: saveRef, getRef: getRef }, _this2.props),
              _react2['default'].createElement(_TabBarTabsNode2['default'], (0, _extends3['default'])({ saveRef: saveRef }, _this2.props)),
              _react2['default'].createElement(_InkTabBarNode2['default'], (0, _extends3['default'])({ saveRef: saveRef, getRef: getRef }, _this2.props))
            )
          );
        }
      );
    }
  }]);
  return ScrollableInkTabBar;
}(_react2['default'].Component);

exports['default'] = ScrollableInkTabBar;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-tabs/lib/ScrollableTabBarNode.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-tabs/lib/ScrollableTabBarNode.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames5 = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames6 = _interopRequireDefault(_classnames5);

var _addEventListener = __webpack_require__(/*! rc-util/lib/Dom/addEventListener */ "./node_modules/rc-util/lib/Dom/addEventListener.js");

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _debounce = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");

var _debounce2 = _interopRequireDefault(_debounce);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/rc-tabs/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ScrollableTabBarNode = function (_React$Component) {
  (0, _inherits3['default'])(ScrollableTabBarNode, _React$Component);

  function ScrollableTabBarNode(props) {
    (0, _classCallCheck3['default'])(this, ScrollableTabBarNode);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (ScrollableTabBarNode.__proto__ || Object.getPrototypeOf(ScrollableTabBarNode)).call(this, props));

    _this.prevTransitionEnd = function (e) {
      if (e.propertyName !== 'opacity') {
        return;
      }
      var container = _this.props.getRef('container');
      _this.scrollToActiveTab({
        target: container,
        currentTarget: container
      });
    };

    _this.scrollToActiveTab = function (e) {
      var activeTab = _this.props.getRef('activeTab');
      var navWrap = _this.props.getRef('navWrap');
      if (e && e.target !== e.currentTarget || !activeTab) {
        return;
      }

      // when not scrollable or enter scrollable first time, don't emit scrolling
      var needToSroll = _this.isNextPrevShown() && _this.lastNextPrevShown;
      _this.lastNextPrevShown = _this.isNextPrevShown();
      if (!needToSroll) {
        return;
      }

      var activeTabWH = _this.getScrollWH(activeTab);
      var navWrapNodeWH = _this.getOffsetWH(navWrap);
      var offset = _this.offset;

      var wrapOffset = _this.getOffsetLT(navWrap);
      var activeTabOffset = _this.getOffsetLT(activeTab);
      if (wrapOffset > activeTabOffset) {
        offset += wrapOffset - activeTabOffset;
        _this.setOffset(offset);
      } else if (wrapOffset + navWrapNodeWH < activeTabOffset + activeTabWH) {
        offset -= activeTabOffset + activeTabWH - (wrapOffset + navWrapNodeWH);
        _this.setOffset(offset);
      }
    };

    _this.prev = function (e) {
      _this.props.onPrevClick(e);
      var navWrapNode = _this.props.getRef('navWrap');
      var navWrapNodeWH = _this.getOffsetWH(navWrapNode);
      var offset = _this.offset;

      _this.setOffset(offset + navWrapNodeWH);
    };

    _this.next = function (e) {
      _this.props.onNextClick(e);
      var navWrapNode = _this.props.getRef('navWrap');
      var navWrapNodeWH = _this.getOffsetWH(navWrapNode);
      var offset = _this.offset;

      _this.setOffset(offset - navWrapNodeWH);
    };

    _this.offset = 0;

    _this.state = {
      next: false,
      prev: false
    };
    return _this;
  }

  (0, _createClass3['default'])(ScrollableTabBarNode, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.componentDidUpdate();
      this.debouncedResize = (0, _debounce2['default'])(function () {
        _this2.setNextPrev();
        _this2.scrollToActiveTab();
      }, 200);
      this.resizeEvent = (0, _addEventListener2['default'])(window, 'resize', this.debouncedResize);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var props = this.props;
      if (prevProps && prevProps.tabBarPosition !== props.tabBarPosition) {
        this.setOffset(0);
        return;
      }
      var nextPrev = this.setNextPrev();
      // wait next, prev show hide
      /* eslint react/no-did-update-set-state:0 */
      if (this.isNextPrevShown(this.state) !== this.isNextPrevShown(nextPrev)) {
        this.setState({}, this.scrollToActiveTab);
      } else if (!prevProps || props.activeKey !== prevProps.activeKey) {
        // can not use props.activeKey
        this.scrollToActiveTab();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.resizeEvent) {
        this.resizeEvent.remove();
      }
      if (this.debouncedResize && this.debouncedResize.cancel) {
        this.debouncedResize.cancel();
      }
    }
  }, {
    key: 'setNextPrev',
    value: function setNextPrev() {
      var navNode = this.props.getRef('nav');
      var navTabsContainer = this.props.getRef('navTabsContainer');
      var navNodeWH = this.getScrollWH(navTabsContainer || navNode);
      // Add 1px to fix `offsetWidth` with decimal in Chrome not correct handle
      // https://github.com/ant-design/ant-design/issues/13423
      var containerWH = this.getOffsetWH(this.props.getRef('container')) + 1;
      var navWrapNodeWH = this.getOffsetWH(this.props.getRef('navWrap'));
      var offset = this.offset;

      var minOffset = containerWH - navNodeWH;
      var _state = this.state,
          next = _state.next,
          prev = _state.prev;

      if (minOffset >= 0) {
        next = false;
        this.setOffset(0, false);
        offset = 0;
      } else if (minOffset < offset) {
        next = true;
      } else {
        next = false;
        // Fix https://github.com/ant-design/ant-design/issues/8861
        // Test with container offset which is stable
        // and set the offset of the nav wrap node
        var realOffset = navWrapNodeWH - navNodeWH;
        this.setOffset(realOffset, false);
        offset = realOffset;
      }

      if (offset < 0) {
        prev = true;
      } else {
        prev = false;
      }

      this.setNext(next);
      this.setPrev(prev);
      return {
        next: next,
        prev: prev
      };
    }
  }, {
    key: 'getOffsetWH',
    value: function getOffsetWH(node) {
      var tabBarPosition = this.props.tabBarPosition;
      var prop = 'offsetWidth';
      if (tabBarPosition === 'left' || tabBarPosition === 'right') {
        prop = 'offsetHeight';
      }
      return node[prop];
    }
  }, {
    key: 'getScrollWH',
    value: function getScrollWH(node) {
      var tabBarPosition = this.props.tabBarPosition;
      var prop = 'scrollWidth';
      if (tabBarPosition === 'left' || tabBarPosition === 'right') {
        prop = 'scrollHeight';
      }
      return node[prop];
    }
  }, {
    key: 'getOffsetLT',
    value: function getOffsetLT(node) {
      var tabBarPosition = this.props.tabBarPosition;
      var prop = 'left';
      if (tabBarPosition === 'left' || tabBarPosition === 'right') {
        prop = 'top';
      }
      return node.getBoundingClientRect()[prop];
    }
  }, {
    key: 'setOffset',
    value: function setOffset(offset) {
      var checkNextPrev = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var target = Math.min(0, offset);
      if (this.offset !== target) {
        this.offset = target;
        var navOffset = {};
        var tabBarPosition = this.props.tabBarPosition;
        var navStyle = this.props.getRef('nav').style;
        var transformSupported = (0, _utils.isTransformSupported)(navStyle);
        if (tabBarPosition === 'left' || tabBarPosition === 'right') {
          if (transformSupported) {
            navOffset = {
              value: 'translate3d(0,' + target + 'px,0)'
            };
          } else {
            navOffset = {
              name: 'top',
              value: target + 'px'
            };
          }
        } else if (transformSupported) {
          navOffset = {
            value: 'translate3d(' + target + 'px,0,0)'
          };
        } else {
          navOffset = {
            name: 'left',
            value: target + 'px'
          };
        }
        if (transformSupported) {
          (0, _utils.setTransform)(navStyle, navOffset.value);
        } else {
          navStyle[navOffset.name] = navOffset.value;
        }
        if (checkNextPrev) {
          this.setNextPrev();
        }
      }
    }
  }, {
    key: 'setPrev',
    value: function setPrev(v) {
      if (this.state.prev !== v) {
        this.setState({
          prev: v
        });
      }
    }
  }, {
    key: 'setNext',
    value: function setNext(v) {
      if (this.state.next !== v) {
        this.setState({
          next: v
        });
      }
    }
  }, {
    key: 'isNextPrevShown',
    value: function isNextPrevShown(state) {
      if (state) {
        return state.next || state.prev;
      }
      return this.state.next || this.state.prev;
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames, _classnames2, _classnames3, _classnames4;

      var _state2 = this.state,
          next = _state2.next,
          prev = _state2.prev;
      var _props = this.props,
          prefixCls = _props.prefixCls,
          scrollAnimated = _props.scrollAnimated,
          navWrapper = _props.navWrapper,
          prevIcon = _props.prevIcon,
          nextIcon = _props.nextIcon;

      var showNextPrev = prev || next;

      var prevButton = _react2['default'].createElement(
        'span',
        {
          onClick: prev ? this.prev : null,
          unselectable: 'unselectable',
          className: (0, _classnames6['default'])((_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls + '-tab-prev', 1), (0, _defineProperty3['default'])(_classnames, prefixCls + '-tab-btn-disabled', !prev), (0, _defineProperty3['default'])(_classnames, prefixCls + '-tab-arrow-show', showNextPrev), _classnames)),
          onTransitionEnd: this.prevTransitionEnd
        },
        prevIcon || _react2['default'].createElement('span', { className: prefixCls + '-tab-prev-icon' })
      );

      var nextButton = _react2['default'].createElement(
        'span',
        {
          onClick: next ? this.next : null,
          unselectable: 'unselectable',
          className: (0, _classnames6['default'])((_classnames2 = {}, (0, _defineProperty3['default'])(_classnames2, prefixCls + '-tab-next', 1), (0, _defineProperty3['default'])(_classnames2, prefixCls + '-tab-btn-disabled', !next), (0, _defineProperty3['default'])(_classnames2, prefixCls + '-tab-arrow-show', showNextPrev), _classnames2))
        },
        nextIcon || _react2['default'].createElement('span', { className: prefixCls + '-tab-next-icon' })
      );

      var navClassName = prefixCls + '-nav';
      var navClasses = (0, _classnames6['default'])((_classnames3 = {}, (0, _defineProperty3['default'])(_classnames3, navClassName, true), (0, _defineProperty3['default'])(_classnames3, scrollAnimated ? navClassName + '-animated' : navClassName + '-no-animated', true), _classnames3));

      return _react2['default'].createElement(
        'div',
        {
          className: (0, _classnames6['default'])((_classnames4 = {}, (0, _defineProperty3['default'])(_classnames4, prefixCls + '-nav-container', 1), (0, _defineProperty3['default'])(_classnames4, prefixCls + '-nav-container-scrolling', showNextPrev), _classnames4)),
          key: 'container',
          ref: this.props.saveRef('container')
        },
        prevButton,
        nextButton,
        _react2['default'].createElement(
          'div',
          { className: prefixCls + '-nav-wrap', ref: this.props.saveRef('navWrap') },
          _react2['default'].createElement(
            'div',
            { className: prefixCls + '-nav-scroll' },
            _react2['default'].createElement(
              'div',
              { className: navClasses, ref: this.props.saveRef('nav') },
              navWrapper(this.props.children)
            )
          )
        )
      );
    }
  }]);
  return ScrollableTabBarNode;
}(_react2['default'].Component);

exports['default'] = ScrollableTabBarNode;


ScrollableTabBarNode.propTypes = {
  getRef: _propTypes2['default'].func.isRequired,
  saveRef: _propTypes2['default'].func.isRequired,
  tabBarPosition: _propTypes2['default'].oneOf(['left', 'right', 'top', 'bottom']),
  prefixCls: _propTypes2['default'].string,
  scrollAnimated: _propTypes2['default'].bool,
  onPrevClick: _propTypes2['default'].func,
  onNextClick: _propTypes2['default'].func,
  navWrapper: _propTypes2['default'].func,
  children: _propTypes2['default'].node,
  prevIcon: _propTypes2['default'].node,
  nextIcon: _propTypes2['default'].node
};

ScrollableTabBarNode.defaultProps = {
  tabBarPosition: 'left',
  prefixCls: '',
  scrollAnimated: true,
  onPrevClick: function onPrevClick() {},
  onNextClick: function onNextClick() {},
  navWrapper: function navWrapper(ele) {
    return ele;
  }
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-tabs/lib/TabBarRootNode.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-tabs/lib/TabBarRootNode.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/rc-tabs/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TabBarRootNode = function (_React$Component) {
  (0, _inherits3['default'])(TabBarRootNode, _React$Component);

  function TabBarRootNode() {
    (0, _classCallCheck3['default'])(this, TabBarRootNode);
    return (0, _possibleConstructorReturn3['default'])(this, (TabBarRootNode.__proto__ || Object.getPrototypeOf(TabBarRootNode)).apply(this, arguments));
  }

  (0, _createClass3['default'])(TabBarRootNode, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          prefixCls = _props.prefixCls,
          onKeyDown = _props.onKeyDown,
          className = _props.className,
          extraContent = _props.extraContent,
          style = _props.style,
          tabBarPosition = _props.tabBarPosition,
          children = _props.children,
          restProps = (0, _objectWithoutProperties3['default'])(_props, ['prefixCls', 'onKeyDown', 'className', 'extraContent', 'style', 'tabBarPosition', 'children']);

      var cls = (0, _classnames3['default'])(prefixCls + '-bar', (0, _defineProperty3['default'])({}, className, !!className));
      var topOrBottom = tabBarPosition === 'top' || tabBarPosition === 'bottom';
      var tabBarExtraContentStyle = topOrBottom ? { float: 'right' } : {};
      var extraContentStyle = extraContent && extraContent.props ? extraContent.props.style : {};
      var newChildren = children;
      if (extraContent) {
        newChildren = [(0, _react.cloneElement)(extraContent, {
          key: 'extra',
          style: (0, _extends3['default'])({}, tabBarExtraContentStyle, extraContentStyle)
        }), (0, _react.cloneElement)(children, { key: 'content' })];
        newChildren = topOrBottom ? newChildren : newChildren.reverse();
      }
      return _react2['default'].createElement(
        'div',
        (0, _extends3['default'])({
          role: 'tablist',
          className: cls,
          tabIndex: '0',
          ref: this.props.saveRef('root'),
          onKeyDown: onKeyDown,
          style: style
        }, (0, _utils.getDataAttr)(restProps)),
        newChildren
      );
    }
  }]);
  return TabBarRootNode;
}(_react2['default'].Component);

exports['default'] = TabBarRootNode;


TabBarRootNode.propTypes = {
  prefixCls: _propTypes2['default'].string,
  className: _propTypes2['default'].string,
  style: _propTypes2['default'].object,
  tabBarPosition: _propTypes2['default'].oneOf(['left', 'right', 'top', 'bottom']),
  children: _propTypes2['default'].node,
  extraContent: _propTypes2['default'].node,
  onKeyDown: _propTypes2['default'].func,
  saveRef: _propTypes2['default'].func
};

TabBarRootNode.defaultProps = {
  prefixCls: '',
  className: '',
  style: {},
  tabBarPosition: 'top',
  extraContent: null,
  children: null,
  onKeyDown: function onKeyDown() {},
  saveRef: function saveRef() {}
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-tabs/lib/TabBarTabsNode.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-tabs/lib/TabBarTabsNode.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _warning = __webpack_require__(/*! warning */ "./node_modules/rc-tabs/node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/rc-tabs/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TabBarTabsNode = function (_React$Component) {
  (0, _inherits3['default'])(TabBarTabsNode, _React$Component);

  function TabBarTabsNode() {
    (0, _classCallCheck3['default'])(this, TabBarTabsNode);
    return (0, _possibleConstructorReturn3['default'])(this, (TabBarTabsNode.__proto__ || Object.getPrototypeOf(TabBarTabsNode)).apply(this, arguments));
  }

  (0, _createClass3['default'])(TabBarTabsNode, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.panels,
          activeKey = _props.activeKey,
          prefixCls = _props.prefixCls,
          tabBarGutter = _props.tabBarGutter,
          saveRef = _props.saveRef,
          tabBarPosition = _props.tabBarPosition;

      var rst = [];

      _react2['default'].Children.forEach(children, function (child, index) {
        if (!child) {
          return;
        }
        var key = child.key;
        var cls = activeKey === key ? prefixCls + '-tab-active' : '';
        cls += ' ' + prefixCls + '-tab';
        var events = {};
        if (child.props.disabled) {
          cls += ' ' + prefixCls + '-tab-disabled';
        } else {
          events = {
            onClick: _this2.props.onTabClick.bind(_this2, key)
          };
        }
        var ref = {};
        if (activeKey === key) {
          ref.ref = saveRef('activeTab');
        }

        var gutter = tabBarGutter && index === children.length - 1 ? 0 : tabBarGutter;
        var style = (0, _defineProperty3['default'])({}, (0, _utils.isVertical)(tabBarPosition) ? 'marginBottom' : 'marginRight', gutter);
        (0, _warning2['default'])('tab' in child.props, 'There must be `tab` property on children of Tabs.');
        rst.push(_react2['default'].createElement(
          'div',
          (0, _extends3['default'])({
            role: 'tab',
            'aria-disabled': child.props.disabled ? 'true' : 'false',
            'aria-selected': activeKey === key ? 'true' : 'false'
          }, events, {
            className: cls,
            key: key,
            style: style
          }, ref),
          child.props.tab
        ));
      });

      return _react2['default'].createElement(
        'div',
        { ref: saveRef('navTabsContainer') },
        rst
      );
    }
  }]);
  return TabBarTabsNode;
}(_react2['default'].Component);

exports['default'] = TabBarTabsNode;


TabBarTabsNode.propTypes = {
  activeKey: _propTypes2['default'].string,
  panels: _propTypes2['default'].node,
  prefixCls: _propTypes2['default'].string,
  tabBarGutter: _propTypes2['default'].number,
  onTabClick: _propTypes2['default'].func,
  saveRef: _propTypes2['default'].func,
  tabBarPosition: _propTypes2['default'].string
};

TabBarTabsNode.defaultProps = {
  panels: [],
  prefixCls: [],
  tabBarGutter: null,
  onTabClick: function onTabClick() {},
  saveRef: function saveRef() {}
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-tabs/lib/TabContent.js":
/*!************************************************!*\
  !*** ./node_modules/rc-tabs/lib/TabContent.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames3 = _interopRequireDefault(_classnames2);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/rc-tabs/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var TabContent = function (_React$Component) {
  (0, _inherits3['default'])(TabContent, _React$Component);

  function TabContent() {
    (0, _classCallCheck3['default'])(this, TabContent);
    return (0, _possibleConstructorReturn3['default'])(this, (TabContent.__proto__ || Object.getPrototypeOf(TabContent)).apply(this, arguments));
  }

  (0, _createClass3['default'])(TabContent, [{
    key: 'getTabPanes',
    value: function getTabPanes() {
      var props = this.props;
      var activeKey = props.activeKey;
      var children = props.children;
      var newChildren = [];

      _react2['default'].Children.forEach(children, function (child) {
        if (!child) {
          return;
        }
        var key = child.key;
        var active = activeKey === key;
        newChildren.push(_react2['default'].cloneElement(child, {
          active: active,
          destroyInactiveTabPane: props.destroyInactiveTabPane,
          rootPrefixCls: props.prefixCls
        }));
      });

      return newChildren;
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var props = this.props;
      var prefixCls = props.prefixCls,
          children = props.children,
          activeKey = props.activeKey,
          className = props.className,
          tabBarPosition = props.tabBarPosition,
          animated = props.animated,
          animatedWithMargin = props.animatedWithMargin;
      var style = props.style;

      var classes = (0, _classnames3['default'])((_classnames = {}, (0, _defineProperty3['default'])(_classnames, prefixCls + '-content', true), (0, _defineProperty3['default'])(_classnames, animated ? prefixCls + '-content-animated' : prefixCls + '-content-no-animated', true), _classnames), className);
      if (animated) {
        var activeIndex = (0, _utils.getActiveIndex)(children, activeKey);
        if (activeIndex !== -1) {
          var animatedStyle = animatedWithMargin ? (0, _utils.getMarginStyle)(activeIndex, tabBarPosition) : (0, _utils.getTransformPropValue)((0, _utils.getTransformByIndex)(activeIndex, tabBarPosition));
          style = (0, _extends3['default'])({}, style, animatedStyle);
        } else {
          style = (0, _extends3['default'])({}, style, {
            display: 'none'
          });
        }
      }
      return _react2['default'].createElement(
        'div',
        {
          className: classes,
          style: style
        },
        this.getTabPanes()
      );
    }
  }]);
  return TabContent;
}(_react2['default'].Component);

exports['default'] = TabContent;


TabContent.propTypes = {
  animated: _propTypes2['default'].bool,
  animatedWithMargin: _propTypes2['default'].bool,
  prefixCls: _propTypes2['default'].string,
  children: _propTypes2['default'].node,
  activeKey: _propTypes2['default'].string,
  style: _propTypes2['default'].any,
  tabBarPosition: _propTypes2['default'].string,
  className: _propTypes2['default'].string
};

TabContent.defaultProps = {
  animated: true
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-tabs/lib/utils.js":
/*!*******************************************!*\
  !*** ./node_modules/rc-tabs/lib/utils.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

exports.toArray = toArray;
exports.getActiveIndex = getActiveIndex;
exports.getActiveKey = getActiveKey;
exports.setTransform = setTransform;
exports.isTransformSupported = isTransformSupported;
exports.setTransition = setTransition;
exports.getTransformPropValue = getTransformPropValue;
exports.isVertical = isVertical;
exports.getTransformByIndex = getTransformByIndex;
exports.getMarginStyle = getMarginStyle;
exports.getStyle = getStyle;
exports.setPxStyle = setPxStyle;
exports.getDataAttr = getDataAttr;
exports.getLeft = getLeft;
exports.getTop = getTop;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function toArray(children) {
  // allow [c,[a,b]]
  var c = [];
  _react2['default'].Children.forEach(children, function (child) {
    if (child) {
      c.push(child);
    }
  });
  return c;
}

function getActiveIndex(children, activeKey) {
  var c = toArray(children);
  for (var i = 0; i < c.length; i++) {
    if (c[i].key === activeKey) {
      return i;
    }
  }
  return -1;
}

function getActiveKey(children, index) {
  var c = toArray(children);
  return c[index].key;
}

function setTransform(style, v) {
  style.transform = v;
  style.webkitTransform = v;
  style.mozTransform = v;
}

function isTransformSupported(style) {
  return 'transform' in style || 'webkitTransform' in style || 'MozTransform' in style;
}

function setTransition(style, v) {
  style.transition = v;
  style.webkitTransition = v;
  style.MozTransition = v;
}
function getTransformPropValue(v) {
  return {
    transform: v,
    WebkitTransform: v,
    MozTransform: v
  };
}

function isVertical(tabBarPosition) {
  return tabBarPosition === 'left' || tabBarPosition === 'right';
}

function getTransformByIndex(index, tabBarPosition) {
  var translate = isVertical(tabBarPosition) ? 'translateY' : 'translateX';
  return translate + '(' + -index * 100 + '%) translateZ(0)';
}

function getMarginStyle(index, tabBarPosition) {
  var marginDirection = isVertical(tabBarPosition) ? 'marginTop' : 'marginLeft';
  return (0, _defineProperty3['default'])({}, marginDirection, -index * 100 + '%');
}

function getStyle(el, property) {
  return +window.getComputedStyle(el).getPropertyValue(property).replace('px', '');
}

function setPxStyle(el, value, vertical) {
  value = vertical ? '0px, ' + value + 'px, 0px' : value + 'px, 0px, 0px';
  setTransform(el.style, 'translate3d(' + value + ')');
}

function getDataAttr(props) {
  return Object.keys(props).reduce(function (prev, key) {
    if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
      prev[key] = props[key];
    }
    return prev;
  }, {});
}

function toNum(style, property) {
  return +style.getPropertyValue(property).replace('px', '');
}

function getTypeValue(start, current, end, tabNode, wrapperNode) {
  var total = getStyle(wrapperNode, 'padding-' + start);
  if (!tabNode || !tabNode.parentNode) {
    return total;
  }

  var childNodes = tabNode.parentNode.childNodes;

  Array.prototype.some.call(childNodes, function (node) {
    var style = window.getComputedStyle(node);

    if (node !== tabNode) {
      total += toNum(style, 'margin-' + start);
      total += node[current];
      total += toNum(style, 'margin-' + end);

      if (style.boxSizing === 'content-box') {
        total += toNum(style, 'border-' + start + '-width') + toNum(style, 'border-' + end + '-width');
      }
      return false;
    }

    // We need count current node margin
    // ref: https://github.com/react-component/tabs/pull/139#issuecomment-431005262
    total += toNum(style, 'margin-' + start);

    return true;
  });

  return total;
}

function getLeft(tabNode, wrapperNode) {
  return getTypeValue('left', 'offsetWidth', 'right', tabNode, wrapperNode);
}

function getTop(tabNode, wrapperNode) {
  return getTypeValue('top', 'offsetHeight', 'bottom', tabNode, wrapperNode);
}

/***/ }),

/***/ "./node_modules/rc-tabs/node_modules/warning/browser.js":
/*!**************************************************************!*\
  !*** ./node_modules/rc-tabs/node_modules/warning/browser.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/rc-util/lib/Dom/addEventListener.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-util/lib/Dom/addEventListener.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = addEventListenerWrap;

var _addDomEventListener = __webpack_require__(/*! add-dom-event-listener */ "./node_modules/add-dom-event-listener/lib/index.js");

var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function addEventListenerWrap(target, eventType, cb, option) {
  /* eslint camelcase: 2 */
  var callback = _reactDom2['default'].unstable_batchedUpdates ? function run(e) {
    _reactDom2['default'].unstable_batchedUpdates(cb, e);
  } : cb;
  return (0, _addDomEventListener2['default'])(target, eventType, callback, option);
}
module.exports = exports['default'];

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts */ "./layouts/index.js");
/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/carousel */ "./components/carousel.js");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/card */ "./components/card.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.css */ "./pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_5__);

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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "index-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_carousel__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "index-content-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "content-side-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, [1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_card__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "content-side-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }))));
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
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


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
//# sourceMappingURL=index.js.4e99be2f867ea907ab7e.hot-update.js.map