import React from 'react'
import Page from './Page'

import Map from '../EventMap';

var TheEvent = React.createClass({
  render: function() {
    return (
      <Page>
        <h4>The Event</h4>
        <Map/>
      </Page>
    )
  }
});

export default TheEvent