import React from 'react'
import ReactDOM from 'react-dom'

import Velocity from 'velocity-animate';

var SectionLink = React.createClass({
  linkClick() {
    let difference = window.scrollY - this.props.targetScroll;
    difference = difference * 1.5;
    Velocity(document.body, 'scroll', {duration: 1200, offset: (this.props.targetScroll + 'px'), mobileHA: false})

    // this.props.targetElm.velocity()
    // window.scrollTo(0, this.props.targetScroll);
  },
  render: function() {
    return (
      <div animation={'scroll', { offset: this.props.targetScroll, mobileHA: false }} className="sectionLink" onClick={this.linkClick}>
        {this.props.name}
      </div>
    )
  }
});

export default SectionLink