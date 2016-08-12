webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(33);

	var _App = __webpack_require__(258);

	var _App2 = _interopRequireDefault(_App);

	__webpack_require__(298);

	__webpack_require__(299);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import whats needed
	var root = document.createElement('div'); // Core components

	document.body.appendChild(root);

	(0, _reactDom.render)(_react2.default.createElement(_App2.default, null), root);

/***/ },

/***/ 258:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _lodash = __webpack_require__(173);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _reactRouter = __webpack_require__(175);

	var _reactAddonsCssTransitionGroup = __webpack_require__(238);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _NavComponents = __webpack_require__(259);

	var _NavComponents2 = _interopRequireDefault(_NavComponents);

	var _Pages = __webpack_require__(261);

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

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(175);

	var _lodash = __webpack_require__(173);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _CenterCrest = __webpack_require__(260);

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

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(33);

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

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _aboutUs = __webpack_require__(262);

	var _aboutUs2 = _interopRequireDefault(_aboutUs);

	var _bridalParty = __webpack_require__(265);

	var _bridalParty2 = _interopRequireDefault(_bridalParty);

	var _theEvent = __webpack_require__(267);

	var _theEvent2 = _interopRequireDefault(_theEvent);

	var _Registry = __webpack_require__(297);

	var _Registry2 = _interopRequireDefault(_Registry);

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
	  component: _Registry2.default
	}];

/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Page = __webpack_require__(263);

	var _Page2 = _interopRequireDefault(_Page);

	__webpack_require__(264);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AboutUsText = "Our flame ignited in the summer two years ago. A first date in Sarah's hometown where Kasey was attending Florida Tech at the always romantic Buffalo Wild Wing's. The only restaurant we could think of that was still open after he got off his night shift. Sarah first fell for Kasey that evening, tripping on a bench on the way out. After a few more dates, endless texting and phone calls Kasey left her a note with a package of green apple licorice. The note read \"Will you be my girlfriend? Check Yes or No\". Little less than two years later we found ourselves rushing to breakfast at Cinderella's Castle. Minus some little hiccups: unexpectedly cold weather, passing both our parents on our way there and convincing her they were some dopplegangers, we finally made it to the best seat in the whole restaurant. Right in the middle, against the window looking out at the park. Children and princesses surrounding us, trumpets sounded - confused, thinking the waiter was bringing the check, he instead brought out a glass slipper and announced the prince has something to ask her. With everyone in the whole restaurant looking at us, Kasey drops to one knee and everything else just faded away. Balling at this point, of course with photos to prove, She said yes.";

	var siteName = document.domain;
	var startIndex = siteName.indexOf('www.');
	startIndex = startIndex >= 0 ? startIndex + 'www.'.length : 0;
	siteName = siteName.substring(startIndex);
	siteName = _.trimEnd(siteName, '.com');

	var prefix = siteName === 'localhost' || siteName === 'thefamilypowers' ? '/wedding/' : '/';

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
	          _react2.default.createElement('img', { src: prefix + 'images/couple1.jpg', className: 'img-responsive img-circle center-block' })
	        ),
	        _react2.default.createElement(
	          'span',
	          { className: 'image-container float-right' },
	          _react2.default.createElement('img', { src: prefix + 'images/couple2.jpg', className: 'img-responsive img-circle center-block' })
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

/***/ 263:
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

/***/ 264:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(266);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Page = __webpack_require__(263);

	var _Page2 = _interopRequireDefault(_Page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var bridesmaids = [{
	  name: 'Jordan Carl',
	  title: 'Matron of Honor',
	  description: 'Jordan and I have been through many things together the past few years. From bad breakups and hospital visits to marriage and child birth. We are each other\'s person, and yes that is a Grey\'s Anatomy reference. Seven years of friendship and I couldn\'t have asked for a better person to stand by my side on this up coming day to hold my dress up when I have to pee or help me make sure my wedding day is everything I could dream of.',
	  image: 'images/bridal-party/jordan-carl.jpg'
	}, {
	  name: 'Caroline Duffle',
	  description: 'Who knew the best thing about working at Florida Hospital would be meeting this girl on night shift. We spent so many nights trying to keep each other up, and even on our off nights we spent time together studying, cooking and venting about the crazy patients we have encountered. I couldn\'t have ask for a better roommate as well for the past year and to stand by me on this upcoming day.',
	  image: 'images/bridal-party/caroline.jpg'
	}, {
	  name: 'Lynsie Pyron',
	  description: 'Lynsie and I first crossed path eighth grade at the end of the semester. My very first boyfriend has broken up with me and that is what brought Lynsie and I together. We have had many up and downs over the past eleven years, but I couldn\'t imagine her not being with me on this special day.',
	  image: 'images/bridal-party/Lynsie.jpeg'
	}, {
	  name: 'Molly Beasley',
	  description: 'Being less than two years apart, Molly and I have grown up closer than just being cousins. She\'s the little sister I never had. As she has grown up, we have naturally continued to be close. She can always rely on me, and I can always rely on her. I\'m not sure who cried more when I got engaged, her or me. But I am thankful she said yes to being apart of our upcoming wedding.',
	  image: 'images/bridal-party/molly.jpg'
	}, {
	  name: 'Emily Beasley',
	  description: 'My sweet little baby Emily. She and I are further apart in age compared to Molly, but we defiantly treats you as the little sister. Purposely doing stuff without you and telling you that you weren\'t old enough to come with us. But on my wedding day, that is far from the truth. Beyond blessed to have you as a bridesmaid.',
	  image: 'images/bridal-party/emily.jpg'
	}];
	var groomsmen = [{
	  name: 'Taylor Schluter',
	  title: 'Best Man',
	  description: 'Teammate, then a friend, and finally brother, Taylor has been there since meeting freshman year. After 2 years of convincing, I was able to get him to join my fraternity as my little brother, where he showed us all what brotherhood could mean. We\'ve been on adventures from my 21st birhday in Key West, to a year living together. And even though he lives across the country now, I look foreward to many more adventures. ',
	  image: 'images/bridal-party/taylor.jpg'
	}, {
	  name: 'Jordan Zenga',
	  description: 'Jordan is the one who first convinced me to go Greek, and was my big brother in the fraternity. As my tolken half blind canadian friend, a good time is never far away.',
	  image: 'images/bridal-party/jordan-zenga.jpg'
	}, {
	  name: 'Alec Gorge',
	  description: 'Alec, being some kind of prodigy, is the one who inspired me to study programming. If it wasn\'t for him, I probably would not have ended up at FIT, or have met Sarah. Alec is one of the most genuinly nice people I have ever met, and has been there to lend a helping hand whenever one is needed.',
	  image: 'images/bridal-party/alec.jpg'
	}, {
	  name: 'David Armstrong',
	  description: 'Sarah\'s brother, David has been my guide to everything Star Wars, on top of making me feel a part of the family. He has been a great friend and I will be honored to have him as a brother-in-law',
	  image: 'images/bridal-party/david.jpg'
	}, {
	  name: 'Brady Powers',
	  description: 'I\'ve known Brady longer than any other groomsman, and while we have not always gotten along, he\s been a great brother.',
	  image: 'images/bridal-party/brady.jpg'
	}, {
	  name: 'Bennett Powers',
	  description: 'I know Bennett through family, and while he frequintly drives me nuts, he will always be my little brother. Gotta love him.',
	  image: 'images/bridal-party/bennett.jpg'
	}];

	var AboutPerson = _react2.default.createClass({
	  displayName: 'AboutPerson',

	  render: function render() {
	    var image = _react2.default.createElement('img', { src: this.props.person.image, className: 'img-responsive img-circle center-block float-' + (this.props.leftAlign ? 'left' : 'right') });

	    var main = _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'div',
	        { className: 'text-fancy text-' + (!this.props.leftAlign ? 'right' : 'left'), style: this.props.person.title ? { fontSize: 34 } : null },
	        this.props.person.name,
	        this.props.person.title ? _react2.default.createElement(
	          'span',
	          { style: { fontSize: 24, marginLeft: 12 } },
	          '- ',
	          this.props.person.title
	        ) : null
	      ),
	      _react2.default.createElement(
	        'p',
	        { className: 'about text-' + (this.props.leftAlign ? 'right' : 'left') },
	        this.props.person.description
	      )
	    );
	    return _react2.default.createElement(
	      'div',
	      { className: 'col-md-' + this.props.columnSize },
	      image,
	      main
	    );
	  }
	});

	var BridalParty = _react2.default.createClass({
	  displayName: 'BridalParty',

	  render: function render() {
	    var bridesmaidRows = [];
	    bridesmaidRows.push(_react2.default.createElement(
	      'div',
	      { key: 'bridesRow-0', className: 'row' },
	      _react2.default.createElement(AboutPerson, {
	        key: bridesmaids[0].name,
	        pushRight: false,
	        leftAlign: false,
	        person: bridesmaids[0],
	        columnSize: 12 })
	    ));
	    for (var i = 1; i < bridesmaids.length; i += 2) {
	      var bridesmaid1 = bridesmaids[i];
	      var bridesmaid2 = bridesmaids[i + 1];
	      var columns = [];
	      var columnCount = 0;
	      if (bridesmaid1) {
	        columnCount++;
	      }
	      if (bridesmaid2) {
	        columnCount++;
	      }

	      if (bridesmaid1) {
	        columns.push(_react2.default.createElement(AboutPerson, {
	          key: bridesmaid1.name,
	          pushRight: false,
	          leftAlign: false,
	          person: bridesmaid1,
	          columnSize: 12 / columnCount }));
	      }
	      if (bridesmaid2) {
	        columns.push(_react2.default.createElement(AboutPerson, {
	          key: bridesmaid2.name,
	          pushRight: false,
	          leftAlign: false,
	          person: bridesmaid2,
	          columnSize: 12 / columnCount }));
	      }
	      bridesmaidRows.push(_react2.default.createElement(
	        'div',
	        { key: 'bridesRow-' + i, className: 'row' },
	        columns
	      ));
	    }

	    var groomsmenRows = [];
	    groomsmenRows.push(_react2.default.createElement(
	      'div',
	      { key: 'groomRow-0', className: 'row' },
	      _react2.default.createElement(AboutPerson, {
	        key: groomsmen[0].name,
	        pushRight: false,
	        leftAlign: true,
	        person: groomsmen[0],
	        columnSize: 12 })
	    ));
	    for (var i = 1; i < groomsmen.length; i += 2) {
	      var groomsman1 = groomsmen[i];
	      var groomsman2 = groomsmen[i + 1];
	      var columns = [];
	      var columnCount = 0;
	      if (groomsman1) {
	        columnCount++;
	      }
	      if (groomsman2) {
	        columnCount++;
	      }

	      if (groomsman1) {
	        columns.push(_react2.default.createElement(AboutPerson, {
	          key: groomsman1.name,
	          pushRight: false,
	          leftAlign: true,
	          person: groomsman1,
	          columnSize: 12 / columnCount }));
	      }
	      if (groomsman2) {
	        columns.push(_react2.default.createElement(AboutPerson, {
	          key: groomsman2.name,
	          pushRight: false,
	          leftAlign: true,
	          person: groomsman2,
	          columnSize: 12 / columnCount }));
	      }
	      groomsmenRows.push(_react2.default.createElement(
	        'div',
	        { key: 'groomsRow-' + i, className: 'row' },
	        columns
	      ));
	    }

	    return _react2.default.createElement(
	      _Page2.default,
	      null,
	      _react2.default.createElement(
	        'div',
	        { className: 'bridal-party' },
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(
	            'div',
	            { className: 'col-md-6' },
	            bridesmaidRows
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'col-md-6' },
	            groomsmenRows
	          )
	        )
	      )
	    );
	  }
	});

	exports.default = BridalParty;

/***/ },

