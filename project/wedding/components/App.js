import React from 'react'
import _ from 'lodash'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import WeddingNav from './NavComponents';
// import Pages from './Pages';
const Pages = [];
import UnderConstruction from './Pages/under-construction';

const startingNavHeight = 150;

let siteName = document.domain;
let startIndex = siteName.indexOf('www.');
startIndex += startIndex >= 0 ? 'www.'.length : startIndex;
siteName = siteName.substring(startIndex);
siteName = _.trimEnd(siteName, '.com');

const prefix = (siteName === 'localhost' || siteName === 'thefamilypowers') ? '/wedding' : '/';


const WeddingApp = React.createClass({
  resizeEventHandler: function() {
    let navHeightChange = 0;
    let headerChanged = false;
    if(this.state.navRef) {
      navHeightChange = this.state.navRef.offsetHeight - this.state.headerHeight;
      headerChanged = navHeightChange !== 0;
    }
    if(headerChanged) {
      this.setState({
        headerHeight: (this.state.headerHeight + navHeightChange)
      });
    }
  },
  getInitialState: function() {
    return {
      headerHeight: startingNavHeight,
      sections: {}
    }
  },
  componentDidMount: function() {
    window.addEventListener('resize', this.resizeEventHandler);
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.resizeEventHandler);
  },
  setNavRef: function(navRef) {
    this.setState({
      navRef: navRef,
      headerHeight: navRef.offsetHeight
    });
  },
  render() {
    let mainStyle = {
      marginTop: this.state.navRef ? this.state.navRef.offsetHeight : this.state.headerHeight
    };
    let currentPage = _.trimStart(this.props.location.pathname, prefix);
    currentPage = _.trimStart(currentPage, '/');

    let currentIndex = _.findIndex(Pages, ['path', currentPage]);
    let prevIndex = this.previousIndex || 0;
    const transitionName = 'Section-' + (prevIndex < currentIndex ? 'right' : 'left');
    this.previousIndex = currentIndex;


    return (
      <div>
        <WeddingNav sections={Pages} prefix={prefix} setNavRef={this.setNavRef}/>
        <ReactCSSTransitionGroup
          component="div"
          transitionName={transitionName}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          style={mainStyle}
        >
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname
          })}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
});

var App = React.createClass({
  render: function() {
    let myPrefix = prefix.length > 1 ? prefix + '/' : prefix;
    return (
      <Router history={browserHistory}>
        <Route path={prefix} component={WeddingApp}>
          <IndexRoute component={UnderConstruction}  />
        </Route>
      </Router>
    )
  }
});
export default App
