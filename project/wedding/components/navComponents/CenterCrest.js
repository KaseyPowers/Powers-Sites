import React from 'react'
import ReactDOM from 'react-dom'

var CenterCrest = React.createClass({
  render: function() {
    return (
      <div className="centerCrest">
        <div className="line1">Once Upon A</div>
        <div className="line2">Powers</div>
        <span className="wedding-icon icon-restaurant"></span>
        <span className="wedding-icon icon-building"></span>
        <span className="wedding-icon icon-diamond"></span>
      </div>
    )
  }
});

export default CenterCrest