/***/ 266:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Page = __webpack_require__(263);

	var _Page2 = _interopRequireDefault(_Page);

	var _EventMap = __webpack_require__(268);

	var _EventMap2 = _interopRequireDefault(_EventMap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TheEvent = _react2.default.createClass({
	  displayName: 'TheEvent',

	  render: function render() {
	    return _react2.default.createElement(
	      _Page2.default,
	      null,
	      _react2.default.createElement(
	        'h1',
	        { className: 'text-test-c' },
	        'The Event'
	      ),
	      _react2.default.createElement(_EventMap2.default, null)
	    );
	  }
	});

	exports.default = TheEvent;

/***/ },

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _googleMapReact = __webpack_require__(269);

	var _googleMapReact2 = _interopRequireDefault(_googleMapReact);

	var _utils = __webpack_require__(291);

	var _mapStyles = __webpack_require__(294);

	var _mapStyles2 = _interopRequireDefault(_mapStyles);

	var _EventLocation = __webpack_require__(295);

	var _EventLocation2 = _interopRequireDefault(_EventLocation);

	var _keys = __webpack_require__(296);

	var _keys2 = _interopRequireDefault(_keys);

	var _lodash = __webpack_require__(173);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var appKey = _keys2.default.googleMaps;

	var locations = [{
	  pos: {
	    lat: 28.567496,
	    lng: -81.355428
	  },
	  name: 'Henry P Lou Gardens',
	  type: 'venue',
	  mainLink: 'http://leugardens.org',
	  mapLink: 'https://www.google.com/maps/place/Harry+P+Leu+Gardens/@28.5675717,-81.3575736,17z/data=!3m1!4b1!4m5!3m4!1s0x88e77abc1a981009:0x9696d656a16a6fdc!8m2!3d28.5675717!4d-81.3553849'
	}, {
	  pos: {
	    lat: 28.538962,
	    lng: -81.378658
	  },
	  name: 'Grand Bohemian Hotel',
	  type: 'hotel',
	  mainLink: 'http://www.grandbohemianhotel.com/',
	  mapLink: 'https://www.google.com/maps/place/Grand+Bohemian+Hotel+Orlando,+Autograph+Collection/@28.5386985,-81.3808682,17z/data=!3m1!4b1!4m5!3m4!1s0x88e77b01fefd022b:0xca40d5cfca890aa4!8m2!3d28.5386985!4d-81.3786795'
	}, {
	  pos: {
	    lat: 28.540703,
	    lng: -81.381379
	  },
	  name: 'Civiche',
	  type: 'restaurant',
	  mainLink: 'http://www.ceviche.com/orlando/',
	  mapLink: 'https://www.google.com/maps/place/Ceviche+Tapas+Orlando/@28.5404395,-81.3835465,17z/data=!3m1!4b1!4m5!3m4!1s0x88e77affcad41dd3:0xfa814ffa35234a96!8m2!3d28.5404395!4d-81.3813578'
	}];

	var EventMap = _react2.default.createClass({
	  displayName: 'EventMap',

	  componentDidMount: function componentDidMount() {
	    this.hasLoaded = true;
	  },
	  render: function render() {
	    var lats = _lodash2.default.map(locations, 'pos.lat');
	    var lngs = _lodash2.default.map(locations, 'pos.lng');
	    var buffer = .002;

	    var bounds = {
	      nw: {
	        lat: _lodash2.default.max(lats) + buffer,
	        lng: _lodash2.default.min(lngs)
	      },
	      se: {
	        lat: _lodash2.default.min(lats),
	        lng: _lodash2.default.max(lngs)
	      }
	    };
	    var size = {
	      width: window.innerWidth - (10 + 75) * 2,
	      height: 500
	    };

	    var _fitBounds = (0, _utils.fitBounds)(bounds, size);

	    var center = _fitBounds.center;
	    var zoom = _fitBounds.zoom;

	    var markers = locations.map(function (location) {
	      return _react2.default.createElement(_EventLocation2.default, {
	        key: location.name,
	        lat: location.pos.lat,
	        lng: location.pos.lng,
	        type: location.type,
	        text: location.name,
	        mainLink: location.mainLink,
	        mapLink: location.mapLink });
	    });
	    return _react2.default.createElement(
	      'div',
	      { className: 'event-map-container' },
	      _react2.default.createElement(
	        _googleMapReact2.default,
	        {
	          options: {
	            zoomControl: false,
	            scaleControl: false,
	            styles: _mapStyles2.default
	          },
	          center: center,
	          zoom: zoom,
	          bootstrapURLKeys: { key: appKey } },
	        markers
	      )
	    );
	  }
	});

	exports.default = EventMap;

/***/ },

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _google_map = __webpack_require__(270);

	var _google_map2 = _interopRequireDefault(_google_map);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _google_map2.default;

/***/ },

