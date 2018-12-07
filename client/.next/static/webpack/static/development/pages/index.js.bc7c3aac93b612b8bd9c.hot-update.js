webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/tree.js":
/*!****************************!*\
  !*** ./components/tree.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var antd_lib_tree_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tree/style/css */ "./node_modules/antd/lib/tree/style/css.js");
/* harmony import */ var antd_lib_tree_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tree_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/tree */ "./node_modules/antd/lib/tree/index.js");
/* harmony import */ var antd_lib_tree__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tree__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "F:\\myProject\\huxinminBlog\\client\\components\\tree.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var TreeNode = antd_lib_tree__WEBPACK_IMPORTED_MODULE_1___default.a.TreeNode;

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSelect", function (selectedKeys, info) {
      console.log('selected', selectedKeys, info);
    });

    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_tree__WEBPACK_IMPORTED_MODULE_1___default.a, {
        showLine: true,
        defaultExpandedKeys: ['0-0-0'],
        onSelect: this.onSelect,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TreeNode, {
        title: "parent 1",
        key: "0-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TreeNode, {
        title: "parent 1-0",
        key: "0-0-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TreeNode, {
        title: "leaf",
        key: "0-0-0-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TreeNode, {
        title: "leaf",
        key: "0-0-0-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TreeNode, {
        title: "leaf",
        key: "0-0-0-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TreeNode, {
        title: "parent 1-1",
        key: "0-0-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TreeNode, {
        title: "leaf",
        key: "0-0-1-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TreeNode, {
        title: "parent 1-2",
        key: "0-0-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TreeNode, {
        title: "leaf",
        key: "0-0-2-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TreeNode, {
        title: "leaf",
        key: "0-0-2-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }))));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);



/***/ }),

/***/ "./node_modules/antd/lib/checkbox/style/css.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/checkbox/style/css.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/checkbox/style/index.css");

/***/ }),

/***/ "./node_modules/antd/lib/tree/DirectoryTree.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/tree/DirectoryTree.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _omit = __webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js");

var _omit2 = _interopRequireDefault(_omit);

var _debounce = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");

var _debounce2 = _interopRequireDefault(_debounce);

var _util = __webpack_require__(/*! rc-tree/lib/util */ "./node_modules/rc-tree/lib/util.js");

var _Tree = __webpack_require__(/*! ./Tree */ "./node_modules/antd/lib/tree/Tree.js");

var _Tree2 = _interopRequireDefault(_Tree);

var _util2 = __webpack_require__(/*! ./util */ "./node_modules/antd/lib/tree/util.js");

var _icon = __webpack_require__(/*! ../icon */ "./node_modules/antd/lib/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

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

function getIcon(props) {
    var isLeaf = props.isLeaf,
        expanded = props.expanded;

    if (isLeaf) {
        return React.createElement(_icon2['default'], { type: 'file' });
    }
    return React.createElement(_icon2['default'], { type: expanded ? 'folder-open' : 'folder' });
}

var DirectoryTree = function (_React$Component) {
    (0, _inherits3['default'])(DirectoryTree, _React$Component);

    function DirectoryTree(props) {
        (0, _classCallCheck3['default'])(this, DirectoryTree);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (DirectoryTree.__proto__ || Object.getPrototypeOf(DirectoryTree)).call(this, props));

        _this.onExpand = function (expandedKeys, info) {
            var onExpand = _this.props.onExpand;

            _this.setUncontrolledState({ expandedKeys: expandedKeys });
            // Call origin function
            if (onExpand) {
                return onExpand(expandedKeys, info);
            }
            return undefined;
        };
        _this.onClick = function (event, node) {
            var _this$props = _this.props,
                onClick = _this$props.onClick,
                expandAction = _this$props.expandAction;
            // Expand the tree

            if (expandAction === 'click') {
                _this.onDebounceExpand(event, node);
            }
            if (onClick) {
                onClick(event, node);
            }
        };
        _this.onDoubleClick = function (event, node) {
            var _this$props2 = _this.props,
                onDoubleClick = _this$props2.onDoubleClick,
                expandAction = _this$props2.expandAction;
            // Expand the tree

            if (expandAction === 'doubleClick') {
                _this.onDebounceExpand(event, node);
            }
            if (onDoubleClick) {
                onDoubleClick(event, node);
            }
        };
        _this.onSelect = function (keys, event) {
            var _this$props3 = _this.props,
                onSelect = _this$props3.onSelect,
                multiple = _this$props3.multiple,
                children = _this$props3.children;
            var _this$state = _this.state,
                _this$state$expandedK = _this$state.expandedKeys,
                expandedKeys = _this$state$expandedK === undefined ? [] : _this$state$expandedK,
                _this$state$selectedK = _this$state.selectedKeys,
                selectedKeys = _this$state$selectedK === undefined ? [] : _this$state$selectedK;
            var node = event.node,
                nativeEvent = event.nativeEvent;
            var _node$props$eventKey = node.props.eventKey,
                eventKey = _node$props$eventKey === undefined ? '' : _node$props$eventKey;

            var newState = {};
            // Windows / Mac single pick
            var ctrlPick = nativeEvent.ctrlKey || nativeEvent.metaKey;
            var shiftPick = nativeEvent.shiftKey;
            // Generate new selected keys
            var newSelectedKeys = selectedKeys.slice();
            if (multiple && ctrlPick) {
                // Control click
                newSelectedKeys = keys;
                _this.lastSelectedKey = eventKey;
                _this.cachedSelectedKeys = newSelectedKeys;
            } else if (multiple && shiftPick) {
                // Shift click
                newSelectedKeys = Array.from(new Set([].concat((0, _toConsumableArray3['default'])(_this.cachedSelectedKeys || []), (0, _toConsumableArray3['default'])((0, _util2.calcRangeKeys)(children, expandedKeys, eventKey, _this.lastSelectedKey)))));
            } else {
                // Single click
                newSelectedKeys = [eventKey];
                _this.lastSelectedKey = eventKey;
                _this.cachedSelectedKeys = newSelectedKeys;
            }
            newState.selectedKeys = newSelectedKeys;
            if (onSelect) {
                onSelect(newSelectedKeys, event);
            }
            _this.setUncontrolledState(newState);
        };
        _this.setTreeRef = function (node) {
            _this.tree = node;
        };
        _this.expandFolderNode = function (event, node) {
            var isLeaf = node.props.isLeaf;

            if (isLeaf || event.shiftKey || event.metaKey || event.ctrlKey) {
                return;
            }
            // Get internal rc-tree
            var internalTree = _this.tree.tree;
            // Call internal rc-tree expand function
            // https://github.com/ant-design/ant-design/issues/12567
            internalTree.onNodeExpand(event, node);
        };
        _this.setUncontrolledState = function (state) {
            var newState = (0, _omit2['default'])(state, Object.keys(_this.props));
            if (Object.keys(newState).length) {
                _this.setState(newState);
            }
        };
        var defaultExpandAll = props.defaultExpandAll,
            defaultExpandParent = props.defaultExpandParent,
            expandedKeys = props.expandedKeys,
            defaultExpandedKeys = props.defaultExpandedKeys,
            children = props.children;

        var _convertTreeToEntitie = (0, _util.convertTreeToEntities)(children),
            keyEntities = _convertTreeToEntitie.keyEntities;
        // Selected keys


        _this.state = {
            selectedKeys: props.selectedKeys || props.defaultSelectedKeys || []
        };
        // Expanded keys
        if (defaultExpandAll) {
            _this.state.expandedKeys = (0, _util2.getFullKeyList)(props.children);
        } else if (defaultExpandParent) {
            _this.state.expandedKeys = (0, _util.conductExpandParent)(expandedKeys || defaultExpandedKeys, keyEntities);
        } else {
            _this.state.expandedKeys = expandedKeys || defaultExpandedKeys;
        }
        _this.onDebounceExpand = (0, _debounce2['default'])(_this.expandFolderNode, 200, {
            leading: true
        });
        return _this;
    }

    (0, _createClass3['default'])(DirectoryTree, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('expandedKeys' in nextProps) {
                this.setState({ expandedKeys: nextProps.expandedKeys });
            }
            if ('selectedKeys' in nextProps) {
                this.setState({ selectedKeys: nextProps.selectedKeys });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _a = this.props,
                prefixCls = _a.prefixCls,
                className = _a.className,
                props = __rest(_a, ["prefixCls", "className"]);var _state = this.state,
                expandedKeys = _state.expandedKeys,
                selectedKeys = _state.selectedKeys;

            var connectClassName = (0, _classnames2['default'])(prefixCls + '-directory', className);
            return React.createElement(_Tree2['default'], (0, _extends3['default'])({ icon: getIcon, ref: this.setTreeRef }, props, { prefixCls: prefixCls, className: connectClassName, expandedKeys: expandedKeys, selectedKeys: selectedKeys, onSelect: this.onSelect, onClick: this.onClick, onDoubleClick: this.onDoubleClick, onExpand: this.onExpand }));
        }
    }]);
    return DirectoryTree;
}(React.Component);

exports['default'] = DirectoryTree;

DirectoryTree.defaultProps = {
    prefixCls: 'ant-tree',
    showIcon: true,
    expandAction: 'click'
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/tree/Tree.js":
/*!********************************************!*\
  !*** ./node_modules/antd/lib/tree/Tree.js ***!
  \********************************************/
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

var React = _interopRequireWildcard(_react);

var _rcTree = __webpack_require__(/*! rc-tree */ "./node_modules/rc-tree/es/index.js");

var _rcTree2 = _interopRequireDefault(_rcTree);

var _DirectoryTree = __webpack_require__(/*! ./DirectoryTree */ "./node_modules/antd/lib/tree/DirectoryTree.js");

var _DirectoryTree2 = _interopRequireDefault(_DirectoryTree);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _openAnimation = __webpack_require__(/*! ../_util/openAnimation */ "./node_modules/antd/lib/_util/openAnimation.js");

var _openAnimation2 = _interopRequireDefault(_openAnimation);

var _icon = __webpack_require__(/*! ../icon */ "./node_modules/antd/lib/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Tree = function (_React$Component) {
    (0, _inherits3['default'])(Tree, _React$Component);

    function Tree() {
        (0, _classCallCheck3['default'])(this, Tree);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Tree.__proto__ || Object.getPrototypeOf(Tree)).apply(this, arguments));

        _this.renderSwitcherIcon = function (_ref) {
            var isLeaf = _ref.isLeaf,
                expanded = _ref.expanded,
                loading = _ref.loading;
            var _this$props = _this.props,
                prefixCls = _this$props.prefixCls,
                showLine = _this$props.showLine;

            if (loading) {
                return React.createElement(_icon2['default'], { type: 'loading', className: prefixCls + '-switcher-loading-icon' });
            }
            if (showLine) {
                if (isLeaf) {
                    return React.createElement(_icon2['default'], { type: 'file', className: prefixCls + '-switcher-line-icon' });
                }
                return React.createElement(_icon2['default'], { type: expanded ? 'minus-square' : 'plus-square', className: prefixCls + '-switcher-line-icon', theme: 'outlined' });
            } else {
                if (isLeaf) {
                    return null;
                }
                return React.createElement(_icon2['default'], { type: 'caret-down', className: prefixCls + '-switcher-icon', theme: 'filled' });
            }
        };
        _this.setTreeRef = function (node) {
            _this.tree = node;
        };
        return _this;
    }

    (0, _createClass3['default'])(Tree, [{
        key: 'render',
        value: function render() {
            var props = this.props;
            var prefixCls = props.prefixCls,
                className = props.className,
                showIcon = props.showIcon;

            var checkable = props.checkable;
            return React.createElement(
                _rcTree2['default'],
                (0, _extends3['default'])({ ref: this.setTreeRef }, props, { className: (0, _classnames2['default'])(!showIcon && prefixCls + '-icon-hide', className), checkable: checkable ? React.createElement('span', { className: prefixCls + '-checkbox-inner' }) : checkable, switcherIcon: this.renderSwitcherIcon }),
                this.props.children
            );
        }
    }]);
    return Tree;
}(React.Component);

exports['default'] = Tree;

Tree.TreeNode = _rcTree.TreeNode;
Tree.DirectoryTree = _DirectoryTree2['default'];
Tree.defaultProps = {
    prefixCls: 'ant-tree',
    checkable: false,
    showIcon: false,
    openAnimation: (0, _extends3['default'])({}, _openAnimation2['default'], { appear: null })
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/tree/index.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/tree/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Tree = __webpack_require__(/*! ./Tree */ "./node_modules/antd/lib/tree/Tree.js");

var _Tree2 = _interopRequireDefault(_Tree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _Tree2['default'];
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/tree/style/css.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/tree/style/css.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/tree/style/index.css");

__webpack_require__(/*! ../../checkbox/style/css */ "./node_modules/antd/lib/checkbox/style/css.js");

/***/ }),

/***/ "./node_modules/antd/lib/tree/util.js":
/*!********************************************!*\
  !*** ./node_modules/antd/lib/tree/util.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getFullKeyList = getFullKeyList;
exports.calcRangeKeys = calcRangeKeys;

var _util = __webpack_require__(/*! rc-tree/lib/util */ "./node_modules/rc-tree/lib/util.js");

var Record;
(function (Record) {
    Record[Record["None"] = 0] = "None";
    Record[Record["Start"] = 1] = "Start";
    Record[Record["End"] = 2] = "End";
})(Record || (Record = {}));
// TODO: Move this logic into `rc-tree`
function traverseNodesKey(rootChildren, callback) {
    var nodeList = (0, _util.getNodeChildren)(rootChildren) || [];
    function processNode(node) {
        var key = node.key,
            children = node.props.children;

        if (callback(key) !== false) {
            traverseNodesKey(children, callback);
        }
    }
    nodeList.forEach(processNode);
}
function getFullKeyList(children) {
    var _convertTreeToEntitie = (0, _util.convertTreeToEntities)(children),
        keyEntities = _convertTreeToEntitie.keyEntities;

    return Object.keys(keyEntities);
}
/** 计算选中范围，只考虑expanded情况以优化性能 */
function calcRangeKeys(rootChildren, expandedKeys, startKey, endKey) {
    var keys = [];
    var record = Record.None;
    if (startKey && startKey === endKey) {
        return [startKey];
    }
    if (!startKey || !endKey) {
        return [];
    }
    function matchKey(key) {
        return key === startKey || key === endKey;
    }
    traverseNodesKey(rootChildren, function (key) {
        if (record === Record.End) {
            return false;
        }
        if (matchKey(key)) {
            // Match test
            keys.push(key);
            if (record === Record.None) {
                record = Record.Start;
            } else if (record === Record.Start) {
                record = Record.End;
                return false;
            }
        } else if (record === Record.Start) {
            // Append selection
            keys.push(key);
        }
        if (expandedKeys.indexOf(key) === -1) {
            return false;
        }
        return true;
    });
    return keys;
}

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/toArray.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/toArray.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(/*! ../core-js/array/from */ "./node_modules/babel-runtime/core-js/array/from.js");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  return Array.isArray(arr) ? arr : (0, _from2.default)(arr);
};

/***/ }),

/***/ "./node_modules/fbjs/lib/ExecutionEnvironment.js":
/*!*******************************************************!*\
  !*** ./node_modules/fbjs/lib/ExecutionEnvironment.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

module.exports = ExecutionEnvironment;

/***/ }),

/***/ "./node_modules/rc-tree/es/Tree.js":
/*!*****************************************!*\
  !*** ./node_modules/rc-tree/es/Tree.js ***!
  \*****************************************/
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
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! warning */ "./node_modules/rc-tree/node_modules/warning/browser.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-util/es/Children/toArray */ "./node_modules/rc-util/es/Children/toArray.js");
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _contextTypes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contextTypes */ "./node_modules/rc-tree/es/contextTypes.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./util */ "./node_modules/rc-tree/es/util.js");
















