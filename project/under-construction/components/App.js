import React from 'react'
import _ from 'lodash'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import WeddingNav from './NavComponents';
import UnderConstruction from './Pages/under-construction';

const startingNavHeight = 150;

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
    return (
      <div>
        <WeddingNav setNavRef={this.setNavRef}/>
        <div style={mainStyle}>
          <UnderConstruction />
        </div>
      </div>
    )
  }
});
export default WeddingApp