/***/ 270:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(33);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _shallowEqual = __webpack_require__(133);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _marker_dispatcher = __webpack_require__(271);

	var _marker_dispatcher2 = _interopRequireDefault(_marker_dispatcher);

	var _google_map_map = __webpack_require__(273);

	var _google_map_map2 = _interopRequireDefault(_google_map_map);

	var _google_map_markers = __webpack_require__(274);

	var _google_map_markers2 = _interopRequireDefault(_google_map_markers);

	var _google_map_markers_prerender = __webpack_require__(276);

	var _google_map_markers_prerender2 = _interopRequireDefault(_google_map_markers_prerender);

	var _google_map_loader = __webpack_require__(277);

	var _google_map_loader2 = _interopRequireDefault(_google_map_loader);

	var _detect = __webpack_require__(279);

	var _detect2 = _interopRequireDefault(_detect);

	var _geo = __webpack_require__(280);

	var _geo2 = _interopRequireDefault(_geo);

	var _array_helper = __webpack_require__(285);

	var _array_helper2 = _interopRequireDefault(_array_helper);

	var _is_plain_object = __webpack_require__(286);

	var _is_plain_object2 = _interopRequireDefault(_is_plain_object);

	var _pick = __webpack_require__(287);

	var _pick2 = _interopRequireDefault(_pick);

	var _raf = __webpack_require__(288);

	var _raf2 = _interopRequireDefault(_raf);

	var _log = __webpack_require__(289);

	var _log2 = _interopRequireDefault(_log);

	var _isNumber = __webpack_require__(290);

	var _isNumber2 = _interopRequireDefault(_isNumber);

	var _omit = __webpack_require__(275);

	var _omit2 = _interopRequireDefault(_omit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var kEPS = 0.00001;
	var K_GOOGLE_TILE_SIZE = 256;
	// real minZoom calculated here _getMinZoom
	var K_IDLE_TIMEOUT = 100;
	var K_IDLE_CLICK_TIMEOUT = 300;
	var DEFAULT_MIN_ZOOM = 3;

	function defaultOptions_() /* maps */{
	  return {
	    overviewMapControl: false,
	    streetViewControl: false,
	    rotateControl: true,
	    mapTypeControl: false,
	    // disable poi
	    styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'off' }] }],
	    minZoom: DEFAULT_MIN_ZOOM };
	}

	// dynamically recalculted if possible during init
	var latLng2Obj = function latLng2Obj(latLng) {
	  return (0, _is_plain_object2.default)(latLng) ? latLng : { lat: latLng[0], lng: latLng[1] };
	};

	var GoogleMap = function (_Component) {
	  _inherits(GoogleMap, _Component);

	  // eslint-disable-line

	  function GoogleMap(props) {
	    _classCallCheck(this, GoogleMap);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GoogleMap).call(this, props));

	    _this._getMinZoom = function () {
	      if (_this.geoService_.getWidth() > 0 || _this.geoService_.getHeight() > 0) {
	        var tilesPerWidth = Math.ceil(_this.geoService_.getWidth() / K_GOOGLE_TILE_SIZE) + 2;
	        var tilesPerHeight = Math.ceil(_this.geoService_.getHeight() / K_GOOGLE_TILE_SIZE) + 2;
	        var maxTilesPerDim = Math.max(tilesPerWidth, tilesPerHeight);
	        return Math.ceil((0, _log2.default)(maxTilesPerDim));
	      }
	      return DEFAULT_MIN_ZOOM;
	    };

	    _this._computeMinZoom = function (minZoomOverride, minZoom) {
	      if (minZoomOverride) {
	        return minZoom || DEFAULT_MIN_ZOOM;
	      }
	      return _this._getMinZoom();
	    };

	    _this._initMap = function () {
	      // only initialize the map once
	      if (_this.initialized_) {
	        return;
	      }
	      _this.initialized_ = true;

	      var propsCenter = latLng2Obj(_this.props.center || _this.props.defaultCenter);
	      _this.geoService_.setView(propsCenter, _this.props.zoom || _this.props.defaultZoom, 0);

	      _this._onBoundsChanged(); // now we can calculate map bounds center etc...

	      var bootstrapURLKeys = _extends({}, _this.props.apiKey && { key: _this.props.apiKey }, _this.props.bootstrapURLKeys);

	      _this.props.googleMapLoader(bootstrapURLKeys).then(function (maps) {
	        if (!_this.mounted_) {
	          return;
	        }

	        var centerLatLng = _this.geoService_.getCenter();

	        var propsOptions = {
	          zoom: _this.props.zoom || _this.props.defaultZoom,
	          center: new maps.LatLng(centerLatLng.lat, centerLatLng.lng)
	        };

	        // prevent to exapose full api
	        // next props must be exposed (console.log(Object.keys(pick(maps, isPlainObject))))
	        // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
	        // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition",
	        // "SymbolPath", "ZoomControlStyle",
	        // "event", "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem",
	        // "DistanceMatrixStatus",
	        // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType",
	        // "GeocoderStatus", "KmlLayerStatus",
	        // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference",
	        // "TravelMode", "UnitSystem"
	        var mapPlainObjects = (0, _pick2.default)(maps, _is_plain_object2.default);
	        var options = typeof _this.props.options === 'function' ? _this.props.options(mapPlainObjects) : _this.props.options;
	        var defaultOptions = defaultOptions_(mapPlainObjects);

	        var draggableOptions = _this.props.draggable !== undefined && { draggable: _this.props.draggable };

	        var minZoom = _this._computeMinZoom(options.minZoomOverride, options.minZoom);
	        _this.minZoom_ = minZoom;

	        var preMapOptions = _extends({}, defaultOptions, {
	          minZoom: minZoom
	        }, options, propsOptions);

	        _this.defaultDraggableOption_ = preMapOptions.draggable !== undefined ? preMapOptions.draggable : _this.defaultDraggableOption_;

	        var mapOptions = _extends({}, preMapOptions, draggableOptions);

	        if (process.env.NODE_ENV !== 'production') {
	          if (mapOptions.minZoom < minZoom) {
	            console.warn('GoogleMap: ' + // eslint-disable-line
	            'minZoom option is less than recommended ' + 'minZoom option for your map sizes.\n' + 'overrided to value ' + minZoom);
	          }
	        }

	        if (mapOptions.minZoom < minZoom) {
	          mapOptions.minZoom = minZoom;
	        }

	        var map = new maps.Map(_reactDom2.default.findDOMNode(_this.refs.google_map_dom), mapOptions);
	        _this.map_ = map;
	        _this.maps_ = maps;

	        // render in overlay
	        var this_ = _this;
	        var overlay = _this.overlay_ = Object.assign(new maps.OverlayView(), {
	          onAdd: function onAdd() {
	            var K_MAX_WIDTH = typeof screen !== 'undefined' ? screen.width + 'px' : '2000px';
	            var K_MAX_HEIGHT = typeof screen !== 'undefined' ? screen.height + 'px' : '2000px';

	            var div = document.createElement('div');
	            this.div = div;
	            div.style.backgroundColor = 'transparent';
	            div.style.position = 'absolute';
	            div.style.left = '0px';
	            div.style.top = '0px';
	            div.style.width = K_MAX_WIDTH; // prevents some chrome draw defects
	            div.style.height = K_MAX_HEIGHT;

	            var panes = this.getPanes();
	            panes.overlayMouseTarget.appendChild(div);

	            _reactDom2.default.unstable_renderSubtreeIntoContainer(this_, _react2.default.createElement(_google_map_markers2.default, {
	              experimental: this_.props.experimental,
	              onChildClick: this_._onChildClick,
	              onChildMouseDown: this_._onChildMouseDown,
	              onChildMouseEnter: this_._onChildMouseEnter,
	              onChildMouseLeave: this_._onChildMouseLeave,
	              geoService: this_.geoService_,
	              projectFromLeftTop: true,
	              distanceToMouse: this_.props.distanceToMouse,
	              getHoverDistance: this_._getHoverDistance,
	              dispatcher: this_.markersDispatcher_
	            }), div,
	            // remove prerendered markers
	            function () {
	              return this_.setState({ overlayCreated: true });
	            });
	          },
	          onRemove: function onRemove() {
	            _reactDom2.default.unmountComponentAtNode(this.div);
	          },
	          draw: function draw() {
	            var div = overlay.div;
	            var overlayProjection = overlay.getProjection();
	            var bounds = map.getBounds();
	            var ne = bounds.getNorthEast();
	            var sw = bounds.getSouthWest();
	            var ptx = overlayProjection.fromLatLngToDivPixel(new maps.LatLng(ne.lat(), sw.lng()));

	            // need round for safari still can't find what need for firefox
	            var ptxRounded = (0, _detect2.default)().isSafari ? { x: Math.round(ptx.x), y: Math.round(ptx.y) } : { x: ptx.x, y: ptx.y };

	            this_.updateCounter_++;
	            this_._onBoundsChanged(map, maps, !this_.props.debounced);

	            if (!this_.googleApiLoadedCalled_) {
	              this_._onGoogleApiLoaded({ map: map, maps: maps });
	              this_.googleApiLoadedCalled_ = true;
	            }

	            div.style.left = ptxRounded.x + 'px';
	            div.style.top = ptxRounded.y + 'px';
	            if (this_.markersDispatcher_) {
	              this_.markersDispatcher_.emit('kON_CHANGE');
	            }
	          }
	        });

	        overlay.setMap(map);

	        maps.event.addListener(map, 'zoom_changed', function () {
	          // recalc position at zoom start
	          if (this_.geoService_.getZoom() !== map.getZoom()) {
	            if (!this_.zoomAnimationInProgress_) {
	              this_.zoomAnimationInProgress_ = true;
	              this_._onZoomAnimationStart();
	            }

	            var TIMEOUT_ZOOM = 300;

	            if (new Date().getTime() - _this.zoomControlClickTime_ < TIMEOUT_ZOOM) {
	              // there is strange Google Map Api behavior in chrome when zoom animation of map
	              // is started only on second raf call, if was click on zoom control
	              // or +- keys pressed, so i wait for two rafs before change state

	              // this does not fully prevent animation jump
	              // but reduce it's occurence probability
	              (0, _raf2.default)(function () {
	                return (0, _raf2.default)(function () {
	                  this_.updateCounter_++;
	                  this_._onBoundsChanged(map, maps);
	                });
	              });
	            } else {
	              this_.updateCounter_++;
	              this_._onBoundsChanged(map, maps);
	            }
	          }
	        });

	        maps.event.addListener(map, 'idle', function () {
	          if (_this.resetSizeOnIdle_) {
	            _this._setViewSize();
	            var currMinZoom = _this._computeMinZoom(_this.props.options.minZoomOverride, _this.props.options.minZoom);

	            if (currMinZoom !== _this.minZoom_) {
	              _this.minZoom_ = currMinZoom;
	              map.setOptions({ minZoom: currMinZoom });
	            }

	            _this.resetSizeOnIdle_ = false;
	          }

	          if (this_.zoomAnimationInProgress_) {
	            this_.zoomAnimationInProgress_ = false;
	            this_._onZoomAnimationEnd();
	          }

	          var div = overlay.div;
	          var overlayProjection = overlay.getProjection();
	          var bounds = map.getBounds();
	          var ne = bounds.getNorthEast();
	          var sw = bounds.getSouthWest();
	          var ptx = overlayProjection.fromLatLngToDivPixel(new maps.LatLng(ne.lat(), sw.lng()));
	          // need round for safari still can't find what need for firefox
	          var ptxRounded = (0, _detect2.default)().isSafari ? { x: Math.round(ptx.x), y: Math.round(ptx.y) } : { x: ptx.x, y: ptx.y };

	          this_.updateCounter_++;
	          this_._onBoundsChanged(map, maps);

	          if (_this.mouse_) {
	            var latLng = _this.geoService_.unproject(_this.mouse_, true);
	            _this.mouse_.lat = latLng.lat;
	            _this.mouse_.lng = latLng.lng;
	          }

	          _this._onChildMouseMove();

	          this_.dragTime_ = 0;
	          div.style.left = ptxRounded.x + 'px';
	          div.style.top = ptxRounded.y + 'px';
	          if (this_.markersDispatcher_) {
	            this_.markersDispatcher_.emit('kON_CHANGE');
	            if (this_.fireMouseEventOnIdle_) {
	              this_.markersDispatcher_.emit('kON_MOUSE_POSITION_CHANGE');
	            }
	          }
	        });

	        maps.event.addListener(map, 'mouseover', function () {
	          // has advantage over div MouseLeave
	          this_.mouseInMap_ = true;
	        });

	        maps.event.addListener(map, 'mouseout', function () {
	          // has advantage over div MouseLeave
	          this_.mouseInMap_ = false;
	          this_.mouse_ = null;
	          this_.markersDispatcher_.emit('kON_MOUSE_POSITION_CHANGE');
	        });

	        maps.event.addListener(map, 'drag', function () {
	          this_.dragTime_ = new Date().getTime();
	          this_._onDrag();
	        });
	      }).catch(function (e) {
	        console.error(e); // eslint-disable-line no-console
	        throw e;
	      });
	    };

	    _this._onGoogleApiLoaded = function () {
	      if (_this.props.onGoogleApiLoaded) {
	        var _this$props;

	        if (process.env.NODE_ENV !== 'production' && _this.props.yesIWantToUseGoogleMapApiInternals !== true) {
	          console.warn('GoogleMap: ' + // eslint-disable-line
	          'Usage of internal api objects is dangerous ' + 'and can cause a lot of issues.\n' + 'To hide this warning add yesIWantToUseGoogleMapApiInternals={true} ' + 'to <GoogleMap instance');
	        }

	        (_this$props = _this.props).onGoogleApiLoaded.apply(_this$props, arguments);
	      }
	    };

	    _this._getHoverDistance = function () {
	      return _this.props.hoverDistance;
	    };

	    _this._onDrag = function () {
	      var _this$props2;

	      return _this.props.onDrag && (_this$props2 = _this.props).onDrag.apply(_this$props2, arguments);
	    };

	    _this._onZoomAnimationStart = function () {
	      var _this$props3;

	      return _this.props.onZoomAnimationStart && (_this$props3 = _this.props).onZoomAnimationStart.apply(_this$props3, arguments);
	    };

	    _this._onZoomAnimationEnd = function () {
	      var _this$props4;

	      return _this.props.onZoomAnimationEnd && (_this$props4 = _this.props).onZoomAnimationEnd.apply(_this$props4, arguments);
	    };

	    _this._onChildClick = function () {
	      if (_this.props.onChildClick) {
	        var _this$props5;

	        return (_this$props5 = _this.props).onChildClick.apply(_this$props5, arguments);
	      }
	      return undefined;
	    };

	    _this._onChildMouseDown = function (hoverKey, childProps) {
	      _this.childMouseDownArgs_ = [hoverKey, childProps];
	      if (_this.props.onChildMouseDown) {
	        _this.props.onChildMouseDown(hoverKey, childProps, _extends({}, _this.mouse_));
	      }
	    };

	    _this._onChildMouseUp = function () {
	      if (_this.childMouseDownArgs_) {
	        if (_this.props.onChildMouseUp) {
	          var _this$props6;

	          (_this$props6 = _this.props).onChildMouseUp.apply(_this$props6, _toConsumableArray(_this.childMouseDownArgs_).concat([_extends({}, _this.mouse_)]));
	        }
	        _this.childMouseDownArgs_ = null;
	        _this.childMouseUpTime_ = new Date().getTime();
	      }
	    };

	    _this._onChildMouseMove = function () {
	      if (_this.childMouseDownArgs_) {
	        if (_this.props.onChildMouseMove) {
	          var _this$props7;

	          (_this$props7 = _this.props).onChildMouseMove.apply(_this$props7, _toConsumableArray(_this.childMouseDownArgs_).concat([_extends({}, _this.mouse_)]));
	        }
	      }
	    };

	    _this._onChildMouseEnter = function () {
	      if (_this.props.onChildMouseEnter) {
	        var _this$props8;

	        return (_this$props8 = _this.props).onChildMouseEnter.apply(_this$props8, arguments);
	      }
	      return undefined;
	    };

	    _this._onChildMouseLeave = function () {
	      if (_this.props.onChildMouseLeave) {
	        var _this$props9;

	        return (_this$props9 = _this.props).onChildMouseLeave.apply(_this$props9, arguments);
	      }
	      return undefined;
	    };

	    _this._setViewSize = function () {
	      if (!_this.mounted_) return;

	      var mapDom = _reactDom2.default.findDOMNode(_this.refs.google_map_dom);
	      _this.geoService_.setViewSize(mapDom.clientWidth, mapDom.clientHeight);
	      _this._onBoundsChanged();
	    };

	    _this._onWindowResize = function () {
	      _this.resetSizeOnIdle_ = true;
	    };

	    _this._onMapMouseMove = function (e) {
	      if (!_this.mouseInMap_) return;

	      var currTime = new Date().getTime();
	      var K_RECALC_CLIENT_RECT_MS = 50;

	      if (currTime - _this.mouseMoveTime_ > K_RECALC_CLIENT_RECT_MS) {
	        _this.boundingRect_ = e.currentTarget.getBoundingClientRect();
	      }
	      _this.mouseMoveTime_ = currTime;

	      var mousePosX = e.clientX - _this.boundingRect_.left;
	      var mousePosY = e.clientY - _this.boundingRect_.top;

	      if (!_this.mouse_) {
	        _this.mouse_ = { x: 0, y: 0, lat: 0, lng: 0 };
	      }

	      _this.mouse_.x = mousePosX;
	      _this.mouse_.y = mousePosY;

	      var latLng = _this.geoService_.unproject(_this.mouse_, true);
	      _this.mouse_.lat = latLng.lat;
	      _this.mouse_.lng = latLng.lng;

	      _this._onChildMouseMove();

	      if (currTime - _this.dragTime_ < K_IDLE_TIMEOUT) {
	        _this.fireMouseEventOnIdle_ = true;
	      } else {
	        _this.markersDispatcher_.emit('kON_MOUSE_POSITION_CHANGE');
	        _this.fireMouseEventOnIdle_ = false;
	      }
	    };

	    _this._onClick = function () {
	      var _this$props10;

	      return _this.props.onClick && !_this.childMouseDownArgs_ && new Date().getTime() - _this.childMouseUpTime_ > K_IDLE_CLICK_TIMEOUT && _this.dragTime_ === 0 && (_this$props10 = _this.props).onClick.apply(_this$props10, arguments);
	    };

	    _this._onMapClick = function (event) {
	      if (_this.markersDispatcher_) {
	        // support touch events and recalculate mouse position on click
	        _this._onMapMouseMove(event);
	        var currTime = new Date().getTime();
	        if (currTime - _this.dragTime_ > K_IDLE_TIMEOUT) {
	          if (_this.mouse_) {
	            _this._onClick(_extends({}, _this.mouse_, {
	              event: event
	            }));
	          }

	          _this.markersDispatcher_.emit('kON_CLICK', event);
	        }
	      }
	    };

	    _this._onMapMouseDownNative = function (event) {
	      if (!_this.mouseInMap_) return;

	      _this._onMapMouseDown(event);
	      if (_this.props.draggable === false) {
	        event.preventDefault();
	        event.stopPropagation();
	      }
	    };

	    _this._onMapMouseDown = function (event) {
	      if (_this.markersDispatcher_) {
	        var currTime = new Date().getTime();
	        if (currTime - _this.dragTime_ > K_IDLE_TIMEOUT) {
	          _this.markersDispatcher_.emit('kON_MDOWN', event);
	        }
	      }
	    };

	    _this._onMapMouseDownCapture = function () {
	      if ((0, _detect2.default)().isChrome) {
	        // to fix strange zoom in chrome
	        if (!_this.mouse_) {
	          _this.zoomControlClickTime_ = new Date().getTime();
	        }
	      }
	    };

	    _this._onKeyDownCapture = function () {
	      if ((0, _detect2.default)().isChrome) {
	        _this.zoomControlClickTime_ = new Date().getTime();
	      }
	    };

	    _this._isCenterDefined = function (center) {
	      return center && ((0, _is_plain_object2.default)(center) && (0, _isNumber2.default)(center.lat) && (0, _isNumber2.default)(center.lng) || center.length === 2 && (0, _isNumber2.default)(center[0]) && (0, _isNumber2.default)(center[1]));
	    };

	    _this._onBoundsChanged = function (map, maps, callExtBoundsChange) {
	      if (map) {
	        var gmC = map.getCenter();
	        _this.geoService_.setView([gmC.lat(), gmC.lng()], map.getZoom(), 0);
	      }

	      if ((_this.props.onChange || _this.props.onBoundsChange) && _this.geoService_.canProject()) {
	        var zoom = _this.geoService_.getZoom();
	        var bounds = _this.geoService_.getBounds();
	        var centerLatLng = _this.geoService_.getCenter();

	        if (!(0, _array_helper2.default)(bounds, _this.prevBounds_, kEPS)) {
	          if (callExtBoundsChange !== false) {
	            var marginBounds = _this.geoService_.getBounds(_this.props.margin);
	            if (_this.props.onBoundsChange) {
	              _this.props.onBoundsChange(_this.centerIsObject_ ? _extends({}, centerLatLng) : [centerLatLng.lat, centerLatLng.lng], zoom, bounds, marginBounds);
	            }

	            if (_this.props.onChange) {
	              _this.props.onChange({
	                center: _extends({}, centerLatLng),
	                zoom: zoom,
	                bounds: {
	                  nw: {
	                    lat: bounds[0],
	                    lng: bounds[1]
	                  },
	                  se: {
	                    lat: bounds[2],
	                    lng: bounds[3]
	                  }
	                },
	                marginBounds: {
	                  nw: {
	                    lat: marginBounds[0],
	                    lng: marginBounds[1]
	                  },
	                  se: {
	                    lat: marginBounds[2],
	                    lng: marginBounds[3]
	                  }
	                },

	                size: _this.geoService_.hasSize() ? {
	                  width: _this.geoService_.getWidth(),
	                  height: _this.geoService_.getHeight()
	                } : {
	                  width: 0,
	                  height: 0
	                }
	              });
	            }

	            _this.prevBounds_ = bounds;
	          }
	        }
	        // uncomment for strange bugs
	        if (process.env.NODE_ENV !== 'production') {
	          // compare with google calculations
	          if (map) {
	            var locBounds = map.getBounds();
	            var ne = locBounds.getNorthEast();
	            var sw = locBounds.getSouthWest();

	            var _gmC = map.getCenter();
	            // compare with google map

	            if (!(0, _array_helper2.default)([centerLatLng.lat, centerLatLng.lng], [_gmC.lat(), _gmC.lng()], kEPS)) {
	              console.info('GoogleMap center not eq:', // eslint-disable-line no-console
	              [centerLatLng.lat, centerLatLng.lng], [_gmC.lat(), _gmC.lng()]);
	            }

	            if (!(0, _array_helper2.default)(bounds, [ne.lat(), sw.lng(), sw.lat(), ne.lng()], kEPS)) {
	              // this is normal if this message occured on resize
	              console.info('GoogleMap bounds not eq:', '\n', // eslint-disable-line no-console
	              bounds, '\n', [ne.lat(), sw.lng(), sw.lat(), ne.lng()]);
	            }
	          }
	        }
	      }
	    };

	    _this.mounted_ = false;
	    _this.initialized_ = false;
	    _this.googleApiLoadedCalled_ = false;

	    _this.map_ = null;
	    _this.maps_ = null;
	    _this.prevBounds_ = null;

	    _this.mouse_ = null;
	    _this.mouseMoveTime_ = 0;
	    _this.boundingRect_ = null;
	    _this.mouseInMap_ = true;

	    _this.dragTime_ = 0;
	    _this.fireMouseEventOnIdle_ = false;
	    _this.updateCounter_ = 0;

	    _this.markersDispatcher_ = new _marker_dispatcher2.default(_this);
	    _this.geoService_ = new _geo2.default(K_GOOGLE_TILE_SIZE);
	    _this.centerIsObject_ = (0, _is_plain_object2.default)(_this.props.center);

	    _this.minZoom_ = DEFAULT_MIN_ZOOM;
	    _this.defaultDraggableOption_ = true;

	    _this.zoomControlClickTime_ = 0;

	    _this.childMouseDownArgs_ = null;
	    _this.childMouseUpTime_ = 0;

	    if (process.env.NODE_ENV !== 'production') {
	      if (_this.props.apiKey) {
	        console.warn('GoogleMap: ' + // eslint-disable-line no-console
	        'apiKey is deprecated, use ' + 'bootstrapURLKeys={{key: YOUR_API_KEY}} instead.');
	      }

	      if (_this.props.onBoundsChange) {
	        console.warn('GoogleMap: ' + // eslint-disable-line no-console
	        'onBoundsChange is deprecated, use ' + 'onChange({center, zoom, bounds, ...other}) instead.');
	      }

	      if (_this.props.center === undefined && _this.props.defaultCenter === undefined) {
	        console.warn('GoogleMap: center or defaultCenter' + // eslint-disable-line no-console
	        'property must be defined');
	      }

	      if (_this.props.zoom === undefined && _this.props.defaultZoom === undefined) {
	        console.warn('GoogleMap: zoom or defaultZoom' + // eslint-disable-line no-console
	        'property must be defined');
	      }
	    }

	    if (_this._isCenterDefined(_this.props.center || _this.props.defaultCenter)) {
	      var propsCenter = latLng2Obj(_this.props.center || _this.props.defaultCenter);
	      _this.geoService_.setView(propsCenter, _this.props.zoom || _this.props.defaultZoom, 0);
	    }

	    _this.zoomAnimationInProgress_ = false;

	    _this.state = {
	      overlayCreated: false
	    };
	    return _this;
	  }

	  _createClass(GoogleMap, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      this.mounted_ = true;
	      window.addEventListener('resize', this._onWindowResize);
	      window.addEventListener('keydown', this._onKeyDownCapture, true);

	      // gmap can't prevent map drag if mousedown event already occured
	      // the only workaround I find is prevent mousedown native browser event
	      _reactDom2.default.findDOMNode(this.refs.google_map_dom).addEventListener('mousedown', this._onMapMouseDownNative, true);

	      window.addEventListener('mouseup', this._onChildMouseUp, false);

	      var bootstrapURLKeys = _extends({}, this.props.apiKey && { key: this.props.apiKey }, this.props.bootstrapURLKeys);

	      this.props.googleMapLoader(bootstrapURLKeys); // we can start load immediatly

	      setTimeout(function () {
	        // to detect size
	        _this2._setViewSize();
	        if (_this2._isCenterDefined(_this2.props.center || _this2.props.defaultCenter)) {
	          _this2._initMap();
	        }
	      }, 0, this);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var _this3 = this;

	      if (process.env.NODE_ENV !== 'production') {
	        if (this.props.defaultCenter !== nextProps.defaultCenter) {
	          console.warn('GoogleMap: defaultCenter prop changed. ' + // eslint-disable-line
	          'You can\'t change default props.');
	        }

	        if (this.props.defaultZoom !== nextProps.defaultZoom) {
	          console.warn('GoogleMap: defaultZoom prop changed. ' + // eslint-disable-line
	          'You can\'t change default props.');
	        }
	      }

	      if (!this._isCenterDefined(this.props.center) && this._isCenterDefined(nextProps.center)) {
	        setTimeout(function () {
	          return _this3._initMap();
	        }, 0);
	      }

	      if (this.map_) {
	        var centerLatLng = this.geoService_.getCenter();
	        if (this._isCenterDefined(nextProps.center)) {
	          var nextPropsCenter = latLng2Obj(nextProps.center);
	          var currCenter = this._isCenterDefined(this.props.center) ? latLng2Obj(this.props.center) : null;

	          if (!currCenter || Math.abs(nextPropsCenter.lat - currCenter.lat) + Math.abs(nextPropsCenter.lng - currCenter.lng) > kEPS) {
	            if (Math.abs(nextPropsCenter.lat - centerLatLng.lat) + Math.abs(nextPropsCenter.lng - centerLatLng.lng) > kEPS) {
	              this.map_.panTo({ lat: nextPropsCenter.lat, lng: nextPropsCenter.lng });
	            }
	          }
	        }

	        if (nextProps.zoom !== undefined) {
	          // if zoom chaged by user
	          if (Math.abs(nextProps.zoom - this.props.zoom) > 0) {
	            this.map_.setZoom(nextProps.zoom);
	          }
	        }

	        if (this.props.draggable !== undefined && nextProps.draggable === undefined) {
	          // reset to default
	          this.map_.setOptions({ draggable: this.defaultDraggableOption_ });
	        } else if (this.props.draggable !== nextProps.draggable) {
	          // also prevent this on window 'mousedown' event to prevent map move
	          this.map_.setOptions({ draggable: nextProps.draggable });
	        }
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      // draggable does not affect inner components
	      return !(0, _shallowEqual2.default)((0, _omit2.default)(this.props, ['draggable']), (0, _omit2.default)(nextProps, ['draggable'])) || !(0, _shallowEqual2.default)(this.state, nextState);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      this.markersDispatcher_.emit('kON_CHANGE');

	      if (this.props.hoverDistance !== prevProps.hoverDistance) {
	        this.markersDispatcher_.emit('kON_MOUSE_POSITION_CHANGE');
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.mounted_ = false;

	      window.removeEventListener('resize', this._onWindowResize);
	      window.removeEventListener('keydown', this._onKeyDownCapture);
	      _reactDom2.default.findDOMNode(this.refs.google_map_dom).removeEventListener('mousedown', this._onMapMouseDownNative, true);
	      window.removeEventListener('mouseup', this._onChildMouseUp, false);

	      if (this.overlay_) {
	        // this triggers overlay_.onRemove(), which will unmount the <GoogleMapMarkers/>
	        this.overlay_.setMap(null);
	      }

	      if (this.maps_ && this.map_) {
	        this.maps_.event.clearInstanceListeners(this.map_);
	      }

	      this.map_ = null;
	      this.maps_ = null;
	      this.markersDispatcher_.dispose();

	      this.resetSizeOnIdle_ = false;

	      delete this.map_;
	      delete this.markersDispatcher_;
	    }

	    // calc minZoom if map size available
	    // it's better to not set minZoom less than this calculation gives
	    // otherwise there is no homeomorphism between screen coordinates and map
	    // (one map coordinate can have different screen coordinates)


	    // this method works only if this.props.onChildMouseDown was called


	    // this method works only if this.props.onChildMouseDown was called


	    // K_IDLE_CLICK_TIMEOUT - looks like 300 is enough


	    // gmap can't prevent map drag if mousedown event already occured
	    // the only workaround I find is prevent mousedown native browser event

	  }, {
	    key: 'render',
	    value: function render() {
	      var mapMarkerPrerender = !this.state.overlayCreated ? _react2.default.createElement(_google_map_markers_prerender2.default, {
	        experimental: this.props.experimental,
	        onChildClick: this._onChildClick,
	        onChildMouseDown: this._onChildMouseDown,
	        onChildMouseEnter: this._onChildMouseEnter,
	        onChildMouseLeave: this._onChildMouseLeave,
	        geoService: this.geoService_,
	        projectFromLeftTop: false,
	        distanceToMouse: this.props.distanceToMouse,
	        getHoverDistance: this._getHoverDistance,
	        dispatcher: this.markersDispatcher_
	      }) : null;

	      return _react2.default.createElement(
	        'div',
	        {
	          style: this.props.style,
	          onMouseMove: this._onMapMouseMove,
	          onMouseDownCapture: this._onMapMouseDownCapture,
	          onClick: this._onMapClick
	        },
	        _react2.default.createElement(_google_map_map2.default, { ref: 'google_map_dom' }),
	        mapMarkerPrerender
	      );
	    }
	  }]);

	  return GoogleMap;
	}(_react.Component);

	GoogleMap.propTypes = {
	  apiKey: _react.PropTypes.string,
	  bootstrapURLKeys: _react.PropTypes.any,

	  defaultCenter: _react2.default.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.shape({
	    lat: _react.PropTypes.number,
	    lng: _react.PropTypes.number
	  })]),
	  center: _react2.default.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.shape({
	    lat: _react.PropTypes.number,
	    lng: _react.PropTypes.number
	  })]),
	  defaultZoom: _react.PropTypes.number,
	  zoom: _react.PropTypes.number,
	  onBoundsChange: _react.PropTypes.func,
	  onChange: _react.PropTypes.func,
	  onClick: _react.PropTypes.func,
	  onChildClick: _react.PropTypes.func,
	  onChildMouseDown: _react.PropTypes.func,
	  onChildMouseUp: _react.PropTypes.func,
	  onChildMouseMove: _react.PropTypes.func,
	  onChildMouseEnter: _react.PropTypes.func,
	  onChildMouseLeave: _react.PropTypes.func,
	  onZoomAnimationStart: _react.PropTypes.func,
	  onZoomAnimationEnd: _react.PropTypes.func,
	  onDrag: _react.PropTypes.func,
	  options: _react.PropTypes.any,
	  distanceToMouse: _react.PropTypes.func,
	  hoverDistance: _react.PropTypes.number,
	  debounced: _react.PropTypes.bool,
	  margin: _react.PropTypes.array,
	  googleMapLoader: _react.PropTypes.any,
	  onGoogleApiLoaded: _react.PropTypes.func,
	  yesIWantToUseGoogleMapApiInternals: _react.PropTypes.bool,
	  draggable: _react.PropTypes.bool,
	  style: _react.PropTypes.any
	};
	GoogleMap.defaultProps = {
	  distanceToMouse: function distanceToMouse(pt, mousePos /* , markerProps */) {
	    return Math.sqrt((pt.x - mousePos.x) * (pt.x - mousePos.x) + (pt.y - mousePos.y) * (pt.y - mousePos.y));
	  },

	  hoverDistance: 30,
	  debounced: true,
	  options: defaultOptions_,
	  googleMapLoader: _google_map_loader2.default,
	  yesIWantToUseGoogleMapApiInternals: false,
	  style: {
	    width: '100%',
	    height: '100%',
	    margin: 0,
	    padding: 0,
	    position: 'relative'
	  }
	};
	GoogleMap.googleMapLoader = _google_map_loader2.default;
	exports.default = GoogleMap;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _eventemitter = __webpack_require__(272);

	var _eventemitter2 = _interopRequireDefault(_eventemitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MarkerDispatcher = function (_EventEmitter) {
	  _inherits(MarkerDispatcher, _EventEmitter);

	  function MarkerDispatcher(gmapInstance) {
	    _classCallCheck(this, MarkerDispatcher);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MarkerDispatcher).call(this));

	    _this.gmapInstance = gmapInstance;
	    return _this;
	  }

	  _createClass(MarkerDispatcher, [{
	    key: 'getChildren',
	    value: function getChildren() {
	      return this.gmapInstance.props.children;
	    }
	  }, {
	    key: 'getMousePosition',
	    value: function getMousePosition() {
	      return this.gmapInstance.mouse_;
	    }
	  }, {
	    key: 'getUpdateCounter',
	    value: function getUpdateCounter() {
	      return this.gmapInstance.updateCounter_;
	    }
	  }, {
	    key: 'dispose',
	    value: function dispose() {
	      this.gmapInstance = null;
	      this.removeAllListeners();
	    }
	  }]);

	  return MarkerDispatcher;
	}(_eventemitter2.default);

	exports.default = MarkerDispatcher;