var Tree = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Tree, _React$Component);

  function Tree() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Tree);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_ref = Tree.__proto__ || Object.getPrototypeOf(Tree)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      // TODO: Remove this eslint
      posEntities: {}, // eslint-disable-line react/no-unused-state
      keyEntities: {},

      selectedKeys: [],
      checkedKeys: [],
      halfCheckedKeys: [],
      loadedKeys: [],
      loadingKeys: [],

      treeNode: []
    }, _this.onNodeDragStart = function (event, node) {
      var expandedKeys = _this.state.expandedKeys;
      var onDragStart = _this.props.onDragStart;
      var _node$props = node.props,
          eventKey = _node$props.eventKey,
          children = _node$props.children;


      _this.dragNode = node;

      _this.setState({
        dragNodesKeys: Object(_util__WEBPACK_IMPORTED_MODULE_13__["getDragNodesKeys"])(children, node),
        expandedKeys: Object(_util__WEBPACK_IMPORTED_MODULE_13__["arrDel"])(expandedKeys, eventKey)
      });

      if (onDragStart) {
        onDragStart({ event: event, node: node });
      }
    }, _this.onNodeDragEnter = function (event, node) {
      var expandedKeys = _this.state.expandedKeys;
      var onDragEnter = _this.props.onDragEnter;
      var _node$props2 = node.props,
          pos = _node$props2.pos,
          eventKey = _node$props2.eventKey;


      if (!_this.dragNode) return;

      var dropPosition = Object(_util__WEBPACK_IMPORTED_MODULE_13__["calcDropPosition"])(event, node);

      // Skip if drag node is self
      if (_this.dragNode.props.eventKey === eventKey && dropPosition === 0) {
        _this.setState({
          dragOverNodeKey: '',
          dropPosition: null
        });
        return;
      }

      // Ref: https://github.com/react-component/tree/issues/132
      // Add timeout to let onDragLevel fire before onDragEnter,
      // so that we can clean drag props for onDragLeave node.
      // Macro task for this:
      // https://html.spec.whatwg.org/multipage/webappapis.html#clean-up-after-running-script
      setTimeout(function () {
        // Update drag over node
        _this.setState({
          dragOverNodeKey: eventKey,
          dropPosition: dropPosition
        });

        // Side effect for delay drag
        if (!_this.delayedDragEnterLogic) {
          _this.delayedDragEnterLogic = {};
        }
        Object.keys(_this.delayedDragEnterLogic).forEach(function (key) {
          clearTimeout(_this.delayedDragEnterLogic[key]);
        });
        _this.delayedDragEnterLogic[pos] = setTimeout(function () {
          var newExpandedKeys = Object(_util__WEBPACK_IMPORTED_MODULE_13__["arrAdd"])(expandedKeys, eventKey);
          _this.setState({
            expandedKeys: newExpandedKeys
          });

          if (onDragEnter) {
            onDragEnter({ event: event, node: node, expandedKeys: newExpandedKeys });
          }
        }, 400);
      }, 0);
    }, _this.onNodeDragOver = function (event, node) {
      var onDragOver = _this.props.onDragOver;
      var eventKey = node.props.eventKey;

      // Update drag position

      if (_this.dragNode && eventKey === _this.state.dragOverNodeKey) {
        var dropPosition = Object(_util__WEBPACK_IMPORTED_MODULE_13__["calcDropPosition"])(event, node);

        if (dropPosition === _this.state.dropPosition) return;

        _this.setState({
          dropPosition: dropPosition
        });
      }

      if (onDragOver) {
        onDragOver({ event: event, node: node });
      }
    }, _this.onNodeDragLeave = function (event, node) {
      var onDragLeave = _this.props.onDragLeave;


      _this.setState({
        dragOverNodeKey: ''
      });

      if (onDragLeave) {
        onDragLeave({ event: event, node: node });
      }
    }, _this.onNodeDragEnd = function (event, node) {
      var onDragEnd = _this.props.onDragEnd;

      _this.setState({
        dragOverNodeKey: ''
      });
      if (onDragEnd) {
        onDragEnd({ event: event, node: node });
      }

      _this.dragNode = null;
    }, _this.onNodeDrop = function (event, node) {
      var _this$state = _this.state,
          _this$state$dragNodes = _this$state.dragNodesKeys,
          dragNodesKeys = _this$state$dragNodes === undefined ? [] : _this$state$dragNodes,
          dropPosition = _this$state.dropPosition;
      var onDrop = _this.props.onDrop;
      var _node$props3 = node.props,
          eventKey = _node$props3.eventKey,
          pos = _node$props3.pos;


      _this.setState({
        dragOverNodeKey: ''
      });

      if (dragNodesKeys.indexOf(eventKey) !== -1) {
        warning__WEBPACK_IMPORTED_MODULE_9___default()(false, 'Can not drop to dragNode(include it\'s children node)');
        return;
      }

      var posArr = Object(_util__WEBPACK_IMPORTED_MODULE_13__["posToArr"])(pos);

      var dropResult = {
        event: event,
        node: node,
        dragNode: _this.dragNode,
        dragNodesKeys: dragNodesKeys.slice(),
        dropPosition: dropPosition + Number(posArr[posArr.length - 1])
      };

      if (dropPosition !== 0) {
        dropResult.dropToGap = true;
      }

      if (onDrop) {
        onDrop(dropResult);
      }

      _this.dragNode = null;
    }, _this.onNodeClick = function (e, treeNode) {
      var onClick = _this.props.onClick;

      if (onClick) {
        onClick(e, treeNode);
      }
    }, _this.onNodeDoubleClick = function (e, treeNode) {
      var onDoubleClick = _this.props.onDoubleClick;

      if (onDoubleClick) {
        onDoubleClick(e, treeNode);
      }
    }, _this.onNodeSelect = function (e, treeNode) {
      var selectedKeys = _this.state.selectedKeys;
      var keyEntities = _this.state.keyEntities;
      var _this$props = _this.props,
          onSelect = _this$props.onSelect,
          multiple = _this$props.multiple;
      var _treeNode$props = treeNode.props,
          selected = _treeNode$props.selected,
          eventKey = _treeNode$props.eventKey;

      var targetSelected = !selected;

      // Update selected keys
      if (!targetSelected) {
        selectedKeys = Object(_util__WEBPACK_IMPORTED_MODULE_13__["arrDel"])(selectedKeys, eventKey);
      } else if (!multiple) {
        selectedKeys = [eventKey];
      } else {
        selectedKeys = Object(_util__WEBPACK_IMPORTED_MODULE_13__["arrAdd"])(selectedKeys, eventKey);
      }

      // [Legacy] Not found related usage in doc or upper libs
      var selectedNodes = selectedKeys.map(function (key) {
        var entity = keyEntities[key];
        if (!entity) return null;

        return entity.node;
      }).filter(function (node) {
        return node;
      });

      _this.setUncontrolledState({ selectedKeys: selectedKeys });

      if (onSelect) {
        var eventObj = {
          event: 'select',
          selected: targetSelected,
          node: treeNode,
          selectedNodes: selectedNodes,
          nativeEvent: e.nativeEvent
        };
        onSelect(selectedKeys, eventObj);
      }
    }, _this.onNodeCheck = function (e, treeNode, checked) {
      var _this$state2 = _this.state,
          keyEntities = _this$state2.keyEntities,
          oriCheckedKeys = _this$state2.checkedKeys,
          oriHalfCheckedKeys = _this$state2.halfCheckedKeys;
      var _this$props2 = _this.props,
          checkStrictly = _this$props2.checkStrictly,
          onCheck = _this$props2.onCheck;
      var eventKey = treeNode.props.eventKey;

      // Prepare trigger arguments

      var checkedObj = void 0;
      var eventObj = {
        event: 'check',
        node: treeNode,
        checked: checked,
        nativeEvent: e.nativeEvent
      };

      if (checkStrictly) {
        var checkedKeys = checked ? Object(_util__WEBPACK_IMPORTED_MODULE_13__["arrAdd"])(oriCheckedKeys, eventKey) : Object(_util__WEBPACK_IMPORTED_MODULE_13__["arrDel"])(oriCheckedKeys, eventKey);
        var halfCheckedKeys = Object(_util__WEBPACK_IMPORTED_MODULE_13__["arrDel"])(oriHalfCheckedKeys, eventKey);
        checkedObj = { checked: checkedKeys, halfChecked: halfCheckedKeys };

        eventObj.checkedNodes = checkedKeys.map(function (key) {
          return keyEntities[key];
        }).filter(function (entity) {
          return entity;
        }).map(function (entity) {
          return entity.node;
        });

        _this.setUncontrolledState({ checkedKeys: checkedKeys });
      } else {
        var _conductCheck = Object(_util__WEBPACK_IMPORTED_MODULE_13__["conductCheck"])([eventKey], checked, keyEntities, {
          checkedKeys: oriCheckedKeys, halfCheckedKeys: oriHalfCheckedKeys
        }),
            _checkedKeys = _conductCheck.checkedKeys,
            _halfCheckedKeys = _conductCheck.halfCheckedKeys;

        checkedObj = _checkedKeys;

        // [Legacy] This is used for `rc-tree-select`
        eventObj.checkedNodes = [];
        eventObj.checkedNodesPositions = [];
        eventObj.halfCheckedKeys = _halfCheckedKeys;

        _checkedKeys.forEach(function (key) {
          var entity = keyEntities[key];
          if (!entity) return;

          var node = entity.node,
              pos = entity.pos;


          eventObj.checkedNodes.push(node);
          eventObj.checkedNodesPositions.push({ node: node, pos: pos });
        });

        _this.setUncontrolledState({
          checkedKeys: _checkedKeys,
          halfCheckedKeys: _halfCheckedKeys
        });
      }

      if (onCheck) {
        onCheck(checkedObj, eventObj);
      }
    }, _this.onNodeLoad = function (treeNode) {
      return new Promise(function (resolve) {
        // We need to get the latest state of loading/loaded keys
        _this.setState(function (_ref2) {
          var _ref2$loadedKeys = _ref2.loadedKeys,
              loadedKeys = _ref2$loadedKeys === undefined ? [] : _ref2$loadedKeys,
              _ref2$loadingKeys = _ref2.loadingKeys,
              loadingKeys = _ref2$loadingKeys === undefined ? [] : _ref2$loadingKeys;
          var _this$props3 = _this.props,
              loadData = _this$props3.loadData,
              onLoad = _this$props3.onLoad;
          var eventKey = treeNode.props.eventKey;


          if (!loadData || loadedKeys.indexOf(eventKey) !== -1 || loadingKeys.indexOf(eventKey) !== -1) {
            // react 15 will warn if return null
            return {};
          }

          // Process load data
          var promise = loadData(treeNode);
          promise.then(function () {
            var newLoadedKeys = Object(_util__WEBPACK_IMPORTED_MODULE_13__["arrAdd"])(_this.state.loadedKeys, eventKey);
            var newLoadingKeys = Object(_util__WEBPACK_IMPORTED_MODULE_13__["arrDel"])(_this.state.loadingKeys, eventKey);

            // onLoad should trigger before internal setState to avoid `loadData` trigger twice.
            // https://github.com/ant-design/ant-design/issues/12464
            if (onLoad) {
              var eventObj = {
                event: 'load',
                node: treeNode
              };
              onLoad(newLoadedKeys, eventObj);
            }

            _this.setUncontrolledState({
              loadedKeys: newLoadedKeys
            });
            _this.setState({
              loadingKeys: newLoadingKeys
            });

            resolve();
          });

          return {
            loadingKeys: Object(_util__WEBPACK_IMPORTED_MODULE_13__["arrAdd"])(loadingKeys, eventKey)
          };
        });
      });
    }, _this.onNodeExpand = function (e, treeNode) {
      var expandedKeys = _this.state.expandedKeys;
      var _this$props4 = _this.props,
          onExpand = _this$props4.onExpand,
          loadData = _this$props4.loadData;
      var _treeNode$props2 = treeNode.props,
          eventKey = _treeNode$props2.eventKey,
          expanded = _treeNode$props2.expanded;

      // Update selected keys

      var index = expandedKeys.indexOf(eventKey);
      var targetExpanded = !expanded;

      warning__WEBPACK_IMPORTED_MODULE_9___default()(expanded && index !== -1 || !expanded && index === -1, 'Expand state not sync with index check');

      if (targetExpanded) {
        expandedKeys = Object(_util__WEBPACK_IMPORTED_MODULE_13__["arrAdd"])(expandedKeys, eventKey);
      } else {
        expandedKeys = Object(_util__WEBPACK_IMPORTED_MODULE_13__["arrDel"])(expandedKeys, eventKey);
      }

      _this.setUncontrolledState({ expandedKeys: expandedKeys });

      if (onExpand) {
        onExpand(expandedKeys, {
          node: treeNode,
          expanded: targetExpanded,
          nativeEvent: e.nativeEvent
        });
      }

      // Async Load data
      if (targetExpanded && loadData) {
        var loadPromise = _this.onNodeLoad(treeNode);
        return loadPromise ? loadPromise.then(function () {
          // [Legacy] Refresh logic
          _this.setUncontrolledState({ expandedKeys: expandedKeys });
        }) : null;
      }

      return null;
    }, _this.onNodeMouseEnter = function (event, node) {
      var onMouseEnter = _this.props.onMouseEnter;

      if (onMouseEnter) {
        onMouseEnter({ event: event, node: node });
      }
    }, _this.onNodeMouseLeave = function (event, node) {
      var onMouseLeave = _this.props.onMouseLeave;

      if (onMouseLeave) {
        onMouseLeave({ event: event, node: node });
      }
    }, _this.onNodeContextMenu = function (event, node) {
      var onRightClick = _this.props.onRightClick;

      if (onRightClick) {
        event.preventDefault();
        onRightClick({ event: event, node: node });
      }
    }, _this.setUncontrolledState = function (state) {
      var needSync = false;
      var newState = {};

      Object.keys(state).forEach(function (name) {
        if (name in _this.props) return;

        needSync = true;
        newState[name] = state[name];
      });

      if (needSync) {
        _this.setState(newState);
      }
    }, _this.isKeyChecked = function (key) {
      var _this$state$checkedKe = _this.state.checkedKeys,
          checkedKeys = _this$state$checkedKe === undefined ? [] : _this$state$checkedKe;

      return checkedKeys.indexOf(key) !== -1;
    }, _this.renderTreeNode = function (child, index) {
      var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var _this$state3 = _this.state,
          keyEntities = _this$state3.keyEntities,
          _this$state3$expanded = _this$state3.expandedKeys,
          expandedKeys = _this$state3$expanded === undefined ? [] : _this$state3$expanded,
          _this$state3$selected = _this$state3.selectedKeys,
          selectedKeys = _this$state3$selected === undefined ? [] : _this$state3$selected,
          _this$state3$halfChec = _this$state3.halfCheckedKeys,
          halfCheckedKeys = _this$state3$halfChec === undefined ? [] : _this$state3$halfChec,
          _this$state3$loadedKe = _this$state3.loadedKeys,
          loadedKeys = _this$state3$loadedKe === undefined ? [] : _this$state3$loadedKe,
          _this$state3$loadingK = _this$state3.loadingKeys,
          loadingKeys = _this$state3$loadingK === undefined ? [] : _this$state3$loadingK,
          dragOverNodeKey = _this$state3.dragOverNodeKey,
          dropPosition = _this$state3.dropPosition;

      var pos = Object(_util__WEBPACK_IMPORTED_MODULE_13__["getPosition"])(level, index);
      var key = child.key || pos;

      if (!keyEntities[key]) {
        Object(_util__WEBPACK_IMPORTED_MODULE_13__["warnOnlyTreeNode"])();
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.cloneElement(child, {
        key: key,
        eventKey: key,
        expanded: expandedKeys.indexOf(key) !== -1,
        selected: selectedKeys.indexOf(key) !== -1,
        loaded: loadedKeys.indexOf(key) !== -1,
        loading: loadingKeys.indexOf(key) !== -1,
        checked: _this.isKeyChecked(key),
        halfChecked: halfCheckedKeys.indexOf(key) !== -1,
        pos: pos,

        // [Legacy] Drag props
        dragOver: dragOverNodeKey === key && dropPosition === 0,
        dragOverGapTop: dragOverNodeKey === key && dropPosition === -1,
        dragOverGapBottom: dragOverNodeKey === key && dropPosition === 1
      });
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Tree, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _props = this.props,
          prefixCls = _props.prefixCls,
          selectable = _props.selectable,
          showIcon = _props.showIcon,
          icon = _props.icon,
          draggable = _props.draggable,
          checkable = _props.checkable,
          checkStrictly = _props.checkStrictly,
          disabled = _props.disabled,
          loadData = _props.loadData,
          filterTreeNode = _props.filterTreeNode,
          openTransitionName = _props.openTransitionName,
          openAnimation = _props.openAnimation,
          switcherIcon = _props.switcherIcon;


      return {
        rcTree: {
          // root: this,

          prefixCls: prefixCls,
          selectable: selectable,
          showIcon: showIcon,
          icon: icon,
          switcherIcon: switcherIcon,
          draggable: draggable,
          checkable: checkable,
          checkStrictly: checkStrictly,
          disabled: disabled,
          openTransitionName: openTransitionName,
          openAnimation: openAnimation,

          loadData: loadData,
          filterTreeNode: filterTreeNode,
          renderTreeNode: this.renderTreeNode,
          isKeyChecked: this.isKeyChecked,

          onNodeClick: this.onNodeClick,
          onNodeDoubleClick: this.onNodeDoubleClick,
          onNodeExpand: this.onNodeExpand,
          onNodeSelect: this.onNodeSelect,
          onNodeCheck: this.onNodeCheck,
          onNodeLoad: this.onNodeLoad,
          onNodeMouseEnter: this.onNodeMouseEnter,
          onNodeMouseLeave: this.onNodeMouseLeave,
          onNodeContextMenu: this.onNodeContextMenu,
          onNodeDragStart: this.onNodeDragStart,
          onNodeDragEnter: this.onNodeDragEnter,
          onNodeDragOver: this.onNodeDragOver,
          onNodeDragLeave: this.onNodeDragLeave,
          onNodeDragEnd: this.onNodeDragEnd,
          onNodeDrop: this.onNodeDrop
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var treeNode = this.state.treeNode;
      var _props2 = this.props,
          prefixCls = _props2.prefixCls,
          className = _props2.className,
          focusable = _props2.focusable,
          showLine = _props2.showLine,
          _props2$tabIndex = _props2.tabIndex,
          tabIndex = _props2$tabIndex === undefined ? 0 : _props2$tabIndex;

      var domProps = Object(_util__WEBPACK_IMPORTED_MODULE_13__["getDataAndAria"])(this.props);

      if (focusable) {
        domProps.tabIndex = tabIndex;
        domProps.onKeyDown = this.onKeyDown;
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
        'ul',
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, domProps, {
          className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(prefixCls, className, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, prefixCls + '-show-line', showLine)),
          role: 'tree',
          unselectable: 'on'
        }),
        Object(_util__WEBPACK_IMPORTED_MODULE_13__["mapChildren"])(treeNode, function (node, index) {
          return _this2.renderTreeNode(node, index);
        })
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, prevState) {
      var prevProps = prevState.prevProps;

      var newState = {
        prevProps: props
      };

      function needSync(name) {
        return !prevProps && name in props || prevProps && prevProps[name] !== props[name];
      }

      // ================== Tree Node ==================
      var treeNode = null;

      // Check if `treeData` or `children` changed and save into the state.
      if (needSync('treeData')) {
        treeNode = Object(_util__WEBPACK_IMPORTED_MODULE_13__["convertDataToTree"])(props.treeData);
      } else if (needSync('children')) {
        treeNode = Object(rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_10__["default"])(props.children);
      }

      // Tree support filter function which will break the tree structure in the vdm.
      // We cache the treeNodes in state so that we can return the treeNode in event trigger.
      if (treeNode) {
        newState.treeNode = treeNode;

        // Calculate the entities data for quick match
        var entitiesMap = Object(_util__WEBPACK_IMPORTED_MODULE_13__["convertTreeToEntities"])(treeNode);
        newState.posEntities = entitiesMap.posEntities;
        newState.keyEntities = entitiesMap.keyEntities;
      }

      var keyEntities = newState.keyEntities || prevState.keyEntities;

      // ================ expandedKeys =================
      if (needSync('expandedKeys') || prevProps && needSync('autoExpandParent')) {
        newState.expandedKeys = props.autoExpandParent || !prevProps && props.defaultExpandParent ? Object(_util__WEBPACK_IMPORTED_MODULE_13__["conductExpandParent"])(props.expandedKeys, keyEntities) : props.expandedKeys;
      } else if (!prevProps && props.defaultExpandAll) {
        newState.expandedKeys = Object.keys(keyEntities);
      } else if (!prevProps && props.defaultExpandedKeys) {
        newState.expandedKeys = props.autoExpandParent || props.defaultExpandParent ? Object(_util__WEBPACK_IMPORTED_MODULE_13__["conductExpandParent"])(props.defaultExpandedKeys, keyEntities) : props.defaultExpandedKeys;
      }

      // ================ selectedKeys =================
      if (props.selectable) {
        if (needSync('selectedKeys')) {
          newState.selectedKeys = Object(_util__WEBPACK_IMPORTED_MODULE_13__["calcSelectedKeys"])(props.selectedKeys, props);
        } else if (!prevProps && props.defaultSelectedKeys) {
          newState.selectedKeys = Object(_util__WEBPACK_IMPORTED_MODULE_13__["calcSelectedKeys"])(props.defaultSelectedKeys, props);
        }
      }

      // ================= checkedKeys =================
      if (props.checkable) {
        var checkedKeyEntity = void 0;

        if (needSync('checkedKeys')) {
          checkedKeyEntity = Object(_util__WEBPACK_IMPORTED_MODULE_13__["parseCheckedKeys"])(props.checkedKeys) || {};
        } else if (!prevProps && props.defaultCheckedKeys) {
          checkedKeyEntity = Object(_util__WEBPACK_IMPORTED_MODULE_13__["parseCheckedKeys"])(props.defaultCheckedKeys) || {};
        } else if (treeNode) {
          // If treeNode changed, we also need check it
          checkedKeyEntity = {
            checkedKeys: prevState.checkedKeys,
            halfCheckedKeys: prevState.halfCheckedKeys
          };
        }

        if (checkedKeyEntity) {
          var _checkedKeyEntity = checkedKeyEntity,
              _checkedKeyEntity$che = _checkedKeyEntity.checkedKeys,
              checkedKeys = _checkedKeyEntity$che === undefined ? [] : _checkedKeyEntity$che,
              _checkedKeyEntity$hal = _checkedKeyEntity.halfCheckedKeys,
              halfCheckedKeys = _checkedKeyEntity$hal === undefined ? [] : _checkedKeyEntity$hal;


          if (!props.checkStrictly) {
            var conductKeys = Object(_util__WEBPACK_IMPORTED_MODULE_13__["conductCheck"])(checkedKeys, true, keyEntities);
            checkedKeys = conductKeys.checkedKeys;
            halfCheckedKeys = conductKeys.halfCheckedKeys;
          }

          newState.checkedKeys = checkedKeys;
          newState.halfCheckedKeys = halfCheckedKeys;
        }
      }
      // ================= loadedKeys ==================
      if (needSync('loadedKeys')) {
        newState.loadedKeys = props.loadedKeys;
      }

      return newState;
    }

    /**
     * [Legacy] Select handler is less small than node,
     * so that this will trigger when drag enter node or select handler.
     * This is a little tricky if customize css without padding.
     * Better for use mouse move event to refresh drag state.
     * But let's just keep it to avoid event trigger logic change.
     */


    /**
     * Only update the value which is not in props
     */


    /**
     * [Legacy] Original logic use `key` as tracking clue.
     * We have to use `cloneElement` to pass `key`.
     */

  }]);

  return Tree;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

