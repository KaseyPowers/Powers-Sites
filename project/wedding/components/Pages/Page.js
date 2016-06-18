import React from 'react'

var Page = React.createClass({
  render: function() {
    return (
      <div className="Section">
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
});

export default Page