/***/ },

/***/ 272:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var has = Object.prototype.hasOwnProperty;

	//
	// We store our EE objects in a plain object whose properties are event names.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// `~` to make sure that the built-in object properties are not overridden or
	// used as an attack vector.
	// We also assume that `Object.create(null)` is available when the event name
	// is an ES6 Symbol.
	//
	var prefix = typeof Object.create !== 'function' ? '~' : false;

	/**
	 * Representation of a single EventEmitter function.
	 *
	 * @param {Function} fn Event handler to be called.
	 * @param {Mixed} context Context for function execution.
	 * @param {Boolean} [once=false] Only emit once
	 * @api private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}

	/**
	 * Minimal EventEmitter interface that is molded against the Node.js
	 * EventEmitter interface.
	 *
	 * @constructor
	 * @api public
	 */
	function EventEmitter() { /* Nothing to set */ }

	/**
	 * Hold the assigned EventEmitters by name.
	 *
	 * @type {Object}
	 * @private
	 */
	EventEmitter.prototype._events = undefined;

	/**
	 * Return an array listing the events for which the emitter has registered
	 * listeners.
	 *
	 * @returns {Array}
	 * @api public
	 */
	EventEmitter.prototype.eventNames = function eventNames() {
	  var events = this._events
	    , names = []
	    , name;

	  if (!events) return names;

	  for (name in events) {
	    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
	  }

	  if (Object.getOwnPropertySymbols) {
	    return names.concat(Object.getOwnPropertySymbols(events));
	  }

	  return names;
	};

	/**
	 * Return a list of assigned event listeners.
	 *
	 * @param {String} event The events that should be listed.
	 * @param {Boolean} exists We only need to know if there are listeners.
	 * @returns {Array|Boolean}
	 * @api public
	 */
	EventEmitter.prototype.listeners = function listeners(event, exists) {
	  var evt = prefix ? prefix + event : event
	    , available = this._events && this._events[evt];

	  if (exists) return !!available;
	  if (!available) return [];
	  if (available.fn) return [available.fn];

	  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
	    ee[i] = available[i].fn;
	  }

	  return ee;
	};

	/**
	 * Emit an event to all registered event listeners.
	 *
	 * @param {String} event The name of the event.
	 * @returns {Boolean} Indication if we've emitted an event.
	 * @api public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events || !this._events[evt]) return false;

	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;

	  if ('function' === typeof listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }

	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }

	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;

	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }

	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }

	  return true;
	};

	/**
	 * Register a new EventListener for the given event.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} [context=this] The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this)
	    , evt = prefix ? prefix + event : event;

	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }

	  return this;
	};

	/**
	 * Add an EventListener that's only called once.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} [context=this] The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true)
	    , evt = prefix ? prefix + event : event;

	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }

	  return this;
	};

	/**
	 * Remove event listeners.
	 *
	 * @param {String} event The event we want to remove.
	 * @param {Function} fn The listener that we need to find.
	 * @param {Mixed} context Only remove listeners matching this context.
	 * @param {Boolean} once Only remove once listeners.
	 * @api public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events || !this._events[evt]) return this;

	  var listeners = this._events[evt]
	    , events = [];

	  if (fn) {
	    if (listeners.fn) {
	      if (
	           listeners.fn !== fn
	        || (once && !listeners.once)
	        || (context && listeners.context !== context)
	      ) {
	        events.push(listeners);
	      }
	    } else {
	      for (var i = 0, length = listeners.length; i < length; i++) {
	        if (
	             listeners[i].fn !== fn
	          || (once && !listeners[i].once)
	          || (context && listeners[i].context !== context)
	        ) {
	          events.push(listeners[i]);
	        }
	      }
	    }
	  }

	  //
	  // Reset the array, or remove it completely if we have no more listeners.
	  //
	  if (events.length) {
	    this._events[evt] = events.length === 1 ? events[0] : events;
	  } else {
	    delete this._events[evt];
	  }

	  return this;
	};

	/**
	 * Remove all listeners or only the listeners for the specified event.
	 *
	 * @param {String} event The event want to remove all listeners for.
	 * @api public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  if (!this._events) return this;

	  if (event) delete this._events[prefix ? prefix + event : event];
	  else this._events = prefix ? {} : Object.create(null);

	  return this;
	};

	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	//
	// This function doesn't apply anymore.
	//
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};

	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;

	//
	// Expose the module.
	//
	if (true) {
	  module.exports = EventEmitter;
	}


/***/ },