Tree.propTypes = {
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,
  treeData: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array, // Generate treeNode by children
  showLine: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  showIcon: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func]),
  focusable: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  selectable: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  multiple: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  checkable: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node]),
  checkStrictly: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  draggable: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  defaultExpandParent: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  autoExpandParent: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  defaultExpandAll: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  defaultExpandedKeys: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string),
  expandedKeys: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string),
  defaultCheckedKeys: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string),
  checkedKeys: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number])), prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object]),
  defaultSelectedKeys: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string),
  selectedKeys: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string),
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onDoubleClick: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onExpand: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onCheck: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onLoad: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  loadData: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  loadedKeys: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string),
  onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onRightClick: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onDragStart: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onDragEnter: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onDragOver: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onDragLeave: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onDragEnd: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onDrop: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  filterTreeNode: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  openTransitionName: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  openAnimation: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object]),
  switcherIcon: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func])
};
Tree.childContextTypes = _contextTypes__WEBPACK_IMPORTED_MODULE_12__["treeContextTypes"];
Tree.defaultProps = {
  prefixCls: 'rc-tree',
  showLine: false,
  showIcon: true,
  selectable: true,
  multiple: false,
  checkable: false,
  disabled: false,
  checkStrictly: false,
  draggable: false,
  defaultExpandParent: true,
  autoExpandParent: false,
  defaultExpandAll: false,
  defaultExpandedKeys: [],
  defaultCheckedKeys: [],
  defaultSelectedKeys: []
};


Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_11__["polyfill"])(Tree);

/* harmony default export */ __webpack_exports__["default"] = (Tree);

/***/ }),

/***/ "./node_modules/rc-tree/es/TreeNode.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-tree/es/TreeNode.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
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
/* harmony import */ var rc_animate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-animate */ "./node_modules/rc-tree/node_modules/rc-animate/es/index.js");
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rc-util/es/Children/toArray */ "./node_modules/rc-util/es/Children/toArray.js");
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _contextTypes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contextTypes */ "./node_modules/rc-tree/es/contextTypes.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./util */ "./node_modules/rc-tree/es/util.js");
















var ICON_OPEN = 'open';
var ICON_CLOSE = 'close';

var defaultTitle = '---';

var TreeNode = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(TreeNode, _React$Component);

  function TreeNode(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, TreeNode);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (TreeNode.__proto__ || Object.getPrototypeOf(TreeNode)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      dragNodeHighlight: false
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(TreeNode, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, this.context, {
        rcTreeNode: {
          // onUpCheckConduct: this.onUpCheckConduct,
        }
      });
    }

    // Isomorphic needn't load data in server side

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.syncLoadData(this.props);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.syncLoadData(this.props);
    }

    // Disabled item still can be switch


    // Drag usage

  }, {
    key: 'isSelectable',
    value: function isSelectable() {
      var selectable = this.props.selectable;
      var treeSelectable = this.context.rcTree.selectable;

      // Ignore when selectable is undefined or null

      if (typeof selectable === 'boolean') {
        return selectable;
      }

      return treeSelectable;
    }

    // Load data to avoid default expanded tree without data


    // Switcher


    // Checkbox


    // Icon + Title


    // Children list wrapped with `Animation`

  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var loading = this.props.loading;

      var _props = this.props,
          className = _props.className,
          style = _props.style,
          dragOver = _props.dragOver,
          dragOverGapTop = _props.dragOverGapTop,
          dragOverGapBottom = _props.dragOverGapBottom,
          isLeaf = _props.isLeaf,
          expanded = _props.expanded,
          selected = _props.selected,
          checked = _props.checked,
          halfChecked = _props.halfChecked,
          otherProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_props, ['className', 'style', 'dragOver', 'dragOverGapTop', 'dragOverGapBottom', 'isLeaf', 'expanded', 'selected', 'checked', 'halfChecked']);

      var _context$rcTree = this.context.rcTree,
          prefixCls = _context$rcTree.prefixCls,
          filterTreeNode = _context$rcTree.filterTreeNode,
          draggable = _context$rcTree.draggable;

      var disabled = this.isDisabled();
      var dataOrAriaAttributeProps = Object(_util__WEBPACK_IMPORTED_MODULE_14__["getDataAndAria"])(otherProps);

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        'li',
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({
          className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(className, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-treenode-disabled', disabled), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-treenode-switcher-' + (expanded ? 'open' : 'close'), !isLeaf), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-treenode-checkbox-checked', checked), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-treenode-checkbox-indeterminate', halfChecked), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-treenode-selected', selected), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-treenode-loading', loading), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, 'drag-over', !disabled && dragOver), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, 'drag-over-gap-top', !disabled && dragOverGapTop), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, 'drag-over-gap-bottom', !disabled && dragOverGapBottom), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, 'filter-node', filterTreeNode && filterTreeNode(this)), _classNames)),

          style: style,

          role: 'treeitem',

          onDragEnter: draggable ? this.onDragEnter : undefined,
          onDragOver: draggable ? this.onDragOver : undefined,
          onDragLeave: draggable ? this.onDragLeave : undefined,
          onDrop: draggable ? this.onDrop : undefined,
          onDragEnd: draggable ? this.onDragEnd : undefined
        }, dataOrAriaAttributeProps),
        this.renderSwitcher(),
        this.renderCheckbox(),
        this.renderSelector(),
        this.renderChildren()
      );
    }
  }]);

  return TreeNode;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

TreeNode.propTypes = {
  eventKey: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, // Pass by parent `cloneElement`
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  root: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,

  // By parent
  expanded: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  checked: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  loaded: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  halfChecked: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node,
  title: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node,
  pos: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  dragOver: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  dragOverGapTop: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  dragOverGapBottom: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,

  // By user
  isLeaf: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  selectable: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  disableCheckbox: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func]),
  switcherIcon: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func])
};
TreeNode.contextTypes = _contextTypes__WEBPACK_IMPORTED_MODULE_13__["nodeContextTypes"];
TreeNode.childContextTypes = _contextTypes__WEBPACK_IMPORTED_MODULE_13__["nodeContextTypes"];
TreeNode.defaultProps = {
  title: defaultTitle
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onSelectorClick = function (e) {
    // Click trigger before select/check operation
    var onNodeClick = _this2.context.rcTree.onNodeClick;

    onNodeClick(e, _this2);

    if (_this2.isSelectable()) {
      _this2.onSelect(e);
    } else {
      _this2.onCheck(e);
    }
  };

  this.onSelectorDoubleClick = function (e) {
    var onNodeDoubleClick = _this2.context.rcTree.onNodeDoubleClick;

    onNodeDoubleClick(e, _this2);
  };

  this.onSelect = function (e) {
    if (_this2.isDisabled()) return;

    var onNodeSelect = _this2.context.rcTree.onNodeSelect;

    e.preventDefault();
    onNodeSelect(e, _this2);
  };

  this.onCheck = function (e) {
    if (_this2.isDisabled()) return;

    var _props2 = _this2.props,
        disableCheckbox = _props2.disableCheckbox,
        checked = _props2.checked;
    var _context$rcTree2 = _this2.context.rcTree,
        checkable = _context$rcTree2.checkable,
        onNodeCheck = _context$rcTree2.onNodeCheck;


    if (!checkable || disableCheckbox) return;

    e.preventDefault();
    var targetChecked = !checked;
    onNodeCheck(e, _this2, targetChecked);
  };

  this.onMouseEnter = function (e) {
    var onNodeMouseEnter = _this2.context.rcTree.onNodeMouseEnter;

    onNodeMouseEnter(e, _this2);
  };

  this.onMouseLeave = function (e) {
    var onNodeMouseLeave = _this2.context.rcTree.onNodeMouseLeave;

    onNodeMouseLeave(e, _this2);
  };

  this.onContextMenu = function (e) {
    var onNodeContextMenu = _this2.context.rcTree.onNodeContextMenu;

    onNodeContextMenu(e, _this2);
  };

  this.onDragStart = function (e) {
    var onNodeDragStart = _this2.context.rcTree.onNodeDragStart;


    e.stopPropagation();
    _this2.setState({
      dragNodeHighlight: true
    });
    onNodeDragStart(e, _this2);

    try {
      // ie throw error
      // firefox-need-it
      e.dataTransfer.setData('text/plain', '');
    } catch (error) {
      // empty
    }
  };

  this.onDragEnter = function (e) {
    var onNodeDragEnter = _this2.context.rcTree.onNodeDragEnter;


    e.preventDefault();
    e.stopPropagation();
    onNodeDragEnter(e, _this2);
  };

  this.onDragOver = function (e) {
    var onNodeDragOver = _this2.context.rcTree.onNodeDragOver;


    e.preventDefault();
    e.stopPropagation();
    onNodeDragOver(e, _this2);
  };

  this.onDragLeave = function (e) {
    var onNodeDragLeave = _this2.context.rcTree.onNodeDragLeave;


    e.stopPropagation();
    onNodeDragLeave(e, _this2);
  };

  this.onDragEnd = function (e) {
    var onNodeDragEnd = _this2.context.rcTree.onNodeDragEnd;


    e.stopPropagation();
    _this2.setState({
      dragNodeHighlight: false
    });
    onNodeDragEnd(e, _this2);
  };

  this.onDrop = function (e) {
    var onNodeDrop = _this2.context.rcTree.onNodeDrop;


    e.preventDefault();
    e.stopPropagation();
    _this2.setState({
      dragNodeHighlight: false
    });
    onNodeDrop(e, _this2);
  };

  this.onExpand = function (e) {
    var onNodeExpand = _this2.context.rcTree.onNodeExpand;

    onNodeExpand(e, _this2);
  };

  this.setSelectHandle = function (node) {
    _this2.selectHandle = node;
  };

  this.getNodeChildren = function () {
    var children = _this2.props.children;

    var originList = Object(rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_11__["default"])(children).filter(function (node) {
      return node;
    });
    var targetList = Object(_util__WEBPACK_IMPORTED_MODULE_14__["getNodeChildren"])(originList);

    if (originList.length !== targetList.length) {
      Object(_util__WEBPACK_IMPORTED_MODULE_14__["warnOnlyTreeNode"])();
    }

    return targetList;
  };

  this.getNodeState = function () {
    var expanded = _this2.props.expanded;


    if (_this2.isLeaf()) {
      return null;
    }

    return expanded ? ICON_OPEN : ICON_CLOSE;
  };

  this.isLeaf = function () {
    var _props3 = _this2.props,
        isLeaf = _props3.isLeaf,
        loaded = _props3.loaded;
    var loadData = _this2.context.rcTree.loadData;


    var hasChildren = _this2.getNodeChildren().length !== 0;

    if (isLeaf === false) {
      return false;
    }

    return isLeaf || !loadData && !hasChildren || loadData && loaded && !hasChildren;
  };

  this.isDisabled = function () {
    var disabled = _this2.props.disabled;
    var treeDisabled = _this2.context.rcTree.disabled;

    // Follow the logic of Selectable

    if (disabled === false) {
      return false;
    }

    return !!(treeDisabled || disabled);
  };

  this.syncLoadData = function (props) {
    var expanded = props.expanded,
        loading = props.loading,
        loaded = props.loaded;
    var _context$rcTree3 = _this2.context.rcTree,
        loadData = _context$rcTree3.loadData,
        onNodeLoad = _context$rcTree3.onNodeLoad;


    if (loading) return;

    // read from state to avoid loadData at same time
    if (loadData && expanded && !_this2.isLeaf()) {
      // We needn't reload data when has children in sync logic
      // It's only needed in node expanded
      var hasChildren = _this2.getNodeChildren().length !== 0;
      if (!hasChildren && !loaded) {
        onNodeLoad(_this2);
      }
    }
  };

  this.renderSwitcher = function () {
    var _props4 = _this2.props,
        expanded = _props4.expanded,
        switcherIconFromProps = _props4.switcherIcon;
    var _context$rcTree4 = _this2.context.rcTree,
        prefixCls = _context$rcTree4.prefixCls,
        switcherIconFromCtx = _context$rcTree4.switcherIcon;


    var switcherIcon = switcherIconFromProps || switcherIconFromCtx;

    if (_this2.isLeaf()) {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        'span',
        { className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(prefixCls + '-switcher', prefixCls + '-switcher-noop') },
        typeof switcherIcon === 'function' ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(switcherIcon, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, _this2.props, { isLeaf: true })) : switcherIcon
      );
    }

    var switcherCls = classnames__WEBPACK_IMPORTED_MODULE_9___default()(prefixCls + '-switcher', prefixCls + '-switcher_' + (expanded ? ICON_OPEN : ICON_CLOSE));
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      'span',
      { onClick: _this2.onExpand, className: switcherCls },
      typeof switcherIcon === 'function' ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(switcherIcon, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, _this2.props, { isLeaf: false })) : switcherIcon
    );
  };

  this.renderCheckbox = function () {
    var _props5 = _this2.props,
        checked = _props5.checked,
        halfChecked = _props5.halfChecked,
        disableCheckbox = _props5.disableCheckbox;
    var _context$rcTree5 = _this2.context.rcTree,
        prefixCls = _context$rcTree5.prefixCls,
        checkable = _context$rcTree5.checkable;

    var disabled = _this2.isDisabled();

    if (!checkable) return null;

    // [Legacy] Custom element should be separate with `checkable` in future
    var $custom = typeof checkable !== 'boolean' ? checkable : null;

    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      'span',
      {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(prefixCls + '-checkbox', checked && prefixCls + '-checkbox-checked', !checked && halfChecked && prefixCls + '-checkbox-indeterminate', (disabled || disableCheckbox) && prefixCls + '-checkbox-disabled'),
        onClick: _this2.onCheck
      },
      $custom
    );
  };

  this.renderIcon = function () {
    var loading = _this2.props.loading;
    var prefixCls = _this2.context.rcTree.prefixCls;


    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('span', {
      className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(prefixCls + '-iconEle', prefixCls + '-icon__' + (_this2.getNodeState() || 'docu'), loading && prefixCls + '-icon_loading')
    });
  };

  this.renderSelector = function () {
    var dragNodeHighlight = _this2.state.dragNodeHighlight;
    var _props6 = _this2.props,
        title = _props6.title,
        selected = _props6.selected,
        icon = _props6.icon,
        loading = _props6.loading;
    var _context$rcTree6 = _this2.context.rcTree,
        prefixCls = _context$rcTree6.prefixCls,
        showIcon = _context$rcTree6.showIcon,
        treeIcon = _context$rcTree6.icon,
        draggable = _context$rcTree6.draggable,
        loadData = _context$rcTree6.loadData;

    var disabled = _this2.isDisabled();

    var wrapClass = prefixCls + '-node-content-wrapper';

    // Icon - Still show loading icon when loading without showIcon
    var $icon = void 0;

    if (showIcon) {
      var currentIcon = icon || treeIcon;

      $icon = currentIcon ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        'span',
        {
          className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(prefixCls + '-iconEle', prefixCls + '-icon__customize')
        },
        typeof currentIcon === 'function' ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(currentIcon, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, _this2.props)) : currentIcon
      ) : _this2.renderIcon();
    } else if (loadData && loading) {
      $icon = _this2.renderIcon();
    }

    // Title
    var $title = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      'span',
      { className: prefixCls + '-title' },
      title
    );

    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      'span',
      {
        ref: _this2.setSelectHandle,
        title: typeof title === 'string' ? title : '',
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('' + wrapClass, wrapClass + '-' + (_this2.getNodeState() || 'normal'), !disabled && (selected || dragNodeHighlight) && prefixCls + '-node-selected', !disabled && draggable && 'draggable'),
        draggable: !disabled && draggable || undefined,
        'aria-grabbed': !disabled && draggable || undefined,

        onMouseEnter: _this2.onMouseEnter,
        onMouseLeave: _this2.onMouseLeave,
        onContextMenu: _this2.onContextMenu,
        onClick: _this2.onSelectorClick,
        onDoubleClick: _this2.onSelectorDoubleClick,
        onDragStart: draggable ? _this2.onDragStart : undefined
      },
      $icon,
      $title
    );
  };

  this.renderChildren = function () {
    var _props7 = _this2.props,
        expanded = _props7.expanded,
        pos = _props7.pos;
    var _context$rcTree7 = _this2.context.rcTree,
        prefixCls = _context$rcTree7.prefixCls,
        openTransitionName = _context$rcTree7.openTransitionName,
        openAnimation = _context$rcTree7.openAnimation,
        renderTreeNode = _context$rcTree7.renderTreeNode;


    var animProps = {};
    if (openTransitionName) {
      animProps.transitionName = openTransitionName;
    } else if (typeof openAnimation === 'object') {
      animProps.animation = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, openAnimation);
    }

    // Children TreeNode
    var nodeList = _this2.getNodeChildren();

    if (nodeList.length === 0) {
      return null;
    }

    var $children = void 0;
    if (expanded) {
      $children = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        'ul',
        {
          className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(prefixCls + '-child-tree', expanded && prefixCls + '-child-tree-open'),
          'data-expanded': expanded,
          role: 'group'
        },
        Object(_util__WEBPACK_IMPORTED_MODULE_14__["mapChildren"])(nodeList, function (node, index) {
          return renderTreeNode(node, index, pos);
        })
      );
    }

    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
      rc_animate__WEBPACK_IMPORTED_MODULE_10__["default"],
      babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, animProps, {
        showProp: 'data-expanded',
        component: ''
      }),
      $children
    );
  };
};

