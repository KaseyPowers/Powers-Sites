webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _App = __webpack_require__(250);

	var _App2 = _interopRequireDefault(_App);

	__webpack_require__(260);

	__webpack_require__(261);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import whats needed


	var root = document.createElement('div'); // Core components

	document.body.appendChild(root);

	(0, _reactDom.render)(_react2.default.createElement(_App2.default, null), root);

/***/ },

/***/ 250:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(167);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _reactRouter = __webpack_require__(169);

	var _reactAddonsCssTransitionGroup = __webpack_require__(230);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _NavComponents = __webpack_require__(251);

	var _NavComponents2 = _interopRequireDefault(_NavComponents);

	var _Pages = __webpack_require__(253);

	var _Pages2 = _interopRequireDefault(_Pages);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var startingNavHeight = 150;

	var siteName = document.domain;
	var startIndex = siteName.indexOf('www.');
	startIndex += startIndex >= 0 ? 'www.'.length : startIndex;
	siteName = siteName.substring(startIndex);
	siteName = _lodash2.default.trimEnd(siteName, '.com');

	var prefix = siteName === 'localhost' || siteName === 'thefamilypowers' ? '/wedding' : '/';

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
	    var currentPage = _lodash2.default.trimStart(this.props.location.pathname, prefix);
	    currentPage = _lodash2.default.trimStart(currentPage, '/');

	    var currentIndex = _lodash2.default.findIndex(_Pages2.default, ['path', currentPage]);
	    var prevIndex = this.previousIndex || 0;
	    var transitionName = 'Section-' + (prevIndex < currentIndex ? 'right' : 'left');
	    this.previousIndex = currentIndex;

	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_NavComponents2.default, { sections: _Pages2.default, prefix: prefix, setNavRef: this.setNavRef }),
	      _react2.default.createElement(
	        _reactAddonsCssTransitionGroup2.default,
	        {
	          component: 'div',
	          transitionName: transitionName,
	          transitionEnterTimeout: 500,
	          transitionLeaveTimeout: 500,
	          style: mainStyle
	        },
	        _react2.default.cloneElement(this.props.children, {
	          key: this.props.location.pathname
	        })
	      )
	    );
	  }
	});

	var App = _react2.default.createClass({
	  displayName: 'App',

	  render: function render() {
	    var myPrefix = prefix.length > 1 ? prefix + '/' : prefix;
	    var PageRoutes = _lodash2.default.reduce(_Pages2.default, function (result, page, index) {
	      if (index === 0) {
	        result.push(_react2.default.createElement(_reactRouter.IndexRoute, { key: 'Index ' + page.name, component: page.component }));
	      }
	      result.push(_react2.default.createElement(_reactRouter.Route, { key: page.name, path: page.path, component: page.component }));
	      return result;
	    }, []);
	    return _react2.default.createElement(
	      _reactRouter.Router,
	      { history: _reactRouter.browserHistory },
	      _react2.default.createElement(
	        _reactRouter.Route,
	        { path: prefix, component: WeddingApp },
	        PageRoutes
	      )
	    );
	  }
	});
	exports.default = App;

/***/ },

/***/ 251:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(169);

	var _lodash = __webpack_require__(167);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _CenterCrest = __webpack_require__(252);

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

	    var myPrefix = this.props.prefix.length > 1 ? this.props.prefix + '/' : this.props.prefix;

	    var totalLinks = _lodash2.default.size(this.props.sections);
	    var leftSize = Math.floor(totalLinks / 2);
	    var rightSize = totalLinks - leftSize;

	    var leftCol = Math.max(Math.floor(12 / leftSize), 1);
	    var rightCol = Math.max(Math.floor(12 / rightSize), 1);

	    var leftLinks = [];
	    var rightLinks = [];

	    _lodash2.default.forEach(this.props.sections, function (key) {
	      var addLeft = leftLinks.length < leftSize;
	      var linkClass = 'col-md-' + (addLeft ? leftCol : rightCol);

	      (addLeft ? leftLinks : rightLinks).push(_react2.default.createElement(
	        'div',
	        { className: linkClass + ' sectionLink', key: key.path, style: sectionStyle },
	        _react2.default.createElement(
	          _reactRouter.Link,
	          { to: myPrefix + key.path },
	          key.name
	        )
	      ));
	    });

	    return _react2.default.createElement(
	      'div',
	      {
	        ref: function ref(_ref) {
	          return _this.navRef = _ref;
	        },
	        className: 'header-test text-fancy' },
	      _react2.default.createElement('img', { className: 'leftLace', src: myPrefix + 'images/teal-lace.svg' }),
	      _react2.default.createElement('img', { className: 'rightLace', src: myPrefix + 'images/teal-lace.svg' }),
	      _react2.default.createElement(
	        'div',
	        { className: 'row' },
	        _react2.default.createElement(
	          'div',
	          { className: 'col-xs-4' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            leftLinks
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'col-xs-4', style: starterStyle },
	          _react2.default.createElement(_CenterCrest2.default, null)
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'col-xs-4' },
	          _react2.default.createElement(
	            'div',
	            { className: 'row' },
	            rightLinks
	          )
	        )
	      )
	    );
	  }
	});

	exports.default = WeddingNav;

/***/ },

/***/ 252:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

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