/***/ 273:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = {
	  width: '100%',
	  height: '100%',
	  left: 0,
	  top: 0,
	  margin: 0,
	  padding: 0,
	  position: 'absolute'
	};

	var GoogleMapMap = function (_Component) {
	  _inherits(GoogleMapMap, _Component);

	  function GoogleMapMap() {
	    _classCallCheck(this, GoogleMapMap);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(GoogleMapMap).apply(this, arguments));
	  }

	  _createClass(GoogleMapMap, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate() {
	      return false; // disable react on this div
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', { style: style });
	    }
	  }]);

	  return GoogleMapMap;
	}(_react.Component);

	exports.default = GoogleMapMap;

/***/ },

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _shallowEqual = __webpack_require__(133);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _omit = __webpack_require__(275);

	var _omit2 = _interopRequireDefault(_omit);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var mainStyle = {
	  width: '100%',
	  height: '100%',
	  left: 0,
	  top: 0,
	  margin: 0,
	  padding: 0,
	  position: 'absolute'
	};

	var style = {
	  width: 0,
	  height: 0,
	  left: 0,
	  top: 0,
	  backgroundColor: 'transparent',
	  position: 'absolute'
	};

	var GoogleMapMarkers = function (_Component) {
	  _inherits(GoogleMapMarkers, _Component);

	  function GoogleMapMarkers(props) {
	    _classCallCheck(this, GoogleMapMarkers);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GoogleMapMarkers).call(this, props));

	    _this._getState = function () {
	      return {
	        children: _this.props.dispatcher.getChildren(),
	        updateCounter: _this.props.dispatcher.getUpdateCounter()
	      };
	    };

	    _this._onChangeHandler = function () {
	      if (!_this.dimesionsCache_) {
	        return;
	      }

	      var prevChildCount = (_this.state.children || []).length;
	      var state = _this._getState();

	      _this.setState(state, function () {
	        return (state.children || []).length !== prevChildCount && _this._onMouseChangeHandler();
	      });
	    };

	    _this._onChildClick = function () {
	      if (_this.props.onChildClick) {
	        if (_this.hoverChildProps_) {
	          var hoverKey = _this.hoverKey_;
	          var childProps = _this.hoverChildProps_;
	          // click works only on hovered item
	          _this.props.onChildClick(hoverKey, childProps);
	        }
	      }
	    };

	    _this._onChildMouseDown = function () {
	      if (_this.props.onChildMouseDown) {
	        if (_this.hoverChildProps_) {
	          var hoverKey = _this.hoverKey_;
	          var childProps = _this.hoverChildProps_;
	          // works only on hovered item
	          _this.props.onChildMouseDown(hoverKey, childProps);
	        }
	      }
	    };

	    _this._onChildMouseEnter = function (hoverKey, childProps) {
	      if (!_this.dimesionsCache_) {
	        return;
	      }

	      if (_this.props.onChildMouseEnter) {
	        _this.props.onChildMouseEnter(hoverKey, childProps);
	      }

	      _this.hoverChildProps_ = childProps;
	      _this.hoverKey_ = hoverKey;
	      _this.setState({ hoverKey: hoverKey });
	    };

	    _this._onChildMouseLeave = function () {
	      if (!_this.dimesionsCache_) {
	        return;
	      }

	      var hoverKey = _this.hoverKey_;
	      var childProps = _this.hoverChildProps_;

	      if (hoverKey !== undefined && hoverKey !== null) {
	        if (_this.props.onChildMouseLeave) {
	          _this.props.onChildMouseLeave(hoverKey, childProps);
	        }

	        _this.hoverKey_ = null;
	        _this.hoverChildProps_ = null;
	        _this.setState({ hoverKey: null });
	      }
	    };

	    _this._onMouseAllow = function (value) {
	      if (!value) {
	        _this._onChildMouseLeave();
	      }

	      _this.allowMouse_ = value;
	    };

	    _this._onMouseChangeHandler = function () {
	      if (_this.allowMouse_) {
	        _this._onMouseChangeHandler_raf();
	      }
	    };

	    _this._onMouseChangeHandler_raf = function () {
	      if (!_this.dimesionsCache_) {
	        return;
	      }

	      var mp = _this.props.dispatcher.getMousePosition();

	      if (mp) {
	        (function () {
	          var distances = [];
	          var hoverDistance = _this.props.getHoverDistance();

	          _react2.default.Children.forEach(_this.state.children, function (child, childIndex) {
	            // layers
	            if (child.props.latLng === undefined && child.props.lat === undefined && child.props.lng === undefined) {
	              return;
	            }

	            var childKey = child.key !== undefined && child.key !== null ? child.key : childIndex;
	            var dist = _this.props.distanceToMouse(_this.dimesionsCache_[childKey], mp, child.props);
	            if (dist < hoverDistance) {
	              distances.push({
	                key: childKey,
	                dist: dist,
	                props: child.props
	              });
	            }
	          });

	          if (distances.length) {
	            distances.sort(function (a, b) {
	              return a.dist - b.dist;
	            });
	            var hoverKey = distances[0].key;
	            var childProps = distances[0].props;

	            if (_this.hoverKey_ !== hoverKey) {
	              _this._onChildMouseLeave();

	              _this._onChildMouseEnter(hoverKey, childProps);
	            }
	          } else {
	            _this._onChildMouseLeave();
	          }
	        })();
	      } else {
	        _this._onChildMouseLeave();
	      }
	    };

	    _this._getDimensions = function (key) {
	      var childKey = key;
	      return _this.dimesionsCache_[childKey];
	    };

	    _this.props.dispatcher.on('kON_CHANGE', _this._onChangeHandler);
	    _this.props.dispatcher.on('kON_MOUSE_POSITION_CHANGE', _this._onMouseChangeHandler);
	    _this.props.dispatcher.on('kON_CLICK', _this._onChildClick);
	    _this.props.dispatcher.on('kON_MDOWN', _this._onChildMouseDown);

	    _this.dimesionsCache_ = {};
	    _this.hoverKey_ = null;
	    _this.hoverChildProps_ = null;
	    _this.allowMouse_ = true;

	    _this.state = _extends({}, _this._getState(), { hoverKey: null });
	    return _this;
	  }

	  _createClass(GoogleMapMarkers, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      if (this.props.experimental === true) {
	        return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)((0, _omit2.default)(this.state, ['hoverKey']), (0, _omit2.default)(nextState, ['hoverKey']));
	      }

	      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.props.dispatcher.removeListener('kON_CHANGE', this._onChangeHandler);
	      this.props.dispatcher.removeListener('kON_MOUSE_POSITION_CHANGE', this._onMouseChangeHandler);
	      this.props.dispatcher.removeListener('kON_CLICK', this._onChildClick);
	      this.props.dispatcher.removeListener('kON_MDOWN', this._onChildMouseDown);

	      this.dimesionsCache_ = null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var mainElementStyle = this.props.style || mainStyle;
	      this.dimesionsCache_ = {};

	      var markers = _react2.default.Children.map(this.state.children, function (child, childIndex) {
	        if (child.props.latLng === undefined && child.props.lat === undefined && child.props.lng === undefined) {
	          return _react2.default.cloneElement(child, {
	            $geoService: _this2.props.geoService,
	            $onMouseAllow: _this2._onMouseAllow,
	            $prerender: _this2.props.prerender
	          });
	        }

	        var latLng = child.props.latLng !== undefined ? child.props.latLng : { lat: child.props.lat, lng: child.props.lng };

	        var pt = _this2.props.geoService.project(latLng, _this2.props.projectFromLeftTop);

	        var stylePtPos = {
	          left: pt.x,
	          top: pt.y
	        };

	        var dx = 0;
	        var dy = 0;

	        if (!_this2.props.projectFromLeftTop) {
	          // center projection
	          if (_this2.props.geoService.hasSize()) {
	            dx = _this2.props.geoService.getWidth() / 2;
	            dy = _this2.props.geoService.getHeight() / 2;
	          }
	        }

	        // to prevent rerender on child element i need to pass
	        // const params $getDimensions and $dimensionKey instead of dimension object
	        var childKey = child.key !== undefined && child.key !== null ? child.key : childIndex;

	        _this2.dimesionsCache_[childKey] = _extends({
	          x: pt.x + dx,
	          y: pt.y + dy
	        }, latLng);

	        return _react2.default.createElement(
	          'div',
	          {
	            key: childKey,
	            style: _extends({}, style, stylePtPos),
	            className: child.props.$markerHolderClassName
	          },
	          _react2.default.cloneElement(child, {
	            $hover: childKey === _this2.state.hoverKey,
	            $getDimensions: _this2._getDimensions,
	            $dimensionKey: childKey,
	            $geoService: _this2.props.geoService,
	            $onMouseAllow: _this2._onMouseAllow,
	            $prerender: _this2.props.prerender
	          })
	        );
	      });

	      return _react2.default.createElement(
	        'div',
	        { style: mainElementStyle },
	        markers
	      );
	    }
	  }]);

	  return GoogleMapMarkers;
	}(_react.Component);

	GoogleMapMarkers.propTypes = {
	  geoService: _react.PropTypes.any,
	  style: _react.PropTypes.any,
	  distanceToMouse: _react.PropTypes.func,
	  dispatcher: _react.PropTypes.any,
	  onChildClick: _react.PropTypes.func,
	  onChildMouseDown: _react.PropTypes.func,
	  onChildMouseLeave: _react.PropTypes.func,
	  onChildMouseEnter: _react.PropTypes.func,
	  getHoverDistance: _react.PropTypes.func,
	  projectFromLeftTop: _react.PropTypes.bool,
	  prerender: _react.PropTypes.bool
	};
	GoogleMapMarkers.defaultProps = {
	  projectFromLeftTop: false,
	  prerender: false
	};
	exports.default = GoogleMapMarkers;