TreeNode.isTreeNode = 1;

Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_12__["polyfill"])(TreeNode);

/* harmony default export */ __webpack_exports__["default"] = (TreeNode);

/***/ }),

/***/ "./node_modules/rc-tree/es/contextTypes.js":
/*!*************************************************!*\
  !*** ./node_modules/rc-tree/es/contextTypes.js ***!
  \*************************************************/
/*! exports provided: treeContextTypes, nodeContextTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "treeContextTypes", function() { return treeContextTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeContextTypes", function() { return nodeContextTypes; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);

/**
 * Webpack has bug for import loop, which is not the same behavior as ES module.
 * When util.js imports the TreeNode for tree generate will cause treeContextTypes be empty.
 */



/**
 * Thought we still use `cloneElement` to pass `key`,
 * other props can pass with context for future refactor.
 */
var treeContextTypes = {
  rcTree: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    root: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

    prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    selectable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    showIcon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]),
    draggable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    checkable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]),
    checkStrictly: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    openTransitionName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    openAnimation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),

    loadData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    filterTreeNode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    renderTreeNode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

    isKeyChecked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

    onNodeClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeDoubleClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeExpand: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeCheck: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeContextMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeDragStart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeDragEnter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeDragOver: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeDragLeave: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeDragEnd: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onNodeDrop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func

    // TODO: Remove this
    // onBatchNodeCheck: PropTypes.func,
    // onCheckConductFinished: PropTypes.func,

    // Tree will store the entities when the treeNode refresh.
    // User can pass the func to add more info to customize the additional info.
    // processTreeEntity: PropTypes.func,
  })
};

var nodeContextTypes = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, treeContextTypes, {
  rcTreeNode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    onUpCheckConduct: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
  })
});

/***/ }),

/***/ "./node_modules/rc-tree/es/index.js":
/*!******************************************!*\
  !*** ./node_modules/rc-tree/es/index.js ***!
  \******************************************/
/*! exports provided: TreeNode, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tree */ "./node_modules/rc-tree/es/Tree.js");
/* harmony import */ var _TreeNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TreeNode */ "./node_modules/rc-tree/es/TreeNode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeNode", function() { return _TreeNode__WEBPACK_IMPORTED_MODULE_1__["default"]; });




_Tree__WEBPACK_IMPORTED_MODULE_0__["default"].TreeNode = _TreeNode__WEBPACK_IMPORTED_MODULE_1__["default"];


/* harmony default export */ __webpack_exports__["default"] = (_Tree__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/rc-tree/es/util.js":
/*!*****************************************!*\
  !*** ./node_modules/rc-tree/es/util.js ***!
  \*****************************************/
/*! exports provided: warnOnlyTreeNode, arrDel, arrAdd, posToArr, getPosition, isTreeNode, getNodeChildren, isCheckDisabled, traverseTreeNodes, mapChildren, getDragNodesKeys, calcDropPosition, calcSelectedKeys, convertDataToTree, convertTreeToEntities, parseCheckedKeys, conductCheck, conductExpandParent, getDataAndAria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnOnlyTreeNode", function() { return warnOnlyTreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrDel", function() { return arrDel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrAdd", function() { return arrAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posToArr", function() { return posToArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosition", function() { return getPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTreeNode", function() { return isTreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNodeChildren", function() { return getNodeChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCheckDisabled", function() { return isCheckDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverseTreeNodes", function() { return traverseTreeNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapChildren", function() { return mapChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDragNodesKeys", function() { return getDragNodesKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcDropPosition", function() { return calcDropPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcSelectedKeys", function() { return calcSelectedKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDataToTree", function() { return convertDataToTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertTreeToEntities", function() { return convertTreeToEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseCheckedKeys", function() { return parseCheckedKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conductCheck", function() { return conductCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conductExpandParent", function() { return conductExpandParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataAndAria", function() { return getDataAndAria; });
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/Children/toArray */ "./node_modules/rc-util/es/Children/toArray.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! warning */ "./node_modules/rc-tree/node_modules/warning/browser.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TreeNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TreeNode */ "./node_modules/rc-tree/es/TreeNode.js");






var DRAG_SIDE_RANGE = 0.25;
var DRAG_MIN_GAP = 2;

var onlyTreeNodeWarned = false;

function warnOnlyTreeNode() {
  if (onlyTreeNodeWarned) return;

  onlyTreeNodeWarned = true;
  warning__WEBPACK_IMPORTED_MODULE_3___default()(false, 'Tree only accept TreeNode as children.');
}

function arrDel(list, value) {
  var clone = list.slice();
  var index = clone.indexOf(value);
  if (index >= 0) {
    clone.splice(index, 1);
  }
  return clone;
}

function arrAdd(list, value) {
  var clone = list.slice();
  if (clone.indexOf(value) === -1) {
    clone.push(value);
  }
  return clone;
}

function posToArr(pos) {
  return pos.split('-');
}

function getPosition(level, index) {
  return level + '-' + index;
}

function isTreeNode(node) {
  return node && node.type && node.type.isTreeNode;
}

function getNodeChildren(children) {
  return Object(rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_2__["default"])(children).filter(isTreeNode);
}

function isCheckDisabled(node) {
  var _ref = node.props || {},
      disabled = _ref.disabled,
      disableCheckbox = _ref.disableCheckbox;

  return !!(disabled || disableCheckbox);
}

function traverseTreeNodes(treeNodes, callback) {
  function processNode(node, index, parent) {
    var children = node ? node.props.children : treeNodes;
    var pos = node ? getPosition(parent.pos, index) : 0;

    // Filter children
    var childList = getNodeChildren(children);

    // Process node if is not root
    if (node) {
      var data = {
        node: node,
        index: index,
        pos: pos,
        key: node.key || pos,
        parentPos: parent.node ? parent.pos : null
      };

      callback(data);
    }

    // Process children node
    react__WEBPACK_IMPORTED_MODULE_1__["Children"].forEach(childList, function (subNode, subIndex) {
      processNode(subNode, subIndex, { node: node, pos: pos });
    });
  }

  processNode(null);
}

/**
 * Use `rc-util` `toArray` to get the children list which keeps the key.
 * And return single node if children is only one(This can avoid `key` missing check).
 */
function mapChildren(children, func) {
  var list = Object(rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_2__["default"])(children).map(func);
  if (list.length === 1) {
    return list[0];
  }
  return list;
}

function getDragNodesKeys(treeNodes, node) {
  var _node$props = node.props,
      eventKey = _node$props.eventKey,
      pos = _node$props.pos;

  var dragNodesKeys = [];

  traverseTreeNodes(treeNodes, function (_ref2) {
    var key = _ref2.key;

    dragNodesKeys.push(key);
  });
  dragNodesKeys.push(eventKey || pos);
  return dragNodesKeys;
}

// Only used when drag, not affect SSR.
function calcDropPosition(event, treeNode) {
  var clientY = event.clientY;

  var _treeNode$selectHandl = treeNode.selectHandle.getBoundingClientRect(),
      top = _treeNode$selectHandl.top,
      bottom = _treeNode$selectHandl.bottom,
      height = _treeNode$selectHandl.height;

  var des = Math.max(height * DRAG_SIDE_RANGE, DRAG_MIN_GAP);

  if (clientY <= top + des) {
    return -1;
  } else if (clientY >= bottom - des) {
    return 1;
  }

  return 0;
}

/**
 * Return selectedKeys according with multiple prop
 * @param selectedKeys
 * @param props
 * @returns [string]
 */
function calcSelectedKeys(selectedKeys, props) {
  if (!selectedKeys) return undefined;

  var multiple = props.multiple;

  if (multiple) {
    return selectedKeys.slice();
  }

  if (selectedKeys.length) {
    return [selectedKeys[0]];
  }
  return selectedKeys;
}

/**
 * Since React internal will convert key to string,
 * we need do this to avoid `checkStrictly` use number match
 */
function keyListToString(keyList) {
  if (!keyList) return keyList;
  return keyList.map(function (key) {
    return String(key);
  });
}

var internalProcessProps = function internalProcessProps(props) {
  return props;
};
function convertDataToTree(treeData, processer) {
  if (!treeData) return [];

  var _ref3 = processer || {},
      _ref3$processProps = _ref3.processProps,
      processProps = _ref3$processProps === undefined ? internalProcessProps : _ref3$processProps;

  var list = Array.isArray(treeData) ? treeData : [treeData];
  return list.map(function (_ref4) {
    var children = _ref4.children,
        props = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref4, ['children']);

    var childrenNodes = convertDataToTree(children, processer);

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      _TreeNode__WEBPACK_IMPORTED_MODULE_4__["default"],
      processProps(props),
      childrenNodes
    );
  });
}

// TODO: ========================= NEW LOGIC =========================
/**
 * Calculate treeNodes entities. `processTreeEntity` is used for `rc-tree-select`
 * @param treeNodes
 * @param processTreeEntity  User can customize the entity
 */
function convertTreeToEntities(treeNodes) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      initWrapper = _ref5.initWrapper,
      processEntity = _ref5.processEntity,
      onProcessFinished = _ref5.onProcessFinished;

  var posEntities = {};
  var keyEntities = {};
  var wrapper = {
    posEntities: posEntities,
    keyEntities: keyEntities
  };

  if (initWrapper) {
    wrapper = initWrapper(wrapper) || wrapper;
  }

  traverseTreeNodes(treeNodes, function (item) {
    var node = item.node,
        index = item.index,
        pos = item.pos,
        key = item.key,
        parentPos = item.parentPos;

    var entity = { node: node, index: index, key: key, pos: pos };

    posEntities[pos] = entity;
    keyEntities[key] = entity;

    // Fill children
    entity.parent = posEntities[parentPos];
    if (entity.parent) {
      entity.parent.children = entity.parent.children || [];
      entity.parent.children.push(entity);
    }

    if (processEntity) {
      processEntity(entity, wrapper);
    }
  });

  if (onProcessFinished) {
    onProcessFinished(wrapper);
  }

  return wrapper;
}

/**
 * Parse `checkedKeys` to { checkedKeys, halfCheckedKeys } style
 */
function parseCheckedKeys(keys) {
  if (!keys) {
    return null;
  }

  // Convert keys to object format
  var keyProps = void 0;
  if (Array.isArray(keys)) {
    // [Legacy] Follow the api doc
    keyProps = {
      checkedKeys: keys,
      halfCheckedKeys: undefined
    };
  } else if (typeof keys === 'object') {
    keyProps = {
      checkedKeys: keys.checked || undefined,
      halfCheckedKeys: keys.halfChecked || undefined
    };
  } else {
    warning__WEBPACK_IMPORTED_MODULE_3___default()(false, '`checkedKeys` is not an array or an object');
    return null;
  }

  keyProps.checkedKeys = keyListToString(keyProps.checkedKeys);
  keyProps.halfCheckedKeys = keyListToString(keyProps.halfCheckedKeys);

  return keyProps;
}

/**
 * Conduct check state by the keyList. It will conduct up & from the provided key.
 * If the conduct path reach the disabled or already checked / unchecked node will stop conduct.
 * @param keyList       list of keys
 * @param isCheck       is check the node or not
 * @param keyEntities   parsed by `convertTreeToEntities` function in Tree
 * @param checkStatus   Can pass current checked status for process (usually for uncheck operation)
 * @returns {{checkedKeys: [], halfCheckedKeys: []}}
 */
function conductCheck(keyList, isCheck, keyEntities) {
  var checkStatus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var checkedKeys = {};
  var halfCheckedKeys = {}; // Record the key has some child checked (include child half checked)

  (checkStatus.checkedKeys || []).forEach(function (key) {
    checkedKeys[key] = true;
  });

  (checkStatus.halfCheckedKeys || []).forEach(function (key) {
    halfCheckedKeys[key] = true;
  });

  // Conduct up
  function conductUp(key) {
    if (checkedKeys[key] === isCheck) return;

    var entity = keyEntities[key];
    if (!entity) return;

    var children = entity.children,
        parent = entity.parent,
        node = entity.node;


    if (isCheckDisabled(node)) return;

    // Check child node checked status
    var everyChildChecked = true;
    var someChildChecked = false; // Child checked or half checked

    (children || []).filter(function (child) {
      return !isCheckDisabled(child.node);
    }).forEach(function (_ref6) {
      var childKey = _ref6.key;

      var childChecked = checkedKeys[childKey];
      var childHalfChecked = halfCheckedKeys[childKey];

      if (childChecked || childHalfChecked) someChildChecked = true;
      if (!childChecked) everyChildChecked = false;
    });

    // Update checked status
    if (isCheck) {
      checkedKeys[key] = everyChildChecked;
    } else {
      checkedKeys[key] = false;
    }
    halfCheckedKeys[key] = someChildChecked;

    if (parent) {
      conductUp(parent.key);
    }
  }

  // Conduct down
  function conductDown(key) {
    if (checkedKeys[key] === isCheck) return;

    var entity = keyEntities[key];
    if (!entity) return;

    var children = entity.children,
        node = entity.node;


    if (isCheckDisabled(node)) return;

    checkedKeys[key] = isCheck;

    (children || []).forEach(function (child) {
      conductDown(child.key);
    });
  }

  function conduct(key) {
    var entity = keyEntities[key];

    if (!entity) {
      warning__WEBPACK_IMPORTED_MODULE_3___default()(false, '\'' + key + '\' does not exist in the tree.');
      return;
    }

    var children = entity.children,
        parent = entity.parent,
        node = entity.node;

    checkedKeys[key] = isCheck;

    if (isCheckDisabled(node)) return;

    // Conduct down
    (children || []).filter(function (child) {
      return !isCheckDisabled(child.node);
    }).forEach(function (child) {
      conductDown(child.key);
    });

    // Conduct up
    if (parent) {
      conductUp(parent.key);
    }
  }

  (keyList || []).forEach(function (key) {
    conduct(key);
  });

  var checkedKeyList = [];
  var halfCheckedKeyList = [];

  // Fill checked list
  Object.keys(checkedKeys).forEach(function (key) {
    if (checkedKeys[key]) {
      checkedKeyList.push(key);
    }
  });

  // Fill half checked list
  Object.keys(halfCheckedKeys).forEach(function (key) {
    if (!checkedKeys[key] && halfCheckedKeys[key]) {
      halfCheckedKeyList.push(key);
    }
  });

  return {
    checkedKeys: checkedKeyList,
    halfCheckedKeys: halfCheckedKeyList
  };
}

