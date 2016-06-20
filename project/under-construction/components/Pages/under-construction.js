
import React from 'react'
import Page from './Page'

import './under-construction.less';

var UnderConstruction = React.createClass({
  render: function() {
    return (
      <Page>
        <div className="text-test-c under-construction-page">
          Unfortunately the site is not quite done<br/>
          <h3>Check back soon!</h3>
        </div>
      </Page>
    )
  }
});

export default UnderConstruction