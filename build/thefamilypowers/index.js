webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(33);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Core components
	var root = document.createElement('div');
	document.body.appendChild(root);

	var App = _react2.default.createClass({
	  displayName: 'App',

	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      'The Family Powers is under construction'
	    );
	  }
	});

	(0, _reactDom.render)(_react2.default.createElement(App, null), root);

/***/ }
]);