/**
 * If user use `autoExpandParent` we should get the list of parent node
 * @param keyList
 * @param keyEntities
 */
function conductExpandParent(keyList, keyEntities) {
  var expandedKeys = {};

  function conductUp(key) {
    if (expandedKeys[key]) return;

    var entity = keyEntities[key];
    if (!entity) return;

    expandedKeys[key] = true;

    var parent = entity.parent,
        node = entity.node;


    if (isCheckDisabled(node)) return;

    if (parent) {
      conductUp(parent.key);
    }
  }

  (keyList || []).forEach(function (key) {
    conductUp(key);
  });

  return Object.keys(expandedKeys);
}

/**
 * Returns only the data- and aria- key/value pairs
 * @param {object} props 
 */
function getDataAndAria(props) {
  return Object.keys(props).reduce(function (prev, key) {
    if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-') {
      prev[key] = props[key];
    }
    return prev;
  }, {});
}

/***/ }),

/***/ "./node_modules/rc-tree/lib/TreeNode.js":
/*!**********************************************!*\
  !*** ./node_modules/rc-tree/lib/TreeNode.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _rcAnimate = __webpack_require__(/*! rc-animate */ "./node_modules/rc-tree/node_modules/rc-animate/es/index.js");

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _toArray = __webpack_require__(/*! rc-util/lib/Children/toArray */ "./node_modules/rc-util/lib/Children/toArray.js");

var _toArray2 = _interopRequireDefault(_toArray);

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _contextTypes = __webpack_require__(/*! ./contextTypes */ "./node_modules/rc-tree/lib/contextTypes.js");

var _util = __webpack_require__(/*! ./util */ "./node_modules/rc-tree/lib/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ICON_OPEN = 'open';
var ICON_CLOSE = 'close';

var defaultTitle = '---';

var TreeNode = function (_React$Component) {
  (0, _inherits3['default'])(TreeNode, _React$Component);

  function TreeNode(props) {
    (0, _classCallCheck3['default'])(this, TreeNode);

    var _this = (0, _possibleConstructorReturn3['default'])(this, (TreeNode.__proto__ || Object.getPrototypeOf(TreeNode)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      dragNodeHighlight: false
    };
    return _this;
  }

  (0, _createClass3['default'])(TreeNode, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return (0, _extends3['default'])({}, this.context, {
        rcTreeNode: {
          // onUpCheckConduct: this.onUpCheckConduct,
        }
      });
    }

    // Isomorphic needn't load data in server side

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.syncLoadData(this.props);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.syncLoadData(this.props);
    }

    // Disabled item still can be switch


    // Drag usage

  }, {
    key: 'isSelectable',
    value: function isSelectable() {
      var selectable = this.props.selectable;
      var treeSelectable = this.context.rcTree.selectable;

      // Ignore when selectable is undefined or null

      if (typeof selectable === 'boolean') {
        return selectable;
      }

      return treeSelectable;
    }

    // Load data to avoid default expanded tree without data


    // Switcher


    // Checkbox


    // Icon + Title


    // Children list wrapped with `Animation`

  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var loading = this.props.loading;
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          dragOver = _props.dragOver,
          dragOverGapTop = _props.dragOverGapTop,
          dragOverGapBottom = _props.dragOverGapBottom,
          isLeaf = _props.isLeaf,
          expanded = _props.expanded,
          selected = _props.selected,
          checked = _props.checked,
          halfChecked = _props.halfChecked,
          otherProps = (0, _objectWithoutProperties3['default'])(_props, ['className', 'style', 'dragOver', 'dragOverGapTop', 'dragOverGapBottom', 'isLeaf', 'expanded', 'selected', 'checked', 'halfChecked']);
      var _context$rcTree = this.context.rcTree,
          prefixCls = _context$rcTree.prefixCls,
          filterTreeNode = _context$rcTree.filterTreeNode,
          draggable = _context$rcTree.draggable;

      var disabled = this.isDisabled();
      var dataOrAriaAttributeProps = (0, _util.getDataAndAria)(otherProps);

      return _react2['default'].createElement(
        'li',
        (0, _extends3['default'])({
          className: (0, _classnames2['default'])(className, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-treenode-disabled', disabled), (0, _defineProperty3['default'])(_classNames, prefixCls + '-treenode-switcher-' + (expanded ? 'open' : 'close'), !isLeaf), (0, _defineProperty3['default'])(_classNames, prefixCls + '-treenode-checkbox-checked', checked), (0, _defineProperty3['default'])(_classNames, prefixCls + '-treenode-checkbox-indeterminate', halfChecked), (0, _defineProperty3['default'])(_classNames, prefixCls + '-treenode-selected', selected), (0, _defineProperty3['default'])(_classNames, prefixCls + '-treenode-loading', loading), (0, _defineProperty3['default'])(_classNames, 'drag-over', !disabled && dragOver), (0, _defineProperty3['default'])(_classNames, 'drag-over-gap-top', !disabled && dragOverGapTop), (0, _defineProperty3['default'])(_classNames, 'drag-over-gap-bottom', !disabled && dragOverGapBottom), (0, _defineProperty3['default'])(_classNames, 'filter-node', filterTreeNode && filterTreeNode(this)), _classNames)),

          style: style,

          role: 'treeitem',

          onDragEnter: draggable ? this.onDragEnter : undefined,
          onDragOver: draggable ? this.onDragOver : undefined,
          onDragLeave: draggable ? this.onDragLeave : undefined,
          onDrop: draggable ? this.onDrop : undefined,
          onDragEnd: draggable ? this.onDragEnd : undefined
        }, dataOrAriaAttributeProps),
        this.renderSwitcher(),
        this.renderCheckbox(),
        this.renderSelector(),
        this.renderChildren()
      );
    }
  }]);
  return TreeNode;
}(_react2['default'].Component);

TreeNode.propTypes = {
  eventKey: _propTypes2['default'].string, // Pass by parent `cloneElement`
  prefixCls: _propTypes2['default'].string,
  className: _propTypes2['default'].string,
  style: _propTypes2['default'].object,
  root: _propTypes2['default'].object,
  onSelect: _propTypes2['default'].func,

  // By parent
  expanded: _propTypes2['default'].bool,
  selected: _propTypes2['default'].bool,
  checked: _propTypes2['default'].bool,
  loaded: _propTypes2['default'].bool,
  loading: _propTypes2['default'].bool,
  halfChecked: _propTypes2['default'].bool,
  children: _propTypes2['default'].node,
  title: _propTypes2['default'].node,
  pos: _propTypes2['default'].string,
  dragOver: _propTypes2['default'].bool,
  dragOverGapTop: _propTypes2['default'].bool,
  dragOverGapBottom: _propTypes2['default'].bool,

  // By user
  isLeaf: _propTypes2['default'].bool,
  selectable: _propTypes2['default'].bool,
  disabled: _propTypes2['default'].bool,
  disableCheckbox: _propTypes2['default'].bool,
  icon: _propTypes2['default'].oneOfType([_propTypes2['default'].node, _propTypes2['default'].func]),
  switcherIcon: _propTypes2['default'].oneOfType([_propTypes2['default'].node, _propTypes2['default'].func])
};
TreeNode.contextTypes = _contextTypes.nodeContextTypes;
TreeNode.childContextTypes = _contextTypes.nodeContextTypes;
TreeNode.defaultProps = {
  title: defaultTitle
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onSelectorClick = function (e) {
    // Click trigger before select/check operation
    var onNodeClick = _this2.context.rcTree.onNodeClick;

    onNodeClick(e, _this2);

    if (_this2.isSelectable()) {
      _this2.onSelect(e);
    } else {
      _this2.onCheck(e);
    }
  };

  this.onSelectorDoubleClick = function (e) {
    var onNodeDoubleClick = _this2.context.rcTree.onNodeDoubleClick;

    onNodeDoubleClick(e, _this2);
  };

  this.onSelect = function (e) {
    if (_this2.isDisabled()) return;

    var onNodeSelect = _this2.context.rcTree.onNodeSelect;

    e.preventDefault();
    onNodeSelect(e, _this2);
  };

  this.onCheck = function (e) {
    if (_this2.isDisabled()) return;

    var _props2 = _this2.props,
        disableCheckbox = _props2.disableCheckbox,
        checked = _props2.checked;
    var _context$rcTree2 = _this2.context.rcTree,
        checkable = _context$rcTree2.checkable,
        onNodeCheck = _context$rcTree2.onNodeCheck;


    if (!checkable || disableCheckbox) return;

    e.preventDefault();
    var targetChecked = !checked;
    onNodeCheck(e, _this2, targetChecked);
  };

  this.onMouseEnter = function (e) {
    var onNodeMouseEnter = _this2.context.rcTree.onNodeMouseEnter;

    onNodeMouseEnter(e, _this2);
  };

  this.onMouseLeave = function (e) {
    var onNodeMouseLeave = _this2.context.rcTree.onNodeMouseLeave;

    onNodeMouseLeave(e, _this2);
  };

  this.onContextMenu = function (e) {
    var onNodeContextMenu = _this2.context.rcTree.onNodeContextMenu;

    onNodeContextMenu(e, _this2);
  };

  this.onDragStart = function (e) {
    var onNodeDragStart = _this2.context.rcTree.onNodeDragStart;


    e.stopPropagation();
    _this2.setState({
      dragNodeHighlight: true
    });
    onNodeDragStart(e, _this2);

    try {
      // ie throw error
      // firefox-need-it
      e.dataTransfer.setData('text/plain', '');
    } catch (error) {
      // empty
    }
  };

  this.onDragEnter = function (e) {
    var onNodeDragEnter = _this2.context.rcTree.onNodeDragEnter;


    e.preventDefault();
    e.stopPropagation();
    onNodeDragEnter(e, _this2);
  };

  this.onDragOver = function (e) {
    var onNodeDragOver = _this2.context.rcTree.onNodeDragOver;


    e.preventDefault();
    e.stopPropagation();
    onNodeDragOver(e, _this2);
  };

  this.onDragLeave = function (e) {
    var onNodeDragLeave = _this2.context.rcTree.onNodeDragLeave;


    e.stopPropagation();
    onNodeDragLeave(e, _this2);
  };

  this.onDragEnd = function (e) {
    var onNodeDragEnd = _this2.context.rcTree.onNodeDragEnd;


    e.stopPropagation();
    _this2.setState({
      dragNodeHighlight: false
    });
    onNodeDragEnd(e, _this2);
  };

  this.onDrop = function (e) {
    var onNodeDrop = _this2.context.rcTree.onNodeDrop;


    e.preventDefault();
    e.stopPropagation();
    _this2.setState({
      dragNodeHighlight: false
    });
    onNodeDrop(e, _this2);
  };

  this.onExpand = function (e) {
    var onNodeExpand = _this2.context.rcTree.onNodeExpand;

    onNodeExpand(e, _this2);
  };

  this.setSelectHandle = function (node) {
    _this2.selectHandle = node;
  };

  this.getNodeChildren = function () {
    var children = _this2.props.children;

    var originList = (0, _toArray2['default'])(children).filter(function (node) {
      return node;
    });
    var targetList = (0, _util.getNodeChildren)(originList);

    if (originList.length !== targetList.length) {
      (0, _util.warnOnlyTreeNode)();
    }

    return targetList;
  };

  this.getNodeState = function () {
    var expanded = _this2.props.expanded;


    if (_this2.isLeaf()) {
      return null;
    }

    return expanded ? ICON_OPEN : ICON_CLOSE;
  };

  this.isLeaf = function () {
    var _props3 = _this2.props,
        isLeaf = _props3.isLeaf,
        loaded = _props3.loaded;
    var loadData = _this2.context.rcTree.loadData;


    var hasChildren = _this2.getNodeChildren().length !== 0;

    if (isLeaf === false) {
      return false;
    }

    return isLeaf || !loadData && !hasChildren || loadData && loaded && !hasChildren;
  };

  this.isDisabled = function () {
    var disabled = _this2.props.disabled;
    var treeDisabled = _this2.context.rcTree.disabled;

    // Follow the logic of Selectable

    if (disabled === false) {
      return false;
    }

    return !!(treeDisabled || disabled);
  };

  this.syncLoadData = function (props) {
    var expanded = props.expanded,
        loading = props.loading,
        loaded = props.loaded;
    var _context$rcTree3 = _this2.context.rcTree,
        loadData = _context$rcTree3.loadData,
        onNodeLoad = _context$rcTree3.onNodeLoad;


    if (loading) return;

    // read from state to avoid loadData at same time
    if (loadData && expanded && !_this2.isLeaf()) {
      // We needn't reload data when has children in sync logic
      // It's only needed in node expanded
      var hasChildren = _this2.getNodeChildren().length !== 0;
      if (!hasChildren && !loaded) {
        onNodeLoad(_this2);
      }
    }
  };

  this.renderSwitcher = function () {
    var _props4 = _this2.props,
        expanded = _props4.expanded,
        switcherIconFromProps = _props4.switcherIcon;
    var _context$rcTree4 = _this2.context.rcTree,
        prefixCls = _context$rcTree4.prefixCls,
        switcherIconFromCtx = _context$rcTree4.switcherIcon;


    var switcherIcon = switcherIconFromProps || switcherIconFromCtx;

    if (_this2.isLeaf()) {
      return _react2['default'].createElement(
        'span',
        { className: (0, _classnames2['default'])(prefixCls + '-switcher', prefixCls + '-switcher-noop') },
        typeof switcherIcon === 'function' ? _react2['default'].createElement(switcherIcon, (0, _extends3['default'])({}, _this2.props, { isLeaf: true })) : switcherIcon
      );
    }

    var switcherCls = (0, _classnames2['default'])(prefixCls + '-switcher', prefixCls + '-switcher_' + (expanded ? ICON_OPEN : ICON_CLOSE));
    return _react2['default'].createElement(
      'span',
      { onClick: _this2.onExpand, className: switcherCls },
      typeof switcherIcon === 'function' ? _react2['default'].createElement(switcherIcon, (0, _extends3['default'])({}, _this2.props, { isLeaf: false })) : switcherIcon
    );
  };

  this.renderCheckbox = function () {
    var _props5 = _this2.props,
        checked = _props5.checked,
        halfChecked = _props5.halfChecked,
        disableCheckbox = _props5.disableCheckbox;
    var _context$rcTree5 = _this2.context.rcTree,
        prefixCls = _context$rcTree5.prefixCls,
        checkable = _context$rcTree5.checkable;

    var disabled = _this2.isDisabled();

    if (!checkable) return null;

    // [Legacy] Custom element should be separate with `checkable` in future
    var $custom = typeof checkable !== 'boolean' ? checkable : null;

    return _react2['default'].createElement(
      'span',
      {
        className: (0, _classnames2['default'])(prefixCls + '-checkbox', checked && prefixCls + '-checkbox-checked', !checked && halfChecked && prefixCls + '-checkbox-indeterminate', (disabled || disableCheckbox) && prefixCls + '-checkbox-disabled'),
        onClick: _this2.onCheck
      },
      $custom
    );
  };

  this.renderIcon = function () {
    var loading = _this2.props.loading;
    var prefixCls = _this2.context.rcTree.prefixCls;


    return _react2['default'].createElement('span', {
      className: (0, _classnames2['default'])(prefixCls + '-iconEle', prefixCls + '-icon__' + (_this2.getNodeState() || 'docu'), loading && prefixCls + '-icon_loading')
    });
  };

  this.renderSelector = function () {
    var dragNodeHighlight = _this2.state.dragNodeHighlight;
    var _props6 = _this2.props,
        title = _props6.title,
        selected = _props6.selected,
        icon = _props6.icon,
        loading = _props6.loading;
    var _context$rcTree6 = _this2.context.rcTree,
        prefixCls = _context$rcTree6.prefixCls,
        showIcon = _context$rcTree6.showIcon,
        treeIcon = _context$rcTree6.icon,
        draggable = _context$rcTree6.draggable,
        loadData = _context$rcTree6.loadData;

    var disabled = _this2.isDisabled();

    var wrapClass = prefixCls + '-node-content-wrapper';

    // Icon - Still show loading icon when loading without showIcon
    var $icon = void 0;

    if (showIcon) {
      var currentIcon = icon || treeIcon;

      $icon = currentIcon ? _react2['default'].createElement(
        'span',
        {
          className: (0, _classnames2['default'])(prefixCls + '-iconEle', prefixCls + '-icon__customize')
        },
        typeof currentIcon === 'function' ? _react2['default'].createElement(currentIcon, (0, _extends3['default'])({}, _this2.props)) : currentIcon
      ) : _this2.renderIcon();
    } else if (loadData && loading) {
      $icon = _this2.renderIcon();
    }

    // Title
    var $title = _react2['default'].createElement(
      'span',
      { className: prefixCls + '-title' },
      title
    );

    return _react2['default'].createElement(
      'span',
      {
        ref: _this2.setSelectHandle,
        title: typeof title === 'string' ? title : '',
        className: (0, _classnames2['default'])('' + wrapClass, wrapClass + '-' + (_this2.getNodeState() || 'normal'), !disabled && (selected || dragNodeHighlight) && prefixCls + '-node-selected', !disabled && draggable && 'draggable'),
        draggable: !disabled && draggable || undefined,
        'aria-grabbed': !disabled && draggable || undefined,

        onMouseEnter: _this2.onMouseEnter,
        onMouseLeave: _this2.onMouseLeave,
        onContextMenu: _this2.onContextMenu,
        onClick: _this2.onSelectorClick,
        onDoubleClick: _this2.onSelectorDoubleClick,
        onDragStart: draggable ? _this2.onDragStart : undefined
      },
      $icon,
      $title
    );
  };

  this.renderChildren = function () {
    var _props7 = _this2.props,
        expanded = _props7.expanded,
        pos = _props7.pos;
    var _context$rcTree7 = _this2.context.rcTree,
        prefixCls = _context$rcTree7.prefixCls,
        openTransitionName = _context$rcTree7.openTransitionName,
        openAnimation = _context$rcTree7.openAnimation,
        renderTreeNode = _context$rcTree7.renderTreeNode;


    var animProps = {};
    if (openTransitionName) {
      animProps.transitionName = openTransitionName;
    } else if (typeof openAnimation === 'object') {
      animProps.animation = (0, _extends3['default'])({}, openAnimation);
    }

    // Children TreeNode
    var nodeList = _this2.getNodeChildren();

    if (nodeList.length === 0) {
      return null;
    }

    var $children = void 0;
    if (expanded) {
      $children = _react2['default'].createElement(
        'ul',
        {
          className: (0, _classnames2['default'])(prefixCls + '-child-tree', expanded && prefixCls + '-child-tree-open'),
          'data-expanded': expanded,
          role: 'group'
        },
        (0, _util.mapChildren)(nodeList, function (node, index) {
          return renderTreeNode(node, index, pos);
        })
      );
    }

    return _react2['default'].createElement(
      _rcAnimate2['default'],
      (0, _extends3['default'])({}, animProps, {
        showProp: 'data-expanded',
        component: ''
      }),
      $children
    );
  };
};