/***/ },

/***/ 275:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	// https://github.com/acdlite/recompose/blob/master/src/packages/recompose/utils/omit.js
	var omit = function omit(obj, keys) {
	  var rest = _objectWithoutProperties(obj, []);

	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (rest.hasOwnProperty(key)) {
	      delete rest[key];
	    }
	  }
	  return rest;
	};

	exports.default = omit;

/***/ },

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = function (props) {
	  return _react2.default.createElement(
	    'div',
	    { style: style },
	    _react2.default.createElement(_google_map_markers2.default, _extends({}, props, { prerender: true }))
	  );
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _google_map_markers = __webpack_require__(274);

	var _google_map_markers2 = _interopRequireDefault(_google_map_markers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var style = {
	  width: '50%',
	  height: '50%',
	  left: '50%',
	  top: '50%',
	  // backgroundColor: 'red',
	  margin: 0,
	  padding: 0,
	  position: 'absolute'
	}; // opacity: 0.3

/***/ },

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = googleMapLoader;
	var $script_ = null;

	var loadPromise_ = void 0;

	var resolveCustomPromise_ = void 0;
	var _customPromise = new Promise(function (resolve) {
	  resolveCustomPromise_ = resolve;
	});

	// TODO add libraries language and other map options
	function googleMapLoader(bootstrapURLKeys) {
	  if (!$script_) {
	    $script_ = __webpack_require__(278); // eslint-disable-line
	  }

	  // call from outside google-map-react
	  // will be as soon as loadPromise_ resolved
	  if (!bootstrapURLKeys) {
	    return _customPromise;
	  }

	  if (loadPromise_) {
	    return loadPromise_;
	  }

	  loadPromise_ = new Promise(function (resolve, reject) {
	    if (typeof window === 'undefined') {
	      reject(new Error('google map cannot be loaded outside browser env'));
	      return;
	    }

	    if (window.google && window.google.maps) {
	      resolve(window.google.maps);
	      return;
	    }

	    if (typeof window._$_google_map_initialize_$_ !== 'undefined') {
	      reject(new Error('google map initialization error'));
	    }

	    window._$_google_map_initialize_$_ = function () {
	      delete window._$_google_map_initialize_$_;
	      resolve(window.google.maps);
	    };

	    if (process.env.NODE_ENV !== 'production') {
	      if (Object.keys(bootstrapURLKeys).indexOf('callback') > -1) {
	        console.error('"callback" key in bootstrapURLKeys is not allowed, ' + // eslint-disable-line
	        'use onGoogleApiLoaded property instead');
	        throw new Error('"callback" key in bootstrapURLKeys is not allowed, ' + 'use onGoogleApiLoaded property instead');
	      }
	    }

	    var queryString = Object.keys(bootstrapURLKeys).reduce(function (r, key) {
	      return r + '&' + key + '=' + bootstrapURLKeys[key];
	    }, '');

	    $script_('https://maps.googleapis.com/maps/api/js?callback=_$_google_map_initialize_$_' + queryString, function () {
	      return typeof window.google === 'undefined' && reject(new Error('google map initialization error (not loaded)'));
	    });
	  });

	  resolveCustomPromise_(loadPromise_);

	  return loadPromise_;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  * $script.js JS loader & dependency manager
	  * https://github.com/ded/script.js
	  * (c) Dustin Diaz 2014 | License MIT
	  */

	(function (name, definition) {
	  if (typeof module != 'undefined' && module.exports) module.exports = definition()
	  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  else this[name] = definition()
	})('$script', function () {
	  var doc = document
	    , head = doc.getElementsByTagName('head')[0]
	    , s = 'string'
	    , f = false
	    , push = 'push'
	    , readyState = 'readyState'
	    , onreadystatechange = 'onreadystatechange'
	    , list = {}
	    , ids = {}
	    , delay = {}
	    , scripts = {}
	    , scriptpath
	    , urlArgs

	  function every(ar, fn) {
	    for (var i = 0, j = ar.length; i < j; ++i) if (!fn(ar[i])) return f
	    return 1
	  }
	  function each(ar, fn) {
	    every(ar, function (el) {
	      return !fn(el)
	    })
	  }

	  function $script(paths, idOrDone, optDone) {
	    paths = paths[push] ? paths : [paths]
	    var idOrDoneIsDone = idOrDone && idOrDone.call
	      , done = idOrDoneIsDone ? idOrDone : optDone
	      , id = idOrDoneIsDone ? paths.join('') : idOrDone
	      , queue = paths.length
	    function loopFn(item) {
	      return item.call ? item() : list[item]
	    }
	    function callback() {
	      if (!--queue) {
	        list[id] = 1
	        done && done()
	        for (var dset in delay) {
	          every(dset.split('|'), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = [])
	        }
	      }
	    }
	    setTimeout(function () {
	      each(paths, function loading(path, force) {
	        if (path === null) return callback()
	        
	        if (!force && !/^https?:\/\//.test(path) && scriptpath) {
	          path = (path.indexOf('.js') === -1) ? scriptpath + path + '.js' : scriptpath + path;
	        }
	        
	        if (scripts[path]) {
	          if (id) ids[id] = 1
	          return (scripts[path] == 2) ? callback() : setTimeout(function () { loading(path, true) }, 0)
	        }

	        scripts[path] = 1
	        if (id) ids[id] = 1
	        create(path, callback)
	      })
	    }, 0)
	    return $script
	  }

	  function create(path, fn) {
	    var el = doc.createElement('script'), loaded
	    el.onload = el.onerror = el[onreadystatechange] = function () {
	      if ((el[readyState] && !(/^c|loade/.test(el[readyState]))) || loaded) return;
	      el.onload = el[onreadystatechange] = null
	      loaded = 1
	      scripts[path] = 2
	      fn()
	    }
	    el.async = 1
	    el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;
	    head.insertBefore(el, head.lastChild)
	  }

	  $script.get = create

	  $script.order = function (scripts, id, done) {
	    (function callback(s) {
	      s = scripts.shift()
	      !scripts.length ? $script(s, id, done) : $script(s, callback)
	    }())
	  }

	  $script.path = function (p) {
	    scriptpath = p
	  }
	  $script.urlArgs = function (str) {
	    urlArgs = str;
	  }
	  $script.ready = function (deps, ready, req) {
	    deps = deps[push] ? deps : [deps]
	    var missing = [];
	    !each(deps, function (dep) {
	      list[dep] || missing[push](dep);
	    }) && every(deps, function (dep) {return list[dep]}) ?
	      ready() : !function (key) {
	      delay[key] = delay[key] || []
	      delay[key][push](ready)
	      req && req(missing)
	    }(deps.join('|'))
	    return $script
	  }

	  $script.done = function (idOrDone) {
	    $script([null], idOrDone)
	  }

	  return $script
	});


/***/ },

/***/ 279:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = detectBrowser;
	// http://stackoverflow.com/questions/5899783/detect-safari-chrome-ie-firefox-opera-with-user-agent
	var detectBrowserResult_ = null;

	function detectBrowser() {
	  if (detectBrowserResult_) {
	    return detectBrowserResult_;
	  }

	  if (typeof navigator !== 'undefined') {
	    var isExplorer = navigator.userAgent.indexOf('MSIE') > -1;
	    var isFirefox = navigator.userAgent.indexOf('Firefox') > -1;
	    var isOpera = navigator.userAgent.toLowerCase().indexOf('op') > -1;

	    var isChrome = navigator.userAgent.indexOf('Chrome') > -1;
	    var isSafari = navigator.userAgent.indexOf('Safari') > -1;

	    if (isChrome && isSafari) {
	      isSafari = false;
	    }

	    if (isChrome && isOpera) {
	      isChrome = false;
	    }

	    detectBrowserResult_ = { isExplorer: isExplorer, isFirefox: isFirefox, isOpera: isOpera, isChrome: isChrome, isSafari: isSafari };
	    return detectBrowserResult_;
	  }

	  detectBrowserResult_ = {
	    isChrome: true,
	    isExplorer: false,
	    isFirefox: false,
	    isOpera: false,
	    isSafari: false
	  };

	  return detectBrowserResult_;
	}

/***/ },

/***/ 280:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _lat_lng = __webpack_require__(281);

	var _lat_lng2 = _interopRequireDefault(_lat_lng);

	var _pointGeometry = __webpack_require__(283);

	var _pointGeometry2 = _interopRequireDefault(_pointGeometry);

	var _transform = __webpack_require__(284);

	var _transform2 = _interopRequireDefault(_transform);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Geo = function () {
	  function Geo(tileSize) {
	    _classCallCheck(this, Geo);

	    // left_top view пользует гугл
	    // super();
	    this.hasSize_ = false;
	    this.hasView_ = false;
	    this.transform_ = new _transform2.default(tileSize || 512);
	  }

	  _createClass(Geo, [{
	    key: 'setView',
	    value: function setView(center, zoom, bearing) {
	      this.transform_.center = _lat_lng2.default.convert(center);
	      this.transform_.zoom = +zoom;
	      this.transform_.bearing = +bearing;
	      this.hasView_ = true;
	    }
	  }, {
	    key: 'setViewSize',
	    value: function setViewSize(width, height) {
	      this.transform_.width = width;
	      this.transform_.height = height;
	      this.hasSize_ = true;
	    }
	  }, {
	    key: 'canProject',
	    value: function canProject() {
	      return this.hasSize_ && this.hasView_;
	    }
	  }, {
	    key: 'hasSize',
	    value: function hasSize() {
	      return this.hasSize_;
	    }
	  }, {
	    key: 'unproject',
	    value: function unproject(ptXY, viewFromLeftTop) {
	      var ptRes = void 0;
	      if (viewFromLeftTop) {
	        var ptxy = _extends({}, ptXY);
	        ptxy.x -= this.transform_.width / 2;
	        ptxy.y -= this.transform_.height / 2;
	        ptRes = this.transform_.pointLocation(_pointGeometry2.default.convert(ptxy));
	      } else {
	        ptRes = this.transform_.pointLocation(_pointGeometry2.default.convert(ptXY));
	      }

	      ptRes.lng -= 360 * Math.round(ptRes.lng / 360); // convert 2 google format
	      return ptRes;
	    }
	  }, {
	    key: 'project',
	    value: function project(ptLatLng, viewFromLeftTop) {
	      if (viewFromLeftTop) {
	        var pt = this.transform_.locationPoint(_lat_lng2.default.convert(ptLatLng));
	        pt.x -= this.transform_.worldSize * Math.round(pt.x / this.transform_.worldSize);

	        pt.x += this.transform_.width / 2;
	        pt.y += this.transform_.height / 2;

	        return pt;
	      }

	      return this.transform_.locationPoint(_lat_lng2.default.convert(ptLatLng));
	    }
	  }, {
	    key: 'getWidth',
	    value: function getWidth() {
	      return this.transform_.width;
	    }
	  }, {
	    key: 'getHeight',
	    value: function getHeight() {
	      return this.transform_.height;
	    }
	  }, {
	    key: 'getZoom',
	    value: function getZoom() {
	      return this.transform_.zoom;
	    }
	  }, {
	    key: 'getCenter',
	    value: function getCenter() {
	      var ptRes = this.transform_.pointLocation({ x: 0, y: 0 });

	      return ptRes;
	    }
	  }, {
	    key: 'getBounds',
	    value: function getBounds(margins, roundFactor) {
	      var bndT = margins && margins[0] || 0;
	      var bndR = margins && margins[1] || 0;
	      var bndB = margins && margins[2] || 0;
	      var bndL = margins && margins[3] || 0;

	      if (this.getWidth() - bndR - bndL > 0 && this.getHeight() - bndT - bndB > 0) {
	        var topLeftCorner = this.unproject({
	          x: bndL - this.getWidth() / 2,
	          y: bndT - this.getHeight() / 2
	        });
	        var bottomRightCorner = this.unproject({
	          x: this.getWidth() / 2 - bndR,
	          y: this.getHeight() / 2 - bndB
	        });

	        var res = [topLeftCorner.lat, topLeftCorner.lng, bottomRightCorner.lat, bottomRightCorner.lng];

	        if (roundFactor) {
	          res = res.map(function (r) {
	            return Math.round(r * roundFactor) / roundFactor;
	          });
	        }
	        return res;
	      }

	      return [0, 0, 0, 0];
	    }
	  }]);

	  return Geo;
	}();

	exports.default = Geo;

