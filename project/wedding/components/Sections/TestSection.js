import React from 'react'
import Section from '../Section'

var TestSection = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Test Section</h2>
        <h4>{this.props.text}</h4>
      </div>
    )
    // return (
    //   <div className='test-section'>
    //     {this.props.text}
    //   </div>
    // )
  }
});

export default TestSection