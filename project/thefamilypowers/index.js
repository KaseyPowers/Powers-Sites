// Core components
import React from 'react'
import { render } from 'react-dom'

var root = document.createElement('div');
document.body.appendChild(root);

var App = React.createClass({
  render: function() {
    return (
      <div >
        The Family Powers is under construction
      </div>
    )
  }
});


render(
  <App />,
  root
)