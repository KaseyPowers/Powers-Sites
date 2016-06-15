import React from 'react'
import _ from 'lodash'
import { Router, IndexRedirect, Route, browserHistory } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import WeddingNav from './WeddingNav';

// import TestSection from './Sections/TestSection'

import {AboutUs, TestSection} from './Sections';

let siteName = document.domain;
let startIndex = siteName.indexOf('www.');
startIndex += startIndex >= 0 ? 'www.'.length : startIndex;
siteName = siteName.substring(startIndex);
siteName = _.trimEnd(siteName, '.com');

const prefix = (siteName === 'localhost' || siteName === 'thefamilypowers') ? '/wedding' : '/';


var sectionList = [
  {
    name: 'About Us',
    path: 'about-us',
    section: <AboutUs/>
  },
  {
    name: 'Bridal Party',
    path: 'bridal-party',
    section: <TestSection text='Bridal Party' />
  },
  {
    name: 'The Event',
    path: 'the-event',
    section: <TestSection text='The Event' />
  },
  {
    name: 'Registry',
    path: 'registry',
    section: <TestSection text='Registry' />
  }
];


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
      headerHeight: 140,
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
    console.log('State was: ' + this.state.headerHeight + '\n Setting to: ' + navRef.offsetHeight);
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
        <WeddingNav sections={sectionList} prefix={prefix} setNavRef={this.setNavRef}/>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="Section"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          style={mainStyle}
        >
          {React.cloneElement(this.props.children, {
            key: location.pathname
          })}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
});

const TestPage = React.createClass({
  render() {
    let sectionItem = _.find(sectionList, ['path', this.props.params.id]);
    let section = sectionItem ? sectionItem.section : (
      <TestSection text='Default' />
    );
    return (
      <div className="Section">
        <div className="content">
            {section}
        </div>
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
          <IndexRedirect to={myPrefix + sectionList[0].path} />
          <Route path=":id" component={TestPage} />
        </Route>
      </Router>
    )
  }
});
export default App