TreeNode.isTreeNode = 1;

(0, _reactLifecyclesCompat.polyfill)(TreeNode);

exports['default'] = TreeNode;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/rc-tree/lib/contextTypes.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-tree/lib/contextTypes.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nodeContextTypes = exports.treeContextTypes = undefined;

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Thought we still use `cloneElement` to pass `key`,
 * other props can pass with context for future refactor.
 */
var treeContextTypes = exports.treeContextTypes = {
  rcTree: _propTypes2['default'].shape({
    root: _propTypes2['default'].object,

    prefixCls: _propTypes2['default'].string,
    selectable: _propTypes2['default'].bool,
    showIcon: _propTypes2['default'].bool,
    icon: _propTypes2['default'].oneOfType([_propTypes2['default'].node, _propTypes2['default'].func]),
    draggable: _propTypes2['default'].bool,
    checkable: _propTypes2['default'].oneOfType([_propTypes2['default'].bool, _propTypes2['default'].node]),
    checkStrictly: _propTypes2['default'].bool,
    disabled: _propTypes2['default'].bool,
    openTransitionName: _propTypes2['default'].string,
    openAnimation: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].object]),

    loadData: _propTypes2['default'].func,
    filterTreeNode: _propTypes2['default'].func,
    renderTreeNode: _propTypes2['default'].func,

    isKeyChecked: _propTypes2['default'].func,

    onNodeClick: _propTypes2['default'].func,
    onNodeDoubleClick: _propTypes2['default'].func,
    onNodeExpand: _propTypes2['default'].func,
    onNodeSelect: _propTypes2['default'].func,
    onNodeCheck: _propTypes2['default'].func,
    onNodeMouseEnter: _propTypes2['default'].func,
    onNodeMouseLeave: _propTypes2['default'].func,
    onNodeContextMenu: _propTypes2['default'].func,
    onNodeDragStart: _propTypes2['default'].func,
    onNodeDragEnter: _propTypes2['default'].func,
    onNodeDragOver: _propTypes2['default'].func,
    onNodeDragLeave: _propTypes2['default'].func,
    onNodeDragEnd: _propTypes2['default'].func,
    onNodeDrop: _propTypes2['default'].func

    // TODO: Remove this
    // onBatchNodeCheck: PropTypes.func,
    // onCheckConductFinished: PropTypes.func,

    // Tree will store the entities when the treeNode refresh.
    // User can pass the func to add more info to customize the additional info.
    // processTreeEntity: PropTypes.func,
  })
}; /**
    * Webpack has bug for import loop, which is not the same behavior as ES module.
    * When util.js imports the TreeNode for tree generate will cause treeContextTypes be empty.
    */

var nodeContextTypes = exports.nodeContextTypes = (0, _extends3['default'])({}, treeContextTypes, {
  rcTreeNode: _propTypes2['default'].shape({
    onUpCheckConduct: _propTypes2['default'].func
  })
});

/***/ }),

/***/ "./node_modules/rc-tree/lib/util.js":
/*!******************************************!*\
  !*** ./node_modules/rc-tree/lib/util.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.warnOnlyTreeNode = warnOnlyTreeNode;
exports.arrDel = arrDel;
exports.arrAdd = arrAdd;
exports.posToArr = posToArr;
exports.getPosition = getPosition;
exports.isTreeNode = isTreeNode;
exports.getNodeChildren = getNodeChildren;
exports.isCheckDisabled = isCheckDisabled;
exports.traverseTreeNodes = traverseTreeNodes;
exports.mapChildren = mapChildren;
exports.getDragNodesKeys = getDragNodesKeys;
exports.calcDropPosition = calcDropPosition;
exports.calcSelectedKeys = calcSelectedKeys;
exports.convertDataToTree = convertDataToTree;
exports.convertTreeToEntities = convertTreeToEntities;
exports.parseCheckedKeys = parseCheckedKeys;
exports.conductCheck = conductCheck;
exports.conductExpandParent = conductExpandParent;
exports.getDataAndAria = getDataAndAria;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _toArray = __webpack_require__(/*! rc-util/lib/Children/toArray */ "./node_modules/rc-util/lib/Children/toArray.js");

var _toArray2 = _interopRequireDefault(_toArray);

var _warning = __webpack_require__(/*! warning */ "./node_modules/rc-tree/node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _TreeNode = __webpack_require__(/*! ./TreeNode */ "./node_modules/rc-tree/lib/TreeNode.js");

var _TreeNode2 = _interopRequireDefault(_TreeNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var DRAG_SIDE_RANGE = 0.25;
var DRAG_MIN_GAP = 2;

var onlyTreeNodeWarned = false;

function warnOnlyTreeNode() {
  if (onlyTreeNodeWarned) return;

  onlyTreeNodeWarned = true;
  (0, _warning2['default'])(false, 'Tree only accept TreeNode as children.');
}

function arrDel(list, value) {
  var clone = list.slice();
  var index = clone.indexOf(value);
  if (index >= 0) {
    clone.splice(index, 1);
  }
  return clone;
}

function arrAdd(list, value) {
  var clone = list.slice();
  if (clone.indexOf(value) === -1) {
    clone.push(value);
  }
  return clone;
}

function posToArr(pos) {
  return pos.split('-');
}

function getPosition(level, index) {
  return level + '-' + index;
}

function isTreeNode(node) {
  return node && node.type && node.type.isTreeNode;
}

function getNodeChildren(children) {
  return (0, _toArray2['default'])(children).filter(isTreeNode);
}

function isCheckDisabled(node) {
  var _ref = node.props || {},
      disabled = _ref.disabled,
      disableCheckbox = _ref.disableCheckbox;

  return !!(disabled || disableCheckbox);
}

function traverseTreeNodes(treeNodes, callback) {
  function processNode(node, index, parent) {
    var children = node ? node.props.children : treeNodes;
    var pos = node ? getPosition(parent.pos, index) : 0;

    // Filter children
    var childList = getNodeChildren(children);

    // Process node if is not root
    if (node) {
      var data = {
        node: node,
        index: index,
        pos: pos,
        key: node.key || pos,
        parentPos: parent.node ? parent.pos : null
      };

      callback(data);
    }

    // Process children node
    _react.Children.forEach(childList, function (subNode, subIndex) {
      processNode(subNode, subIndex, { node: node, pos: pos });
    });
  }

  processNode(null);
}

/**
 * Use `rc-util` `toArray` to get the children list which keeps the key.
 * And return single node if children is only one(This can avoid `key` missing check).
 */
function mapChildren(children, func) {
  var list = (0, _toArray2['default'])(children).map(func);
  if (list.length === 1) {
    return list[0];
  }
  return list;
}

function getDragNodesKeys(treeNodes, node) {
  var _node$props = node.props,
      eventKey = _node$props.eventKey,
      pos = _node$props.pos;

  var dragNodesKeys = [];

  traverseTreeNodes(treeNodes, function (_ref2) {
    var key = _ref2.key;

    dragNodesKeys.push(key);
  });
  dragNodesKeys.push(eventKey || pos);
  return dragNodesKeys;
}

// Only used when drag, not affect SSR.
function calcDropPosition(event, treeNode) {
  var clientY = event.clientY;

  var _treeNode$selectHandl = treeNode.selectHandle.getBoundingClientRect(),
      top = _treeNode$selectHandl.top,
      bottom = _treeNode$selectHandl.bottom,
      height = _treeNode$selectHandl.height;

  var des = Math.max(height * DRAG_SIDE_RANGE, DRAG_MIN_GAP);

  if (clientY <= top + des) {
    return -1;
  } else if (clientY >= bottom - des) {
    return 1;
  }

  return 0;
}

/**
 * Return selectedKeys according with multiple prop
 * @param selectedKeys
 * @param props
 * @returns [string]
 */
function calcSelectedKeys(selectedKeys, props) {
  if (!selectedKeys) return undefined;

  var multiple = props.multiple;

  if (multiple) {
    return selectedKeys.slice();
  }

  if (selectedKeys.length) {
    return [selectedKeys[0]];
  }
  return selectedKeys;
}

/**
 * Since React internal will convert key to string,
 * we need do this to avoid `checkStrictly` use number match
 */
function keyListToString(keyList) {
  if (!keyList) return keyList;
  return keyList.map(function (key) {
    return String(key);
  });
}

var internalProcessProps = function internalProcessProps(props) {
  return props;
};
function convertDataToTree(treeData, processer) {
  if (!treeData) return [];

  var _ref3 = processer || {},
      _ref3$processProps = _ref3.processProps,
      processProps = _ref3$processProps === undefined ? internalProcessProps : _ref3$processProps;

  var list = Array.isArray(treeData) ? treeData : [treeData];
  return list.map(function (_ref4) {
    var children = _ref4.children,
        props = (0, _objectWithoutProperties3['default'])(_ref4, ['children']);

    var childrenNodes = convertDataToTree(children, processer);

    return _react2['default'].createElement(
      _TreeNode2['default'],
      processProps(props),
      childrenNodes
    );
  });
}

// TODO: ========================= NEW LOGIC =========================
/**
 * Calculate treeNodes entities. `processTreeEntity` is used for `rc-tree-select`
 * @param treeNodes
 * @param processTreeEntity  User can customize the entity
 */
function convertTreeToEntities(treeNodes) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      initWrapper = _ref5.initWrapper,
      processEntity = _ref5.processEntity,
      onProcessFinished = _ref5.onProcessFinished;

  var posEntities = {};
  var keyEntities = {};
  var wrapper = {
    posEntities: posEntities,
    keyEntities: keyEntities
  };

  if (initWrapper) {
    wrapper = initWrapper(wrapper) || wrapper;
  }

  traverseTreeNodes(treeNodes, function (item) {
    var node = item.node,
        index = item.index,
        pos = item.pos,
        key = item.key,
        parentPos = item.parentPos;

    var entity = { node: node, index: index, key: key, pos: pos };

    posEntities[pos] = entity;
    keyEntities[key] = entity;

    // Fill children
    entity.parent = posEntities[parentPos];
    if (entity.parent) {
      entity.parent.children = entity.parent.children || [];
      entity.parent.children.push(entity);
    }

    if (processEntity) {
      processEntity(entity, wrapper);
    }
  });

  if (onProcessFinished) {
    onProcessFinished(wrapper);
  }

  return wrapper;
}

/**
 * Parse `checkedKeys` to { checkedKeys, halfCheckedKeys } style
 */
function parseCheckedKeys(keys) {
  if (!keys) {
    return null;
  }

  // Convert keys to object format
  var keyProps = void 0;
  if (Array.isArray(keys)) {
    // [Legacy] Follow the api doc
    keyProps = {
      checkedKeys: keys,
      halfCheckedKeys: undefined
    };
  } else if (typeof keys === 'object') {
    keyProps = {
      checkedKeys: keys.checked || undefined,
      halfCheckedKeys: keys.halfChecked || undefined
    };
  } else {
    (0, _warning2['default'])(false, '`checkedKeys` is not an array or an object');
    return null;
  }

  keyProps.checkedKeys = keyListToString(keyProps.checkedKeys);
  keyProps.halfCheckedKeys = keyListToString(keyProps.halfCheckedKeys);

  return keyProps;
}

/**
 * Conduct check state by the keyList. It will conduct up & from the provided key.
 * If the conduct path reach the disabled or already checked / unchecked node will stop conduct.
 * @param keyList       list of keys
 * @param isCheck       is check the node or not
 * @param keyEntities   parsed by `convertTreeToEntities` function in Tree
 * @param checkStatus   Can pass current checked status for process (usually for uncheck operation)
 * @returns {{checkedKeys: [], halfCheckedKeys: []}}
 */
function conductCheck(keyList, isCheck, keyEntities) {
  var checkStatus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var checkedKeys = {};
  var halfCheckedKeys = {}; // Record the key has some child checked (include child half checked)

  (checkStatus.checkedKeys || []).forEach(function (key) {
    checkedKeys[key] = true;
  });

  (checkStatus.halfCheckedKeys || []).forEach(function (key) {
    halfCheckedKeys[key] = true;
  });

  // Conduct up
  function conductUp(key) {
    if (checkedKeys[key] === isCheck) return;

    var entity = keyEntities[key];
    if (!entity) return;

    var children = entity.children,
        parent = entity.parent,
        node = entity.node;


    if (isCheckDisabled(node)) return;

    // Check child node checked status
    var everyChildChecked = true;
    var someChildChecked = false; // Child checked or half checked

    (children || []).filter(function (child) {
      return !isCheckDisabled(child.node);
    }).forEach(function (_ref6) {
      var childKey = _ref6.key;

      var childChecked = checkedKeys[childKey];
      var childHalfChecked = halfCheckedKeys[childKey];

      if (childChecked || childHalfChecked) someChildChecked = true;
      if (!childChecked) everyChildChecked = false;
    });

    // Update checked status
    if (isCheck) {
      checkedKeys[key] = everyChildChecked;
    } else {
      checkedKeys[key] = false;
    }
    halfCheckedKeys[key] = someChildChecked;

    if (parent) {
      conductUp(parent.key);
    }
  }

  // Conduct down
  function conductDown(key) {
    if (checkedKeys[key] === isCheck) return;

    var entity = keyEntities[key];
    if (!entity) return;

    var children = entity.children,
        node = entity.node;


    if (isCheckDisabled(node)) return;

    checkedKeys[key] = isCheck;

    (children || []).forEach(function (child) {
      conductDown(child.key);
    });
  }

  function conduct(key) {
    var entity = keyEntities[key];

    if (!entity) {
      (0, _warning2['default'])(false, '\'' + key + '\' does not exist in the tree.');
      return;
    }

    var children = entity.children,
        parent = entity.parent,
        node = entity.node;

    checkedKeys[key] = isCheck;

    if (isCheckDisabled(node)) return;

    // Conduct down
    (children || []).filter(function (child) {
      return !isCheckDisabled(child.node);
    }).forEach(function (child) {
      conductDown(child.key);
    });

    // Conduct up
    if (parent) {
      conductUp(parent.key);
    }
  }

  (keyList || []).forEach(function (key) {
    conduct(key);
  });

  var checkedKeyList = [];
  var halfCheckedKeyList = [];

  // Fill checked list
  Object.keys(checkedKeys).forEach(function (key) {
    if (checkedKeys[key]) {
      checkedKeyList.push(key);
    }
  });

  // Fill half checked list
  Object.keys(halfCheckedKeys).forEach(function (key) {
    if (!checkedKeys[key] && halfCheckedKeys[key]) {
      halfCheckedKeyList.push(key);
    }
  });

  return {
    checkedKeys: checkedKeyList,
    halfCheckedKeys: halfCheckedKeyList
  };
}

/**
 * If user use `autoExpandParent` we should get the list of parent node
 * @param keyList
 * @param keyEntities
 */
function conductExpandParent(keyList, keyEntities) {
  var expandedKeys = {};

  function conductUp(key) {
    if (expandedKeys[key]) return;

    var entity = keyEntities[key];
    if (!entity) return;

    expandedKeys[key] = true;

    var parent = entity.parent,
        node = entity.node;


    if (isCheckDisabled(node)) return;

    if (parent) {
      conductUp(parent.key);
    }
  }

  (keyList || []).forEach(function (key) {
    conductUp(key);
  });

  return Object.keys(expandedKeys);
}

/**
 * Returns only the data- and aria- key/value pairs
 * @param {object} props 
 */
function getDataAndAria(props) {
  return Object.keys(props).reduce(function (prev, key) {
    if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-') {
      prev[key] = props[key];
    }
    return prev;
  }, {});
}

