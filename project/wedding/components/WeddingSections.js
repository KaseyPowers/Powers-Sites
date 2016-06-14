import React from 'react'
import ReactDOM from 'react-dom'

import Section from './Section'

import TestSection from './Sections/TestSection'

var sectionList = [
  {
    name: 'About Us',
    section: <TestSection text='About Us' />
  },
  {
    name: 'Bridal Party',
    section: <TestSection text='Bridal Party' />
  },
  {
    name: 'The Event',
    section: <TestSection text='The Event' />
  },
  {
    name: 'Registry',
    section: <TestSection text='Registry' />
  }
];

var WeddingSections = React.createClass({
  isSectionMounted: function(name) {
    return !!this.props.allSections[name];
  },
  isSectionActive: function(name) {
    return this.isSectionMounted(name) ? this.props.allSections[name].active : false;
  },
  displayData: function(index) {
    let section = sectionList[index];

    let lastSection = (index === (sectionList.length-1));

    let nextActive = !lastSection && this.isSectionActive(sectionList[index+1].name);

    return {
      navHeight: this.props.offsetTop,
      active: this.isSectionActive(section.name),
      lastSection: lastSection,
      nextActive: nextActive
    };
  },
  render: function() {
    let buildSections = sectionList.map(
      function(section, index) {
        return (
          <Section
            key={section.name}
            displayData= {this.displayData(index)}
            addSection={this.props.addSection}
            name={section.name}>
            {section.section}
          </Section>
        );
      }.bind(this)
    );

    let mainStyle = {
      marginTop: this.props.offsetTop
    };

    return (
      <main style={ mainStyle }>
        {buildSections }
      </main>
    )
    // return (
    //   <main>
    //     <Section active={this.isSectionActive('section1')} offsetTop={this.props.offsetTop} addSection={this.props.addSection} name='section1'>
    //       Section1
    //     </Section>
    //     <Section active={this.isSectionActive('section2')} offsetTop={this.props.offsetTop} addSection={this.props.addSection} name='section2'>
    //       Section2
    //     </Section>
    //     <Section active={this.isSectionActive('section3')} offsetTop={this.props.offsetTop} addSection={this.props.addSection} name='section3'>
    //       Section3
    //     </Section>
    //   </main>
    // )
  }
});

export default WeddingSections