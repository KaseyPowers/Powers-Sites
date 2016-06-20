webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _App = __webpack_require__(168);

	var _App2 = _interopRequireDefault(_App);

	__webpack_require__(242);

	__webpack_require__(243);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import whats needed


	var root = document.createElement('div'); // Core components

	document.body.appendChild(root);

	(0, _reactDom.render)(_react2.default.createElement(_App2.default, null), root);

/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(1);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _reactRouter = __webpack_require__(169);

	var _reactAddonsCssTransitionGroup = __webpack_require__(230);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _NavComponents = __webpack_require__(237);

	var _NavComponents2 = _interopRequireDefault(_NavComponents);

	var _underConstruction = __webpack_require__(239);

	var _underConstruction2 = _interopRequireDefault(_underConstruction);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var startingNavHeight = 150;

	var WeddingApp = _react2.default.createClass({
	  displayName: 'WeddingApp',

	  resizeEventHandler: function resizeEventHandler() {
	    var navHeightChange = 0;
	    var headerChanged = false;
	    if (this.state.navRef) {
	      navHeightChange = this.state.navRef.offsetHeight - this.state.headerHeight;
	      headerChanged = navHeightChange !== 0;
	    }
	    if (headerChanged) {
	      this.setState({
	        headerHeight: this.state.headerHeight + navHeightChange
	      });
	    }
	  },
	  getInitialState: function getInitialState() {
	    return {
	      headerHeight: startingNavHeight,
	      sections: {}
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    window.addEventListener('resize', this.resizeEventHandler);
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    window.removeEventListener('resize', this.resizeEventHandler);
	  },
	  setNavRef: function setNavRef(navRef) {
	    this.setState({
	      navRef: navRef,
	      headerHeight: navRef.offsetHeight
	    });
	  },
	  render: function render() {
	    var mainStyle = {
	      marginTop: this.state.navRef ? this.state.navRef.offsetHeight : this.state.headerHeight
	    };
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_NavComponents2.default, { setNavRef: this.setNavRef }),
	      _react2.default.createElement(
	        'div',
	        { style: mainStyle },
	        _react2.default.createElement(_underConstruction2.default, null)
	      )
	    );
	  }
	});
	exports.default = WeddingApp;

/***/ },

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(169);

	var _lodash = __webpack_require__(1);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _CenterCrest = __webpack_require__(238);

	var _CenterCrest2 = _interopRequireDefault(_CenterCrest);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var starterStyle = {
	  marginTop: 20
	};

	//give all the same margin-top: 20px;
	//sectionlinks have padding-top = centerCrest height/6

	var WeddingNav = _react2.default.createClass({
	  displayName: 'WeddingNav',

	  componentDidMount: function componentDidMount() {
	    this.hasLoaded = true;
	    this.props.setNavRef(this.navRef);
	  },
	  render: function render() {
	    var _this = this;

	    var sectionStyle = Object.assign({}, starterStyle);
	    if (this.hasLoaded) {
	      sectionStyle.paddingTop = (this.navRef.offsetHeight - starterStyle.marginTop) / 6;
	    }

	    return _react2.default.createElement(
	      'div',
	      {
	        ref: function ref(_ref) {
	          return _this.navRef = _ref;
	        },
	        className: 'header-test text-fancy' },
	      _react2.default.createElement('img', { className: 'leftLace', src: '/under-construction/images/teal-lace.svg' }),
	      _react2.default.createElement('img', { className: 'rightLace', src: '/under-construction/images/teal-lace.svg' }),
	      _react2.default.createElement(
	        'div',
	        { className: 'row' },
	        _react2.default.createElement('div', { className: 'col-xs-4' }),
	        _react2.default.createElement(
	          'div',
	          { className: 'col-xs-4', style: starterStyle },
	          _react2.default.createElement(_CenterCrest2.default, null)
	        ),
	        _react2.default.createElement('div', { className: 'col-xs-4' })
	      )
	    );
	  }
	});

	exports.default = WeddingNav;

/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CenterCrest = _react2.default.createClass({
	  displayName: 'CenterCrest',

	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'centerCrest' },
	      _react2.default.createElement(
	        'div',
	        { className: 'line1' },
	        'Once Upon A'
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'line2' },
	        'Powers'
	      )
	    );
	  }
	});

	exports.default = CenterCrest;

/***/ },

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _Page = __webpack_require__(240);

	var _Page2 = _interopRequireDefault(_Page);

	__webpack_require__(241);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var UnderConstruction = _react2.default.createClass({
	  displayName: 'UnderConstruction',

	  render: function render() {
	    return _react2.default.createElement(
	      _Page2.default,
	      null,
	      _react2.default.createElement(
	        'div',
	        { className: 'text-test-c under-construction-page' },
	        'Unfortunately the site is not quite done',
	        _react2.default.createElement('br', null),
	        _react2.default.createElement(
	          'h3',
	          null,
	          'Check back soon!'
	        )
	      )
	    );
	  }
	});

	exports.default = UnderConstruction;

/***/ },

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Page = _react2.default.createClass({
	  displayName: "Page",

	  render: function render() {
	    return _react2.default.createElement(
	      "div",
	      { className: "Section" },
	      _react2.default.createElement(
	        "div",
	        { className: "content" },
	        this.props.children
	      )
	    );
	  }
	});

	exports.default = Page;

/***/ },

/***/ 241:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 242:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 243:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(244);

	__webpack_require__(245);

	__webpack_require__(246);

	__webpack_require__(247);

	__webpack_require__(248);

	__webpack_require__(249);

/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "under-construction/images//flush-left-lace.png";

/***/ },

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "under-construction/images//flush-right-lace.png";

/***/ },

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "under-construction/images//chalkboard-black.jpg";

/***/ },

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "under-construction/images//orig-chalk-board.png";

/***/ },

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "under-construction/images//cream-lace.svg";

/***/ },

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "under-construction/images//teal-lace.svg";

/***/ }

});