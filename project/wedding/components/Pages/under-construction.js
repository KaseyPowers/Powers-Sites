import React from 'react'
import Page from './Page'

import './under-construction.less';

var UnderConstruction = React.createClass({
  render: function() {
    return (
      <Page>
        <div className="text-test-c under-construction-page">
          We Apologize, but the site is still <br/>
          Under Construction
        </div>
      </Page>
    )
  }
});

export default UnderConstruction