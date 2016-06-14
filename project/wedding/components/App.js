import React from 'react'
import _ from 'lodash'

import WeddingNav from './WeddingNav'
import WeddingSections from './WeddingSections'

const header_height = 140;

var App = React.createClass({
  resizeEventHandler: function() {
    let navHeightChange = 0;
    let headerChanged = false;
    if(this.state.navRef) {
      navHeightChange = this.state.navRef.offsetHeight - this.state.headerHeight;
      headerChanged = navHeightChange !== 0;
    }
    if(headerChanged) {
      this.setState({headerHeight: (this.state.headerHeight + navHeightChange) }, function() {
        this.setState(function(prevState, currentPropr) {
          let newSections = _.reduce(prevState.sections, function(output, value, key) {
            output[key] = Object.assign({}, value, {
              scrollToggle: value.active ? value.element.offsetTop : value.scrollToggle + navHeightChange
            });
            return output;
          }, {});
          return { sections: newSections };
        }, this.checkSectionsActive);
      });
    }
  },
  checkSectionsActive: function() {
    var scrollY = window.scrollY;
    _.forEach(this.state.sections, function(value, key) {
      let isActive = this.getScrollToggle(value) <= scrollY;
      if(isActive != value.active) {
        this.setActive(key, isActive);
      };

    }.bind(this));
  },
  getScrollToggle: function(section) {
    if(section.active) {
      return section.scrollToggle;
    }
    return section.element.offsetTop;
  },
  componentDidMount: function() {
    window.addEventListener('scroll', this.checkSectionsActive);
    window.addEventListener('resize', this.resizeEventHandler);
  },

  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.checkSectionsActive);
    window.removeEventListener('resize', this.resizeEventHandler);
  },

  getInitialState: function() {
    return {
      headerHeight: header_height,
      sections: {}
    }
  },
  setNavRef: function(navRef) {
    console.log('State was: ' + this.state.headerHeight + '\n Setting to: ' + navRef.offsetHeight);
    this.setState({
      navRef: navRef,
      headerHeight: navRef.offsetHeight
    });
  },
  addSection: function( section) {
    this.setState(function(previousState, currentProps) {
      let newSections = Object.assign({}, previousState.sections, section );
      return { sections: newSections }
    });
  },
  setActive: function(key, isActive) {
    this.setState(function(previousState, currentProps) {
      let thisSection = previousState.sections[key];
      thisSection.active = isActive;

      let newSections = Object.assign({}, previousState.sections, { [key]: thisSection } );
      return { sections: newSections }
    }, function() {
      // console.log(key + ': scrollToggle = ' + this.state.sections[key].scrollToggle)
      // console.log(key + ' has been set: ' + this.state.sections[key].active);
    }.bind(this));
  },
  toggleSection: function(sectionId) {
    let previousVal = this.sections[sectionId].active;

    this.setState({
      sections: {
        sectionId: {
          active: !this.sections[sectionId].active
        }
      }
    });

    console.log(sectionId + ': ' + previousVal + ' => ' + this.sections[sectionId].active);
  },
  render: function() {
    return (
      <div className='mainBody'>
        <WeddingNav sections={this.state.sections} setNavRef={this.setNavRef}/>
        <WeddingSections offsetTop={this.state.headerHeight} addSection={this.addSection} toggleSection={this.toggleSection} allSections={this.state.sections}/>
      </div>
      )
  }
});
export default App