/***/ },

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _wrap2 = __webpack_require__(282);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var LatLng = function () {
	  function LatLng(lat, lng) {
	    _classCallCheck(this, LatLng);

	    if (isNaN(lat) || isNaN(lng)) {
	      throw new Error('Invalid LatLng object: (' + lat + ', ' + lng + ')');
	    }
	    this.lat = +lat;
	    this.lng = +lng;
	  }

	  _createClass(LatLng, [{
	    key: 'wrap',
	    value: function wrap() {
	      return new LatLng(this.lat, (0, _wrap2.wrap)(this.lng, -180, 180));
	    }
	  }]);

	  return LatLng;
	}();

	LatLng.convert = function (a) {
	  if (a instanceof LatLng) {
	    return a;
	  }

	  if (Array.isArray(a)) {
	    return new LatLng(a[0], a[1]);
	  }

	  if ('lng' in a && 'lat' in a) {
	    return new LatLng(a.lat, a.lng);
	  }

	  return a;
	};

	exports.default = LatLng;

/***/ },

/***/ 282:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.wrap = wrap;
	function wrap(n, min, max) {
	  var d = max - min;
	  return n === max ? n : ((n - min) % d + d) % d + min;
	}

/***/ },

/***/ 283:
/***/ function(module, exports) {

	'use strict';

	module.exports = Point;

	function Point(x, y) {
	    this.x = x;
	    this.y = y;
	}

	Point.prototype = {
	    clone: function() { return new Point(this.x, this.y); },

	    add:     function(p) { return this.clone()._add(p);     },
	    sub:     function(p) { return this.clone()._sub(p);     },
	    mult:    function(k) { return this.clone()._mult(k);    },
	    div:     function(k) { return this.clone()._div(k);     },
	    rotate:  function(a) { return this.clone()._rotate(a);  },
	    matMult: function(m) { return this.clone()._matMult(m); },
	    unit:    function() { return this.clone()._unit(); },
	    perp:    function() { return this.clone()._perp(); },
	    round:   function() { return this.clone()._round(); },

	    mag: function() {
	        return Math.sqrt(this.x * this.x + this.y * this.y);
	    },

	    equals: function(p) {
	        return this.x === p.x &&
	               this.y === p.y;
	    },

	    dist: function(p) {
	        return Math.sqrt(this.distSqr(p));
	    },

	    distSqr: function(p) {
	        var dx = p.x - this.x,
	            dy = p.y - this.y;
	        return dx * dx + dy * dy;
	    },

	    angle: function() {
	        return Math.atan2(this.y, this.x);
	    },

	    angleTo: function(b) {
	        return Math.atan2(this.y - b.y, this.x - b.x);
	    },

	    angleWith: function(b) {
	        return this.angleWithSep(b.x, b.y);
	    },

	    // Find the angle of the two vectors, solving the formula for the cross product a x b = |a||b|sin(θ) for θ.
	    angleWithSep: function(x, y) {
	        return Math.atan2(
	            this.x * y - this.y * x,
	            this.x * x + this.y * y);
	    },

	    _matMult: function(m) {
	        var x = m[0] * this.x + m[1] * this.y,
	            y = m[2] * this.x + m[3] * this.y;
	        this.x = x;
	        this.y = y;
	        return this;
	    },

	    _add: function(p) {
	        this.x += p.x;
	        this.y += p.y;
	        return this;
	    },

	    _sub: function(p) {
	        this.x -= p.x;
	        this.y -= p.y;
	        return this;
	    },

	    _mult: function(k) {
	        this.x *= k;
	        this.y *= k;
	        return this;
	    },

	    _div: function(k) {
	        this.x /= k;
	        this.y /= k;
	        return this;
	    },

	    _unit: function() {
	        this._div(this.mag());
	        return this;
	    },

	    _perp: function() {
	        var y = this.y;
	        this.y = this.x;
	        this.x = -y;
	        return this;
	    },

	    _rotate: function(angle) {
	        var cos = Math.cos(angle),
	            sin = Math.sin(angle),
	            x = cos * this.x - sin * this.y,
	            y = sin * this.x + cos * this.y;
	        this.x = x;
	        this.y = y;
	        return this;
	    },

	    _round: function() {
	        this.x = Math.round(this.x);
	        this.y = Math.round(this.y);
	        return this;
	    }
	};

	// constructs Point from an array if necessary
	Point.convert = function (a) {
	    if (a instanceof Point) {
	        return a;
	    }
	    if (Array.isArray(a)) {
	        return new Point(a[0], a[1]);
	    }
	    return a;
	};


/***/ },

/***/ 284:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _lat_lng = __webpack_require__(281);

	var _lat_lng2 = _interopRequireDefault(_lat_lng);

	var _pointGeometry = __webpack_require__(283);

	var _pointGeometry2 = _interopRequireDefault(_pointGeometry);

	var _wrap = __webpack_require__(282);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// A single transform, generally used for a single tile to be scaled, rotated, and zoomed.

	var Transform = function () {
	  function Transform(tileSize, minZoom, maxZoom) {
	    _classCallCheck(this, Transform);

	    this.tileSize = tileSize || 512; // constant

	    this._minZoom = minZoom || 0;
	    this._maxZoom = maxZoom || 52;

	    this.latRange = [-85.05113, 85.05113];

	    this.width = 0;
	    this.height = 0;
	    this.zoom = 0;
	    this.center = new _lat_lng2.default(0, 0);
	    this.angle = 0;
	  }

	  _createClass(Transform, [{
	    key: 'zoomScale',
	    value: function zoomScale(zoom) {
	      return Math.pow(2, zoom);
	    }
	  }, {
	    key: 'scaleZoom',
	    value: function scaleZoom(scale) {
	      return Math.log(scale) / Math.LN2;
	    }
	  }, {
	    key: 'project',
	    value: function project(latlng, worldSize) {
	      return new _pointGeometry2.default(this.lngX(latlng.lng, worldSize), this.latY(latlng.lat, worldSize));
	    }
	  }, {
	    key: 'unproject',
	    value: function unproject(point, worldSize) {
	      return new _lat_lng2.default(this.yLat(point.y, worldSize), this.xLng(point.x, worldSize));
	    }
	  }, {
	    key: 'lngX',


	    // lat/lon <-> absolute pixel coords convertion
	    value: function lngX(lon, worldSize) {
	      return (180 + lon) * (worldSize || this.worldSize) / 360;
	    }

	    // latitude to absolute y coord

	  }, {
	    key: 'latY',
	    value: function latY(lat, worldSize) {
	      var y = 180 / Math.PI * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360));
	      return (180 - y) * (worldSize || this.worldSize) / 360;
	    }
	  }, {
	    key: 'xLng',
	    value: function xLng(x, worldSize) {
	      return x * 360 / (worldSize || this.worldSize) - 180;
	    }
	  }, {
	    key: 'yLat',
	    value: function yLat(y, worldSize) {
	      var y2 = 180 - y * 360 / (worldSize || this.worldSize);
	      return 360 / Math.PI * Math.atan(Math.exp(y2 * Math.PI / 180)) - 90;
	    }
	  }, {
	    key: 'locationPoint',
	    value: function locationPoint(latlng) {
	      var p = this.project(latlng);
	      return this.centerPoint._sub(this.point._sub(p)._rotate(this.angle));
	    }
	  }, {
	    key: 'pointLocation',
	    value: function pointLocation(p) {
	      var p2 = this.centerPoint._sub(p)._rotate(-this.angle);
	      return this.unproject(this.point.sub(p2));
	    }
	  }, {
	    key: 'minZoom',
	    get: function get() {
	      return this._minZoom;
	    },
	    set: function set(zoom) {
	      this._minZoom = zoom;
	      this.zoom = Math.max(this.zoom, zoom);
	    }
	  }, {
	    key: 'maxZoom',
	    get: function get() {
	      return this._maxZoom;
	    },
	    set: function set(zoom) {
	      this._maxZoom = zoom;
	      this.zoom = Math.min(this.zoom, zoom);
	    }
	  }, {
	    key: 'worldSize',
	    get: function get() {
	      return this.tileSize * this.scale;
	    }
	  }, {
	    key: 'centerPoint',
	    get: function get() {
	      return new _pointGeometry2.default(0, 0); // this.size._div(2);
	    }
	  }, {
	    key: 'size',
	    get: function get() {
	      return new _pointGeometry2.default(this.width, this.height);
	    }
	  }, {
	    key: 'bearing',
	    get: function get() {
	      return -this.angle / Math.PI * 180;
	    },
	    set: function set(bearing) {
	      this.angle = -(0, _wrap.wrap)(bearing, -180, 180) * Math.PI / 180;
	    }
	  }, {
	    key: 'zoom',
	    get: function get() {
	      return this._zoom;
	    },
	    set: function set(zoom) {
	      var zoomV = Math.min(Math.max(zoom, this.minZoom), this.maxZoom);
	      this._zoom = zoomV;
	      this.scale = this.zoomScale(zoomV);
	      this.tileZoom = Math.floor(zoomV);
	      this.zoomFraction = zoomV - this.tileZoom;
	    }
	  }, {
	    key: 'x',
	    get: function get() {
	      return this.lngX(this.center.lng);
	    }
	  }, {
	    key: 'y',
	    get: function get() {
	      return this.latY(this.center.lat);
	    }
	  }, {
	    key: 'point',
	    get: function get() {
	      return new _pointGeometry2.default(this.x, this.y);
	    }
	  }]);

	  return Transform;
	}();

	exports.default = Transform;

/***/ },

/***/ 285:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isArraysEqualEps;
	function isArraysEqualEps(arrayA, arrayB, eps) {
	  if (arrayA && arrayB) {
	    for (var i = 0; i !== arrayA.length; ++i) {
	      if (Math.abs(arrayA[i] - arrayB[i]) > eps) {
	        return false;
	      }
	    }
	    return true;
	  }
	  return false;
	}

/***/ },

/***/ 286:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = isPlainObject;
	// source taken from https://github.com/rackt/redux/blob/master/src/utils/isPlainObject.js
	var fnToString = function fnToString(fn) {
	  return Function.prototype.toString.call(fn);
	};

	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */
	function isPlainObject(obj) {
	  if (!obj || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
	    return false;
	  }

	  var proto = typeof obj.constructor === 'function' ? Object.getPrototypeOf(obj) : Object.prototype;

	  if (proto === null) {
	    return true;
	  }

	  var constructor = proto.constructor;

	  return typeof constructor === 'function' && constructor instanceof constructor && fnToString(constructor) === fnToString(Object);
	}

/***/ },

/***/ 287:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = pick;
	// source taken from https://github.com/rackt/redux/blob/master/src/utils/pick.js

	function pick(obj, fn) {
	  return Object.keys(obj).reduce(function (result, key) {
	    if (fn(obj[key])) {
	      result[key] = obj[key]; // eslint-disable-line
	    }
	    return result;
	  }, {});
	}

/***/ },

/***/ 288:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = raf;
	function raf(callback) {
	  if (window.requestAnimationFrame) {
	    return window.requestAnimationFrame(callback);
	  }

	  var nativeRaf = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;

	  return nativeRaf ? nativeRaf(callback) : window.setTimeout(callback, 1e3 / 60);
	}

/***/ },

/***/ 289:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var log2 = Math.log2 ? Math.log2 : function (x) {
	  return Math.log(x) / Math.LN2;
	};

	exports.default = log2;

/***/ },

/***/ 290:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = isNumber;

	function isObjectLike(value) {
	  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
	}

	var objectToString = Object.prototype.toString;

	function isNumber(value) {
	  var numberTag = '[object Number]';
	  return typeof value === 'number' || isObjectLike(value) && objectToString.call(value) === numberTag;
	}

/***/ },

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	var utils = __webpack_require__(292); // eslint-disable-line
	module.exports = utils;


/***/ },

/***/ 292:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(293);

	Object.keys(_utils).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _utils[key];
	    }
	  });
	});

/***/ },

