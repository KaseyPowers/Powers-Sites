import React from 'react'
import Page from './Page'

import Map from '../EventMap';

var TheEvent = React.createClass({
  render: function() {
    return (
      <Page>
        <h1 className="text-test-c">The Event</h1>
        <Map/>
      </Page>
    )
  }
});

export default TheEvent