/***/ }),

/***/ "./node_modules/rc-tree/node_modules/rc-animate/es/Animate.js":
/*!********************************************************************!*\
  !*** ./node_modules/rc-tree/node_modules/rc-animate/es/Animate.js ***!
  \********************************************************************/
/*! exports provided: genAnimate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genAnimate", function() { return genAnimate; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-util/es/Children/toArray */ "./node_modules/rc-util/es/Children/toArray.js");
/* harmony import */ var fbjs_lib_warning__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! fbjs/lib/warning */ "./node_modules/fbjs/lib/warning.js");
/* harmony import */ var fbjs_lib_warning__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_warning__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _AnimateChild__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AnimateChild */ "./node_modules/rc-tree/node_modules/rc-animate/es/AnimateChild.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./util */ "./node_modules/rc-tree/node_modules/rc-animate/es/util.js");














var defaultKey = 'rc_animate_' + Date.now();
var clonePropList = ['children'];

/**
 * Default use `AnimateChild` as component.
 * Here can also pass customize `ChildComponent` for test usage.
 */
function genAnimate(ChildComponent) {
  var Animate = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Animate, _React$Component);

    function Animate() {
      var _ref;

      var _temp, _this, _ret;

      babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Animate);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_ref = Animate.__proto__ || Object.getPrototypeOf(Animate)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        appeared: true,
        mergedChildren: []
      }, _this.onChildLeaved = function (key) {
        // Remove child which not exist anymore
        if (!_this.hasChild(key)) {
          var mergedChildren = _this.state.mergedChildren;

          _this.setState({
            mergedChildren: mergedChildren.filter(function (node) {
              return node.key !== key;
            })
          });
        }
      }, _this.hasChild = function (key) {
        var children = _this.props.children;


        return Object(rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_8__["default"])(children).some(function (node) {
          return node && node.key === key;
        });
      }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(_this, _ret);
    }
    // [Legacy] Not sure usage
    // commit: https://github.com/react-component/animate/commit/0a1cbfd647407498b10a8c6602a2dea80b42e324
    // eslint-disable-line

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Animate, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        // No need to re-render
        this.state.appeared = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _state = this.state,
            appeared = _state.appeared,
            mergedChildren = _state.mergedChildren;
        var _props = this.props,
            Component = _props.component,
            componentProps = _props.componentProps,
            className = _props.className,
            style = _props.style,
            showProp = _props.showProp;


        var $children = mergedChildren.map(function (node) {
          if (mergedChildren.length > 1 && !node.key) {
            fbjs_lib_warning__WEBPACK_IMPORTED_MODULE_9___default()(false, 'must set key for <rc-animate> children');
            return null;
          }

          var show = true;

          if (!_this2.hasChild(node.key)) {
            show = false;
          } else if (showProp) {
            show = node.props[showProp];
          }

          var key = node.key || defaultKey;

          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            ChildComponent,
            babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _this2.props, {
              appeared: appeared,
              show: show,
              className: node.props.className,
              style: node.props.style,
              key: key,

              animateKey: node.key // Keep trans origin key
              , onChildLeaved: _this2.onChildLeaved
            }),
            node
          );
        });

        // Wrap with component
        if (Component) {
          var passedProps = this.props;
          if (typeof Component === 'string') {
            passedProps = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
              className: className,
              style: style
            }, componentProps);
          }

          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            Component,
            passedProps,
            $children
          );
        }

        return $children[0] || null;
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, prevState) {
        var _prevState$prevProps = prevState.prevProps,
            prevProps = _prevState$prevProps === undefined ? {} : _prevState$prevProps;

        var newState = {
          prevProps: Object(_util__WEBPACK_IMPORTED_MODULE_11__["cloneProps"])(nextProps, clonePropList)
        };
        var showProp = nextProps.showProp;


        function processState(propName, updater) {
          if (prevProps[propName] !== nextProps[propName]) {
            updater(nextProps[propName]);
            return true;
          }
          return false;
        }

        processState('children', function (children) {
          var currentChildren = Object(rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_8__["default"])(children).filter(function (node) {
            return node;
          });
          var prevChildren = prevState.mergedChildren.filter(function (node) {
            // Remove prev child if not show anymore
            if (currentChildren.every(function (_ref2) {
              var key = _ref2.key;
              return key !== node.key;
            }) && showProp && !node.props[showProp]) {
              return false;
            }
            return true;
          });

          // Merge prev children to keep the animation
          newState.mergedChildren = Object(_util__WEBPACK_IMPORTED_MODULE_11__["mergeChildren"])(prevChildren, currentChildren);
        });

        return newState;
      }
    }]);

    return Animate;
  }(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

  Animate.isAnimate = true;
  Animate.propTypes = {
    component: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
    componentProps: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
    animation: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
    transitionName: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object]),
    transitionEnter: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
    transitionAppear: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
    exclusive: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
    transitionLeave: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
    onEnd: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
    onEnter: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
    onLeave: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
    onAppear: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
    showProp: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
    children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node,
    style: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
    className: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string
  };
  Animate.defaultProps = {
    animation: {},
    component: 'span',
    componentProps: {},
    transitionEnter: true,
    transitionLeave: true,
    transitionAppear: false
  };


  Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_7__["polyfill"])(Animate);

  return Animate;
}

/* harmony default export */ __webpack_exports__["default"] = (genAnimate(_AnimateChild__WEBPACK_IMPORTED_MODULE_10__["default"]));

/***/ }),

/***/ "./node_modules/rc-tree/node_modules/rc-animate/es/AnimateChild.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rc-tree/node_modules/rc-animate/es/AnimateChild.js ***!
  \*************************************************************************/
/*! exports provided: genAnimateChild, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genAnimateChild", function() { return genAnimateChild; });
/* harmony import */ var babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/toArray */ "./node_modules/babel-runtime/helpers/toArray.js");
/* harmony import */ var babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var component_classes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! component-classes */ "./node_modules/component-classes/index.js");
/* harmony import */ var component_classes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(component_classes__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! raf */ "./node_modules/raf/index.js");
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(raf__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./util */ "./node_modules/rc-tree/node_modules/rc-animate/es/util.js");















var clonePropList = ['appeared', 'show', 'exclusive', 'children', 'animation'];

/**
 * AnimateChild only accept one child node.
 * `transitionSupport` is used for none transition test case.
 * Default we use browser transition event support check.
 */
function genAnimateChild(transitionSupport) {
  var AnimateChild = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(AnimateChild, _React$Component);

    function AnimateChild() {
      babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, AnimateChild);

      // [Legacy] Since old code addListener on the element.
      // To avoid break the behaviour that component not handle animation/transition
      // also can handle the animate, let keep the logic.
      var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (AnimateChild.__proto__ || Object.getPrototypeOf(AnimateChild)).call(this));

      _this.state = {
        child: null,

        eventQueue: [],
        eventActive: false
      };

      _this.onDomUpdated = function () {
        var eventActive = _this.state.eventActive;
        var _this$props = _this.props,
            transitionName = _this$props.transitionName,
            animation = _this$props.animation,
            onChildLeaved = _this$props.onChildLeaved,
            animateKey = _this$props.animateKey;


        var $ele = _this.getDomElement();

        // Skip if dom element not ready
        if (!$ele) return;

        // [Legacy] Add animation/transition event by dom level
        if (transitionSupport && _this.$prevEle !== $ele) {
          _this.cleanDomEvent();

          _this.$prevEle = $ele;
          _this.$prevEle.addEventListener(_util__WEBPACK_IMPORTED_MODULE_12__["animationEndName"], _this.onMotionEnd);
          _this.$prevEle.addEventListener(_util__WEBPACK_IMPORTED_MODULE_12__["transitionEndName"], _this.onMotionEnd);
        }

        var currentEvent = _this.getCurrentEvent();
        if (currentEvent.empty) {
          // Additional process the leave event
          if (currentEvent.lastEventType === 'leave') {
            onChildLeaved(animateKey);
          }
          return;
        }

        var eventType = currentEvent.eventType,
            restQueue = currentEvent.restQueue;

        var nodeClasses = component_classes__WEBPACK_IMPORTED_MODULE_10___default()($ele);

        // [Legacy] Since origin code use js to set `className`.
        // This caused that any component without support `className` can be forced set.
        // Let's keep the logic.
        function legacyAppendClass() {
          if (!transitionSupport) return;

          var basicClassName = Object(_util__WEBPACK_IMPORTED_MODULE_12__["getTransitionName"])(transitionName, '' + eventType);
          if (basicClassName) nodeClasses.add(basicClassName);

          if (eventActive) {
            var activeClassName = Object(_util__WEBPACK_IMPORTED_MODULE_12__["getTransitionName"])(transitionName, eventType + '-active');
            if (activeClassName) nodeClasses.add(activeClassName);
          }
        }

        if (_this.currentEvent && _this.currentEvent.type === eventType) {
          legacyAppendClass();
          return;
        }

        // Clear timeout for legacy check
        clearTimeout(_this.timeout);

        // Clean up last event environment
        if (_this.currentEvent && _this.currentEvent.animateObj && _this.currentEvent.animateObj.stop) {
          _this.currentEvent.animateObj.stop();
        }

        // Clean up last transition class
        if (_this.currentEvent) {
          var basicClassName = Object(_util__WEBPACK_IMPORTED_MODULE_12__["getTransitionName"])(transitionName, '' + _this.currentEvent.type);
          var activeClassName = Object(_util__WEBPACK_IMPORTED_MODULE_12__["getTransitionName"])(transitionName, _this.currentEvent.type + '-active');
          if (basicClassName) nodeClasses.remove(basicClassName);
          if (activeClassName) nodeClasses.remove(activeClassName);
        }

        // New event come
        _this.currentEvent = {
          type: eventType
        };

        var animationHandler = (animation || {})[eventType];
        // =============== Check if has customize animation ===============
        if (animationHandler) {
          _this.currentEvent.animateObj = animationHandler($ele, function () {
            _this.onMotionEnd({ target: $ele });
          });

          // Do next step if not animate object provided
          if (!_this.currentEvent || !_this.currentEvent.animateObj) {
            _this.nextEvent(restQueue);
          }

          // ==================== Use transition instead ====================
        } else if (transitionSupport) {
          legacyAppendClass();
          if (!eventActive) {
            // Trigger `eventActive` in next frame
            raf__WEBPACK_IMPORTED_MODULE_11___default()(function () {
              if (_this.currentEvent && _this.currentEvent.type === eventType && !_this._destroy) {
                _this.setState({ eventActive: true }, function () {
                  // [Legacy] Handle timeout if browser transition event not handle
                  var transitionDelay = Object(_util__WEBPACK_IMPORTED_MODULE_12__["getStyleValue"])($ele, 'transition-delay') || 0;
                  var transitionDuration = Object(_util__WEBPACK_IMPORTED_MODULE_12__["getStyleValue"])($ele, 'transition-duration') || 0;
                  var animationDelay = Object(_util__WEBPACK_IMPORTED_MODULE_12__["getStyleValue"])($ele, 'animation-delay') || 0;
                  var animationDuration = Object(_util__WEBPACK_IMPORTED_MODULE_12__["getStyleValue"])($ele, 'animation-duration') || 0;
                  var totalTime = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);

                  if (totalTime >= 0) {
                    _this.timeout = setTimeout(function () {
                      _this.onMotionEnd({ target: $ele });
                    }, totalTime * 1000);
                  }
                });
              }
            });
          }

          // ======================= Just next action =======================
        } else {
          _this.onMotionEnd({ target: $ele });
        }
      };

      _this.onMotionEnd = function (_ref) {
        var target = _ref.target;
        var _this$props2 = _this.props,
            transitionName = _this$props2.transitionName,
            onChildLeaved = _this$props2.onChildLeaved,
            animateKey = _this$props2.animateKey,
            onAppear = _this$props2.onAppear,
            onEnter = _this$props2.onEnter,
            onLeave = _this$props2.onLeave,
            onEnd = _this$props2.onEnd;

        var currentEvent = _this.getCurrentEvent();
        if (currentEvent.empty) return;

        // Clear timeout for legacy check
        clearTimeout(_this.timeout);

        var restQueue = currentEvent.restQueue;


        var $ele = _this.getDomElement();
        if (!_this.currentEvent || $ele !== target) return;

        if (_this.currentEvent.animateObj && _this.currentEvent.animateObj.stop) {
          _this.currentEvent.animateObj.stop();
        }

        // [Legacy] Same as above, we need call js to remove the class
        if (transitionSupport && _this.currentEvent) {
          var basicClassName = Object(_util__WEBPACK_IMPORTED_MODULE_12__["getTransitionName"])(transitionName, _this.currentEvent.type);
          var activeClassName = Object(_util__WEBPACK_IMPORTED_MODULE_12__["getTransitionName"])(transitionName, _this.currentEvent.type + '-active');

          var nodeClasses = component_classes__WEBPACK_IMPORTED_MODULE_10___default()($ele);
          if (basicClassName) nodeClasses.remove(basicClassName);
          if (activeClassName) nodeClasses.remove(activeClassName);
        }

        // Additional process the leave event
        if (_this.currentEvent && _this.currentEvent.type === 'leave') {
          onChildLeaved(animateKey);
        }

        // [Legacy] Trigger on event when it's last event
        if (_this.currentEvent && !restQueue.length) {
          if (_this.currentEvent.type === 'appear' && onAppear) {
            onAppear(animateKey);
          } else if (_this.currentEvent.type === 'enter' && onEnter) {
            onEnter(animateKey);
          } else if (_this.currentEvent.type === 'leave' && onLeave) {
            onLeave(animateKey);
          }

          if (onEnd) {
            // OnEnd(key, isShow)
            onEnd(animateKey, _this.currentEvent.type !== 'leave');
          }
        }

        _this.currentEvent = null;

        // Next queue
        _this.nextEvent(restQueue);
      };

      _this.getDomElement = function () {
        if (_this._destroy) return null;
        return react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.findDOMNode(_this);
      };

      _this.getCurrentEvent = function () {
        var _this$state$eventQueu = _this.state.eventQueue,
            eventQueue = _this$state$eventQueu === undefined ? [] : _this$state$eventQueu;
        var _this$props3 = _this.props,
            animation = _this$props3.animation,
            exclusive = _this$props3.exclusive,
            transitionAppear = _this$props3.transitionAppear,
            transitionEnter = _this$props3.transitionEnter,
            transitionLeave = _this$props3.transitionLeave;


        function hasEventHandler(eventType) {
          return eventType === 'appear' && (transitionAppear || animation.appear) || eventType === 'enter' && (transitionEnter || animation.enter) || eventType === 'leave' && (transitionLeave || animation.leave);
        }

        var event = null;
        // If is exclusive, only check the last event
        if (exclusive) {
          var eventType = eventQueue[eventQueue.length - 1];
          if (hasEventHandler(eventType)) {
            event = {
              eventType: eventType,
              restQueue: []
            };
          }
        } else {
          // Loop check the queue until find match
          var cloneQueue = eventQueue.slice();
          while (cloneQueue.length) {
            var _cloneQueue = cloneQueue,
                _cloneQueue2 = babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0___default()(_cloneQueue),
                _eventType = _cloneQueue2[0],
                restQueue = _cloneQueue2.slice(1);

            if (hasEventHandler(_eventType)) {
              event = {
                eventType: _eventType,
                restQueue: restQueue
              };
              break;
            }
            cloneQueue = restQueue;
          }
        }

        if (!event) {
          event = {
            empty: true,
            lastEventType: eventQueue[eventQueue.length - 1]
          };
        }

        return event;
      };

      _this.nextEvent = function (restQueue) {
        // Next queue
        if (!_this._destroy) {
          _this.setState({
            eventQueue: restQueue,
            eventActive: false
          });
        }
      };

      _this.cleanDomEvent = function () {
        if (_this.$prevEle && transitionSupport) {
          _this.$prevEle.removeEventListener(_util__WEBPACK_IMPORTED_MODULE_12__["animationEndName"], _this.onMotionEnd);
          _this.$prevEle.removeEventListener(_util__WEBPACK_IMPORTED_MODULE_12__["transitionEndName"], _this.onMotionEnd);
        }
      };

      _this.$prevEle = null;

      _this.currentEvent = null;
      _this.timeout = null;
      return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(AnimateChild, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.onDomUpdated();
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.onDomUpdated();
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        clearTimeout(this.timeout);
        this._destroy = true;
        this.cleanDomEvent();
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            child = _state.child,
            eventActive = _state.eventActive;
        var _props = this.props,
            showProp = _props.showProp,
            transitionName = _props.transitionName;

        var _ref2 = child.props || {},
            className = _ref2.className;

        var currentEvent = this.getCurrentEvent();

        // Class name
        var connectClassName = transitionSupport && this.currentEvent ? classnames__WEBPACK_IMPORTED_MODULE_9___default()(className, Object(_util__WEBPACK_IMPORTED_MODULE_12__["getTransitionName"])(transitionName, this.currentEvent.type), eventActive && Object(_util__WEBPACK_IMPORTED_MODULE_12__["getTransitionName"])(transitionName, this.currentEvent.type + '-active')) : className;

        var show = true;

        // Keep show when is in transition or has customize animate
        if (transitionSupport && (!currentEvent.empty || this.currentEvent && this.currentEvent.animateObj)) {
          show = true;
        } else {
          show = child.props[showProp];
        }

        // Clone child
        var newChildProps = {
          className: connectClassName
        };

        if (showProp) {
          newChildProps[showProp] = show;
        }

        return react__WEBPACK_IMPORTED_MODULE_5___default.a.cloneElement(child, newChildProps);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, prevState) {
        var _prevState$prevProps = prevState.prevProps,
            prevProps = _prevState$prevProps === undefined ? {} : _prevState$prevProps;
        var appeared = nextProps.appeared;


        var newState = {
          prevProps: Object(_util__WEBPACK_IMPORTED_MODULE_12__["cloneProps"])(nextProps, clonePropList)
        };

        function processState(propName, updater) {
          if (prevProps[propName] !== nextProps[propName]) {
            if (updater) {
              updater(nextProps[propName]);
            }
            return true;
          }
          return false;
        }

        function pushEvent(eventType) {
          var eventQueue = newState.eventQueue || prevState.eventQueue.slice();
          var matchIndex = eventQueue.indexOf(eventType);

          // Clean the rest event if eventType match
          if (matchIndex !== -1) {
            eventQueue = eventQueue.slice(0, matchIndex);
          }

          eventQueue.push(eventType);
          newState.eventQueue = eventQueue;
        }

        // Child update. Only set child.
        processState('children', function (child) {
          newState.child = child;
        });

        processState('appeared', function (isAppeared) {
          if (isAppeared) {
            pushEvent('appear');
          }
        });

        // Show update
        processState('show', function (show) {
          if (!appeared) {
            if (show) {
              pushEvent('enter');
            } else {
              pushEvent('leave');
            }
          }
        });

        return newState;
      }
    }]);

    return AnimateChild;
  }(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

  AnimateChild.propTypes = {
    transitionName: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object]),
    transitionAppear: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
    transitionEnter: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
    transitionLeave: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
    exclusive: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
    appeared: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
    showProp: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,

    animateKey: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,
    animation: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
    onChildLeaved: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,

    onEnd: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
    onAppear: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
    onEnter: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
    onLeave: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func
  };


  Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_8__["polyfill"])(AnimateChild);

  return AnimateChild;
}

