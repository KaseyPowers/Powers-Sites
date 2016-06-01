import React from 'react'
import _ from 'lodash'

import WeddingNav from './WeddingNav'
import WeddingSections from './WeddingSections'

const header_height = 120;

var App = React.createClass({
  checkSectionsActive: function(event) {
    var scrollY = window.scrollY;

    _.forEach(this.state.sections, function(value, key) {
      // let isActive = value.element.offsetTop <= scrollY;
      let isActive = value.scrollToggle <= scrollY;

      if(isActive != value.active) {
        this.setActive(key, isActive);
      };

    }.bind(this));
  },
  componentDidMount: function() {
    window.addEventListener('scroll', this.checkSectionsActive);
  },

  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.checkSectionsActive);
  },

  getInitialState: function() {
    return {
      headerHeight: header_height,
      sections: {}
    }
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
        <WeddingNav sections={this.state.sections} />
        <WeddingSections offsetTop={this.state.headerHeight} addSection={this.addSection} toggleSection={this.toggleSection} allSections={this.state.sections}/>
      </div>
      )
  }
});
export default App