/***/ 293:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getTilesIds = exports.latLng2Tile = exports.tile2LatLng = exports.meters2ScreenPixels = exports.fitBounds = undefined;

	var _log = __webpack_require__(289);

	var _log2 = _interopRequireDefault(_log);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var GOOGLE_TILE_SIZE = 256;


	function latLng2World(_ref) {
	  var lat = _ref.lat;
	  var lng = _ref.lng;

	  var sin = Math.sin(lat * Math.PI / 180);
	  var x = lng / 360 + 0.5;
	  var y = 0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI;

	  y = y < 0 // eslint-disable-line
	  ? 0 : y > 1 ? 1 : y;
	  return { x: x, y: y };
	}

	function world2LatLng(_ref2) {
	  var x = _ref2.x;
	  var y = _ref2.y;

	  var n = Math.PI - 2 * Math.PI * y;

	  // TODO test that this is faster
	  // 360 * Math.atan(Math.exp((180 - y * 360) * Math.PI / 180)) / Math.PI - 90;
	  return {
	    lat: 180 / Math.PI * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n))),
	    lng: x * 360 - 180
	  };
	}

	// Thank you wiki https://en.wikipedia.org/wiki/Geographic_coordinate_system
	function latLng2MetersPerDegree(_ref3) {
	  var lat = _ref3.lat;

	  var phi = lat * Math.PI / 180;
	  var metersPerLatDegree = 111132.92 - 559.82 * Math.cos(2 * phi) + 1.175 * Math.cos(4 * phi) - 0.0023 * Math.cos(6 * phi);
	  var metersPerLngDegree = 111412.84 * Math.cos(phi) - 93.5 * Math.cos(3 * phi) + 0.118 * Math.cos(5 * phi);
	  return { metersPerLatDegree: metersPerLatDegree, metersPerLngDegree: metersPerLngDegree };
	}

	function meters2LatLngBounds(meters, _ref4) {
	  var lat = _ref4.lat;
	  var lng = _ref4.lng;

	  var _latLng2MetersPerDegr = latLng2MetersPerDegree({ lat: lat });

	  var metersPerLatDegree = _latLng2MetersPerDegr.metersPerLatDegree;
	  var metersPerLngDegree = _latLng2MetersPerDegr.metersPerLngDegree;


	  var latDelta = 0.5 * meters / metersPerLatDegree;
	  var lngDelta = 0.5 * meters / metersPerLngDegree;

	  return {
	    nw: {
	      lat: lat - latDelta,
	      lng: lng - lngDelta
	    },
	    se: {
	      lat: lat + latDelta,
	      lng: lng + lngDelta
	    }
	  };
	}

	function meters2WorldSize(meters, _ref5) {
	  var lat = _ref5.lat;
	  var lng = _ref5.lng;

	  var _meters2LatLngBounds = meters2LatLngBounds(meters, { lat: lat, lng: lng });

	  var nw = _meters2LatLngBounds.nw;
	  var se = _meters2LatLngBounds.se;

	  var nwWorld = latLng2World(nw);
	  var seWorld = latLng2World(se);
	  var w = Math.abs(seWorld.x - nwWorld.x);
	  var h = Math.abs(seWorld.y - nwWorld.y);

	  return { w: w, h: h };
	}

	var _exports = {
	  fitBounds: function fitBounds(_ref6, _ref7) {
	    var nw = _ref6.nw;
	    var se = _ref6.se;
	    var width = _ref7.width;
	    var height = _ref7.height;

	    var EPS = 0.000000001;
	    var nwWorld = latLng2World(nw);
	    var seWorld = latLng2World(se);
	    var dx = nwWorld.x < seWorld.x ? seWorld.x - nwWorld.x : 1 - nwWorld.x + seWorld.x;
	    var dy = seWorld.y - nwWorld.y;

	    if (dx <= 0 && dy <= 0) {
	      return null;
	    }

	    var zoomX = (0, _log2.default)(width / GOOGLE_TILE_SIZE / dx);
	    var zoomY = (0, _log2.default)(height / GOOGLE_TILE_SIZE / dy);
	    var zoom = Math.floor(EPS + Math.min(zoomX, zoomY));

	    // TODO find center just unproject middle world point
	    var middle = {
	      x: nwWorld.x < seWorld.x // eslint-disable-line
	      ? 0.5 * (nwWorld.x + seWorld.x) : nwWorld.x + seWorld.x - 1 > 0 ? 0.5 * (nwWorld.x + seWorld.x - 1) : 0.5 * (1 + nwWorld.x + seWorld.x),
	      y: 0.5 * (nwWorld.y + seWorld.y)
	    };

	    return {
	      center: world2LatLng(middle),
	      zoom: zoom
	    };
	  },


	  // -------------------------------------------------------------------
	  // Helpers to calc some markers size

	  meters2ScreenPixels: function meters2ScreenPixels(meters, _ref8, zoom) {
	    var lat = _ref8.lat;
	    var lng = _ref8.lng;

	    var _meters2WorldSize = meters2WorldSize(meters, { lat: lat, lng: lng });

	    var w = _meters2WorldSize.w;
	    var h = _meters2WorldSize.h;

	    var scale = Math.pow(2, zoom);
	    var wScreen = w * scale * GOOGLE_TILE_SIZE;
	    var hScreen = h * scale * GOOGLE_TILE_SIZE;
	    return {
	      w: wScreen,
	      h: hScreen
	    };
	  },


	  // --------------------------------------------------
	  // Helper functions for working with svg tiles, (examples coming soon)

	  tile2LatLng: function tile2LatLng(_ref9, zoom) {
	    var x = _ref9.x;
	    var y = _ref9.y;

	    var n = Math.PI - 2 * Math.PI * y / Math.pow(2, zoom);

	    return {
	      lat: 180 / Math.PI * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n))),
	      lng: x / Math.pow(2, zoom) * 360 - 180
	    };
	  },
	  latLng2Tile: function latLng2Tile(_ref10, zoom) {
	    var lat = _ref10.lat;
	    var lng = _ref10.lng;

	    var worldCoords = latLng2World({ lat: lat, lng: lng });
	    var scale = Math.pow(2, zoom);

	    return {
	      x: Math.floor(worldCoords.x * scale),
	      y: Math.floor(worldCoords.y * scale)
	    };
	  },
	  getTilesIds: function getTilesIds(_ref11, zoom) {
	    var from = _ref11.from;
	    var to = _ref11.to;

	    var scale = Math.pow(2, zoom);

	    var ids = [];
	    for (var x = from.x; x !== (to.x + 1) % scale; x = (x + 1) % scale) {
	      for (var y = from.y; y !== (to.y + 1) % scale; y = (y + 1) % scale) {
	        ids.push([zoom, x, y]);
	      }
	    }

	    return ids;
	  }
	};

	var fitBounds = exports.fitBounds = _exports.fitBounds;
	var meters2ScreenPixels = exports.meters2ScreenPixels = _exports.meters2ScreenPixels;
	var tile2LatLng = exports.tile2LatLng = _exports.tile2LatLng;
	var latLng2Tile = exports.latLng2Tile = _exports.latLng2Tile;
	var getTilesIds = exports.getTilesIds = _exports.getTilesIds;
	// export default exports;

/***/ },

/***/ 294:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = [{
	  stylers: [{ visibility: 'off' }]
	}, {
	  featureType: 'road',
	  elementType: 'geometry',
	  stylers: [{ visibility: 'on' }, { color: '#549DB7' }, { saturation: 15 }]
	}, {
	  featureType: 'water',
	  elementType: 'geometry',
	  stylers: [{ visibility: 'simplified' }, { color: '#549DB7' }, { lightness: -15 }, { saturation: -50 }]
	}, {
	  featureType: 'poi.park',
	  elementType: 'geometry',
	  stylers: [{ visibility: 'simplified' }, { color: '#e0f0f1' }, { saturation: -45 }, { lightness: -30 }]
	}, {
	  featureType: 'landscape',
	  elementType: 'geometry',
	  stylers: [{ visibility: 'simplified' }, { color: '#3c454e' }]
	}, {
	  featureType: 'road',
	  elementType: 'labels.text.stroke',
	  stylers: [{ color: '#ffffff' }, { visibility: 'on' }]
	}, {
	  featureType: 'road.highway',
	  elementType: 'labels',
	  stylers: [{ visibility: 'on' }]
	}];

/***/ },

/***/ 295:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var EventLocation = _react2.default.createClass({
	  displayName: 'EventLocation',

	  propTypes: {
	    type: _react.PropTypes.string,
	    text: _react.PropTypes.string,
	    mainLink: _react.PropTypes.string,
	    mapLink: _react.PropTypes.string
	  },
	  defaultProps: {},
	  onMainClick: function onMainClick() {
	    window.open(this.props.mainLink);
	  },
	  onMapClick: function onMapClick() {
	    window.open(this.props.mapLink);
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: 'location-marker' },
	      _react2.default.createElement(
	        'div',
	        { className: 'location-container' },
	        _react2.default.createElement(
	          'div',
	          { className: 'container-body', onClick: this.onMainClick },
	          _react2.default.createElement(
	            'div',
	            { className: 'title' },
	            this.props.text
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'subtext' },
	            'Click for webpage'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'container-right' },
	          _react2.default.createElement('span', { className: 'container-main wedding-icon icon-' + this.props.type }),
	          _react2.default.createElement('span', { className: 'container-map wedding-icon icon-map', onClick: this.onMapClick })
	        )
	      ),
	      _react2.default.createElement('div', { className: 'marker-carrot' })
	    );
	  }
	});

	exports.default = EventLocation;

/***/ },

/***/ 296:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  googleMaps: 'AIzaSyD3sj18tu274b-z37jQczOgAzLBf3lyOl8'
	};

/***/ },

/***/ 297:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Page = __webpack_require__(263);

	var _Page2 = _interopRequireDefault(_Page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Registry = _react2.default.createClass({
	  displayName: 'Registry',

	  render: function render() {
	    return _react2.default.createElement(
	      _Page2.default,
	      null,
	      _react2.default.createElement(
	        'h1',
	        { className: 'text-test-c' },
	        'Registries'
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'row' },
	        _react2.default.createElement(
	          'div',
	          { className: 'col-md-6' },
	          _react2.default.createElement(
	            'a',
	            { href: 'https://www.amazon.com/wedding/kasey-powers-sarah-armstrong-orlando-november-2016/registry/1HSEWTY58GVCX', target: '_blank' },
	            _react2.default.createElement('img', { src: 'images/Amazon-Logo.png', className: 'img-responsive registryButton' })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'col-md-6' },
	          _react2.default.createElement(
	            'a',
	            { href: 'http://www.target.com/gift-registry/registry/iIF8LH-1oF2vkGKU3BZVwA', target: '_blank' },
	            _react2.default.createElement('img', { src: 'images/Target-Logo.png', className: 'img-responsive registryButton' })
	          )
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'container-fluid' },
	        _react2.default.createElement(
	          'p',
	          null,
	          ' Gift cards would be magical too. '
	        ),
	        _react2.default.createElement('img', { src: './images/pile_of_gold.jpg', className: 'img-responsive center-block' })
	      )
	    );
	  }
	});

	exports.default = Registry;

/***/ },

/***/ 298:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(300);

	__webpack_require__(312);

	__webpack_require__(313);

	__webpack_require__(314);

	__webpack_require__(315);

	__webpack_require__(316);

	__webpack_require__(317);

	__webpack_require__(318);

/***/ },

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(301);
	__webpack_require__(302);
	__webpack_require__(303);
	__webpack_require__(304);
	__webpack_require__(305);

	__webpack_require__(306);
	__webpack_require__(307);
	__webpack_require__(308);
	__webpack_require__(309);
	__webpack_require__(310);
	__webpack_require__(311);

/***/ },

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "wedding/images/bridal-party/caroline.jpg";

/***/ },

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "wedding/images/bridal-party/emily.jpg";

/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "wedding/images/bridal-party/jordan-carl.jpg";

/***/ },

/***/ 304:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "wedding/images/bridal-party/Lynsie.jpeg";

/***/ },

/***/ 305:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "wedding/images/bridal-party/molly.jpg";

/***/ },

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "wedding/images/bridal-party/taylor.jpg";

/***/ },

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "wedding/images/bridal-party/jordan-zenga.jpg";

/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "wedding/images/bridal-party/alec.jpg";

/***/ },

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "wedding/images/bridal-party/david.jpg";

/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "wedding/images/bridal-party/brady.jpg";

/***/ },

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "wedding/images/bridal-party/bennett.jpg";

/***/ },

/***/ 312:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "wedding/images/orig-chalk-board.png";

/***/ },

/***/ 313:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "wedding/images/teal-lace.svg";

/***/ },

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "wedding/images/Amazon-Logo.png";

/***/ },

/***/ 315:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "wedding/images/Target-Logo.png";

/***/ },

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "wedding/images/pile_of_gold.jpg";

/***/ },

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "wedding/images/couple1.jpg";

/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "wedding/images/couple2.jpg";

/***/ }

});