/* harmony default export */ __webpack_exports__["default"] = (genAnimateChild(_util__WEBPACK_IMPORTED_MODULE_12__["supportTransition"]));

/***/ }),

/***/ "./node_modules/rc-tree/node_modules/rc-animate/es/CSSMotion.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rc-tree/node_modules/rc-animate/es/CSSMotion.js ***!
  \**********************************************************************/
/*! exports provided: genCSSMotion, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genCSSMotion", function() { return genCSSMotion; });
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! raf */ "./node_modules/raf/index.js");
/* harmony import */ var raf__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(raf__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./util */ "./node_modules/rc-tree/node_modules/rc-animate/es/util.js");














var STATUS_NONE = 'none';
var STATUS_APPEAR = 'appear';
var STATUS_ENTER = 'enter';
var STATUS_LEAVE = 'leave';

/**
 * `transitionSupport` is used for none transition test case.
 * Default we use browser transition event support check.
 */
function genCSSMotion(transitionSupport) {
  var CSSMotion = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(CSSMotion, _React$Component);

    function CSSMotion() {
      babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, CSSMotion);

      var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (CSSMotion.__proto__ || Object.getPrototypeOf(CSSMotion)).call(this));

      _this.onDomUpdate = function () {
        var _this$state = _this.state,
            status = _this$state.status,
            newStatus = _this$state.newStatus;
        var _this$props = _this.props,
            onAppearStart = _this$props.onAppearStart,
            onEnterStart = _this$props.onEnterStart,
            onLeaveStart = _this$props.onLeaveStart,
            onAppearActive = _this$props.onAppearActive,
            onEnterActive = _this$props.onEnterActive,
            onLeaveActive = _this$props.onLeaveActive,
            motionAppear = _this$props.motionAppear,
            motionEnter = _this$props.motionEnter,
            motionLeave = _this$props.motionLeave;


        if (!transitionSupport) {
          return;
        }

        // Event injection
        var $ele = react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.findDOMNode(_this);
        if (_this.$ele !== $ele) {
          _this.removeEventListener(_this.$ele);
          _this.addEventListener($ele);
          _this.$ele = $ele;
        }

        // Init status
        if (newStatus && status === STATUS_APPEAR && motionAppear) {
          _this.updateStatus(onAppearStart, null, null, function () {
            _this.updateActiveStatus(onAppearActive, STATUS_APPEAR);
          });
        } else if (newStatus && status === STATUS_ENTER && motionEnter) {
          _this.updateStatus(onEnterStart, null, null, function () {
            _this.updateActiveStatus(onEnterActive, STATUS_ENTER);
          });
        } else if (newStatus && status === STATUS_LEAVE && motionLeave) {
          _this.updateStatus(onLeaveStart, null, null, function () {
            _this.updateActiveStatus(onLeaveActive, STATUS_LEAVE);
          });
        }
      };

      _this.onMotionEnd = function (event) {
        var _this$state2 = _this.state,
            status = _this$state2.status,
            statusActive = _this$state2.statusActive;
        var _this$props2 = _this.props,
            onAppearEnd = _this$props2.onAppearEnd,
            onEnterEnd = _this$props2.onEnterEnd,
            onLeaveEnd = _this$props2.onLeaveEnd;

        if (status === STATUS_APPEAR && statusActive) {
          _this.updateStatus(onAppearEnd, { status: STATUS_NONE }, event);
        } else if (status === STATUS_ENTER && statusActive) {
          _this.updateStatus(onEnterEnd, { status: STATUS_NONE }, event);
        } else if (status === STATUS_LEAVE && statusActive) {
          _this.updateStatus(onLeaveEnd, { status: STATUS_NONE }, event);
        }
      };

      _this.addEventListener = function ($ele) {
        if (!$ele) return;

        $ele.addEventListener(_util__WEBPACK_IMPORTED_MODULE_12__["transitionEndName"], _this.onMotionEnd);
        $ele.addEventListener(_util__WEBPACK_IMPORTED_MODULE_12__["animationEndName"], _this.onMotionEnd);
      };

      _this.removeEventListener = function ($ele) {
        if (!$ele) return;

        $ele.removeEventListener(_util__WEBPACK_IMPORTED_MODULE_12__["transitionEndName"], _this.onMotionEnd);
        $ele.removeEventListener(_util__WEBPACK_IMPORTED_MODULE_12__["animationEndName"], _this.onMotionEnd);
      };

      _this.updateStatus = function (styleFunc, additionalState, event, callback) {
        var statusStyle = styleFunc ? styleFunc(react_dom__WEBPACK_IMPORTED_MODULE_7___default.a.findDOMNode(_this), event) : null;

        if (statusStyle === false || _this._destroyed) return;

        var nextStep = void 0;
        if (callback) {
          nextStep = function nextStep() {
            _this.nextFrame(callback);
          };
        }

        _this.setState(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
          statusStyle: typeof statusStyle === 'object' ? statusStyle : null,
          newStatus: false
        }, additionalState), nextStep); // Trigger before next frame & after `componentDidMount`
      };

      _this.updateActiveStatus = function (styleFunc, currentStatus) {
        // `setState` use `postMessage` to trigger at the end of frame.
        // Let's use requestAnimationFrame to update new state in next frame.
        _this.nextFrame(function () {
          var status = _this.state.status;

          if (status !== currentStatus) return;

          _this.updateStatus(styleFunc, { statusActive: true });
        });
      };

      _this.nextFrame = function (func) {
        _this.cancelNextFrame();
        _this.raf = raf__WEBPACK_IMPORTED_MODULE_11___default()(func);
      };

      _this.cancelNextFrame = function () {
        if (_this.raf) {
          raf__WEBPACK_IMPORTED_MODULE_11___default.a.cancel(_this.raf);
          _this.raf = null;
        }
      };

      _this.state = {
        status: STATUS_NONE,
        statusActive: false,
        newStatus: false,
        statusStyle: null
      };
      _this.$ele = null;
      _this.raf = null;
      return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(CSSMotion, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.onDomUpdate();
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.onDomUpdate();
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._destroyed = true;
        this.removeEventListener(this.$ele);
        this.cancelNextFrame();
      }
    }, {
      key: 'render',
      value: function render() {
        var _classNames;

        var _state = this.state,
            status = _state.status,
            statusActive = _state.statusActive,
            statusStyle = _state.statusStyle;
        var _props = this.props,
            children = _props.children,
            motionName = _props.motionName,
            visible = _props.visible;


        if (!children) return null;

        if (status === STATUS_NONE || !transitionSupport) {
          return visible ? children({}) : null;
        }

        return children({
          className: classnames__WEBPACK_IMPORTED_MODULE_10___default()((_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, Object(_util__WEBPACK_IMPORTED_MODULE_12__["getTransitionName"])(motionName, status), status !== STATUS_NONE), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, Object(_util__WEBPACK_IMPORTED_MODULE_12__["getTransitionName"])(motionName, status + '-active'), status !== STATUS_NONE && statusActive), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, motionName, typeof motionName === 'string'), _classNames)),
          style: statusStyle
        });
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(props, _ref) {
        var prevProps = _ref.prevProps;

        if (!transitionSupport) return {};

        var visible = props.visible,
            motionAppear = props.motionAppear,
            motionEnter = props.motionEnter,
            motionLeave = props.motionLeave,
            motionLeaveImmediately = props.motionLeaveImmediately;

        var newState = {
          prevProps: props
        };

        // Appear
        if (!prevProps && visible && motionAppear) {
          newState.status = STATUS_APPEAR;
          newState.statusActive = false;
          newState.newStatus = true;
        }

        // Enter
        if (prevProps && !prevProps.visible && visible && motionEnter) {
          newState.status = STATUS_ENTER;
          newState.statusActive = false;
          newState.newStatus = true;
        }

        // Leave
        if (prevProps && prevProps.visible && !visible && motionLeave || !prevProps && motionLeaveImmediately && !visible && motionLeave) {
          newState.status = STATUS_LEAVE;
          newState.statusActive = false;
          newState.newStatus = true;
        }

        return newState;
      }
    }]);

    return CSSMotion;
  }(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

  CSSMotion.propTypes = {
    visible: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
    children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
    motionName: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object]),
    motionAppear: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
    motionEnter: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
    motionLeave: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
    motionLeaveImmediately: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool, // Trigger leave motion immediately
    onAppearStart: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
    onAppearActive: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
    onAppearEnd: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
    onEnterStart: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
    onEnterActive: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
    onEnterEnd: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
    onLeaveStart: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
    onLeaveActive: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
    onLeaveEnd: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func
  };
  CSSMotion.defaultProps = {
    visible: true,
    motionEnter: true,
    motionAppear: true,
    motionLeave: true
  };


  Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_9__["polyfill"])(CSSMotion);

  return CSSMotion;
}

/* harmony default export */ __webpack_exports__["default"] = (genCSSMotion(_util__WEBPACK_IMPORTED_MODULE_12__["supportTransition"]));

/***/ }),

/***/ "./node_modules/rc-tree/node_modules/rc-animate/es/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/rc-tree/node_modules/rc-animate/es/index.js ***!
  \******************************************************************/
/*! exports provided: AnimateChild, CSSMotion, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animate */ "./node_modules/rc-tree/node_modules/rc-animate/es/Animate.js");
/* harmony import */ var _AnimateChild__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimateChild */ "./node_modules/rc-tree/node_modules/rc-animate/es/AnimateChild.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimateChild", function() { return _AnimateChild__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _CSSMotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CSSMotion */ "./node_modules/rc-tree/node_modules/rc-animate/es/CSSMotion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSMotion", function() { return _CSSMotion__WEBPACK_IMPORTED_MODULE_2__["default"]; });







/* harmony default export */ __webpack_exports__["default"] = (_Animate__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/rc-tree/node_modules/rc-animate/es/util.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rc-tree/node_modules/rc-animate/es/util.js ***!
  \*****************************************************************/
/*! exports provided: getStyleProperty, getStyleValue, getVendorPrefixes, getVendorPrefixedEventName, animationEndName, transitionEndName, supportTransition, mergeChildren, cloneProps, getTransitionName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyleProperty", function() { return getStyleProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyleValue", function() { return getStyleValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVendorPrefixes", function() { return getVendorPrefixes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVendorPrefixedEventName", function() { return getVendorPrefixedEventName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationEndName", function() { return animationEndName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionEndName", function() { return transitionEndName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportTransition", function() { return supportTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeChildren", function() { return mergeChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneProps", function() { return cloneProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransitionName", function() { return getTransitionName; });
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-util/es/Children/toArray */ "./node_modules/rc-util/es/Children/toArray.js");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "./node_modules/fbjs/lib/ExecutionEnvironment.js");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__);



// =================== Style ====================
var stylePrefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];

function getStyleProperty(node, name) {
  // old ff need null, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
  var style = window.getComputedStyle(node, null);
  var ret = '';
  for (var i = 0; i < stylePrefixes.length; i++) {
    ret = style.getPropertyValue(stylePrefixes[i] + name);
    if (ret) {
      break;
    }
  }
  return ret;
}

function getStyleValue(node, name) {
  return parseFloat(getStyleProperty(node, name));
}

// ================= Transition =================
// Event wrapper. Copy from react source code
function makePrefixMap(styleProp, eventName) {
  var prefixes = {};

  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes['Webkit' + styleProp] = 'webkit' + eventName;
  prefixes['Moz' + styleProp] = 'moz' + eventName;
  prefixes['ms' + styleProp] = 'MS' + eventName;
  prefixes['O' + styleProp] = 'o' + eventName.toLowerCase();

  return prefixes;
}

function getVendorPrefixes(domSupport, win) {
  var prefixes = {
    animationend: makePrefixMap('Animation', 'AnimationEnd'),
    transitionend: makePrefixMap('Transition', 'TransitionEnd')
  };

  if (domSupport) {
    if (!('AnimationEvent' in win)) {
      delete prefixes.animationend.animation;
    }

    if (!('TransitionEvent' in win)) {
      delete prefixes.transitionend.transition;
    }
  }

  return prefixes;
}

var vendorPrefixes = getVendorPrefixes(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__["canUseDOM"], typeof window !== 'undefined' ? window : {});

var style = {};

if (fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_1__["canUseDOM"]) {
  style = document.createElement('div').style;
}

var prefixedEventNames = {};

function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) {
    return prefixedEventNames[eventName];
  }

  var prefixMap = vendorPrefixes[eventName];

  if (prefixMap) {
    var stylePropList = Object.keys(prefixMap);
    var len = stylePropList.length;
    for (var i = 0; i < len; i += 1) {
      var styleProp = stylePropList[i];
      if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
        prefixedEventNames[eventName] = prefixMap[styleProp];
        return prefixedEventNames[eventName];
      }
    }
  }

  return '';
}

var animationEndName = getVendorPrefixedEventName('animationend');
var transitionEndName = getVendorPrefixedEventName('transitionend');
var supportTransition = !!(animationEndName && transitionEndName);

// ==================== Node ====================
/**
 * [Legacy] Find the same children in both prev & next list.
 * Insert not find one before the find one, otherwise in the end. For example:
 * - prev: [1,2,3]
 * - next: [2,4]
 * -> [1,2,4,3]
 */
function mergeChildren(prev, next) {
  var prevList = Object(rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prev);
  var nextList = Object(rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_0__["default"])(next);

  // Skip if is single children
  if (prevList.length === 1 && nextList.length === 1 && prevList[0].key === nextList[0].key) {
    return nextList;
  }

  var mergeList = [];
  var nextChildrenMap = {};
  var missMatchChildrenList = [];

  // Fill matched prev node into next node map
  prevList.forEach(function (prevNode) {
    if (prevNode && nextList.some(function (_ref) {
      var key = _ref.key;
      return key === prevNode.key;
    })) {
      if (missMatchChildrenList.length) {
        nextChildrenMap[prevNode.key] = missMatchChildrenList;
        missMatchChildrenList = [];
      }
    } else {
      missMatchChildrenList.push(prevNode);
    }
  });

  // Insert prev node before the matched next node
  nextList.forEach(function (nextNode) {
    if (nextNode && nextChildrenMap[nextNode.key]) {
      mergeList = mergeList.concat(nextChildrenMap[nextNode.key]);
    }
    mergeList.push(nextNode);
  });

  mergeList = mergeList.concat(missMatchChildrenList);

  return mergeList;
}

function cloneProps(props, propList) {
  var newProps = {};
  propList.forEach(function (prop) {
    if (prop in props) {
      newProps[prop] = props[prop];
    }
  });

  return newProps;
}

function getTransitionName(transitionName, transitionType) {
  if (!transitionName) return null;

  if (typeof transitionName === 'object') {
    var type = transitionType.replace(/-\w/g, function (match) {
      return match[1].toUpperCase();
    });
    return transitionName[type];
  }

  return transitionName + '-' + transitionType;
}

/***/ }),

/***/ "./node_modules/rc-tree/node_modules/warning/browser.js":
/*!**************************************************************!*\
  !*** ./node_modules/rc-tree/node_modules/warning/browser.js ***!
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

/***/ "./node_modules/rc-util/es/Children/toArray.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-util/es/Children/toArray.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toArray; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function toArray(children) {
  var ret = [];
  react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.forEach(children, function (c) {
    ret.push(c);
  });
  return ret;
}

/***/ }),

/***/ "./node_modules/rc-util/lib/Children/toArray.js":
/*!******************************************************!*\
  !*** ./node_modules/rc-util/lib/Children/toArray.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = toArray;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function toArray(children) {
  var ret = [];
  _react2['default'].Children.forEach(children, function (c) {
    ret.push(c);
  });
  return ret;
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
/* harmony import */ var _components_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/tree */ "./components/tree.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.css */ "./pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_6__);

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
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "index-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_carousel__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "index-content-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "content-side-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, [1, 2, 3, 4, 5, 6, 7, 8].map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_card__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "content-side-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
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
//# sourceMappingURL=index.js.bc7c3aac93b612b8bd9c.hot-update.js.map