/***/ 253:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _aboutUs = __webpack_require__(254);

	var _aboutUs2 = _interopRequireDefault(_aboutUs);

	var _bridalParty = __webpack_require__(257);

	var _bridalParty2 = _interopRequireDefault(_bridalParty);

	var _theEvent = __webpack_require__(258);

	var _theEvent2 = _interopRequireDefault(_theEvent);

	var _registry = __webpack_require__(259);

	var _registry2 = _interopRequireDefault(_registry);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import TestSection from './TestSection';

	exports.default = [{
	  name: 'About Us',
	  path: 'about-us',
	  component: _aboutUs2.default
	}, {
	  name: 'Bridal Party',
	  path: 'bridal-party',
	  component: _bridalParty2.default
	}, {
	  name: 'The Event',
	  path: 'the-event',
	  component: _theEvent2.default
	}, {
	  name: 'Registry',
	  path: 'registry',
	  component: _registry2.default
	}];

/***/ },

/***/ 254:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Page = __webpack_require__(255);

	var _Page2 = _interopRequireDefault(_Page);

	__webpack_require__(256);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AboutUsText = "Kasey and I's flame ignited two years ago in the summer of 2014. Our first date was at the local Buffalo Wild Wing's in my hometown where he was attending FIT. Buffalo Wild Wing's was the only restaurant we both knew that was open past 11 PM on a Tuesday night. This is when I can honestly say I fell for him, because when we were leaving the restaurant I literally fell over a bench when he was walking me out to my car. After a few more dates, endless texting and phone calls one morning I stopped by his place before work and there was a note plus a package of green apple licorice. The note read \"Will you be my girlfriend? Check Yes or No\". Little less than two years later we found ourselves on January 23rd 2016 rushing to breakfast at Cinderella's Castle. Minus some little hiccups of me thinking I saw my parents car, maybe seeing Kasey's parents twins outside the park and one of the cast members being overly excited when we checked in, we finally made it to the best seat in the whole restaurant. We were right in the middle, against the window looking out at the park. Children and princesses surrounding us, trumpets sounded - while I thought they were bringing us the check the waiter brought out a glass slipper and announced my prince has something to ask me. With everyone in the whole restaurant looking at us, Kasey drops to one knee and everything else just faded away. I'm balling at this point, of course with photos to prove, I say yes (obviously). Every day is a blessing with him by my side. He is my best friend, partner in crime, other half, my person, tutor, my confident, and simply my everything. I could go on and on about how thoughtful, how amazing, how loving, how kind, how great he is with kids, or how much he means to me - but simply you would fall in love with him as well too. ";

	var AboutUs = _react2.default.createClass({
	  displayName: 'AboutUs',

	  render: function render() {
	    return _react2.default.createElement(
	      _Page2.default,
	      null,
	      _react2.default.createElement(
	        'p',
	        { className: 'about-us' },
	        _react2.default.createElement(
	          'span',
	          { className: 'image-container float-left' },
	          'TODO: Image'
	        ),
	        _react2.default.createElement(
	          'span',
	          { className: 'image-container float-right' },
	          'TODO: Image'
	        ),
	        _react2.default.createElement(
	          'span',
	          { className: 'text-test-c' },
	          AboutUsText
	        )
	      )
	    );
	  }
	});

	// var AboutUs = React.createClass({
	//   render: function() {
	//     return (
	//       <Page>
	//         <h2>About Us</h2>
	//         <div className="row">
	//           <div className="col-xs-4 text-test-a">
	//             <h4>Allura</h4>
	//             <p>{AboutUsText}</p>
	//           </div>
	//           <div className="col-xs-4 text-test-b">
	//             <h4>Homemade Apple</h4>
	//             <p>{AboutUsText}</p>
	//           </div>
	//           <div className="col-xs-4 text-test-c">
	//             <h4>Dancing Script</h4>
	//             <p>{AboutUsText}</p>
	//           </div>
	//         </div>
	//       </Page>
	//     )
	//   }
	// });

	exports.default = AboutUs;

/***/ },

/***/ 255:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

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

/***/ 256:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Page = __webpack_require__(255);

	var _Page2 = _interopRequireDefault(_Page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BridalParty = _react2.default.createClass({
	  displayName: 'BridalParty',

	  render: function render() {
	    return _react2.default.createElement(
	      _Page2.default,
	      null,
	      _react2.default.createElement(
	        'h4',
	        null,
	        'Bridal Party'
	      )
	    );
	  }
	});

	exports.default = BridalParty;

/***/ },

/***/ 258:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Page = __webpack_require__(255);

	var _Page2 = _interopRequireDefault(_Page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TheEvent = _react2.default.createClass({
	  displayName: 'TheEvent',

	  render: function render() {
	    return _react2.default.createElement(
	      _Page2.default,
	      null,
	      _react2.default.createElement(
	        'h4',
	        null,
	        'The Event'
	      )
	    );
	  }
	});

	exports.default = TheEvent;

/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Page = __webpack_require__(255);

	var _Page2 = _interopRequireDefault(_Page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Registry = _react2.default.createClass({
	  displayName: 'Registry',

	  render: function render() {
	    return _react2.default.createElement(
	      _Page2.default,
	      null,
	      _react2.default.createElement(
	        'h4',
	        null,
	        'Registry'
	      )
	    );
	  }
	});

	exports.default = Registry;

/***/ },

/***/ 260:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(262);

	__webpack_require__(263);

	__webpack_require__(264);

	__webpack_require__(265);

	__webpack_require__(266);

	__webpack_require__(267);

/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "wedding/images//flush-left-lace.png";

/***/ },

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "wedding/images//flush-right-lace.png";

/***/ },

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "wedding/images//chalkboard-black.jpg";

/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "wedding/images//orig-chalk-board.png";

/***/ },

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "wedding/images//cream-lace.svg";

/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "wedding/images//teal-lace.svg";

/***/ }

});