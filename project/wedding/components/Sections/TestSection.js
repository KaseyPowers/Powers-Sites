import React from 'react'
import Section from '../Section'

var TestSection = React.createClass({
  render: function() {
    return (
      <div className='test-section'>
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