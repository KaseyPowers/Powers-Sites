import React from 'react'
import ReactDOM from 'react-dom'

import CenterCrest from './navComponents/CenterCrest'

var WeddingNav = React.createClass({
  render: function() {
    return (

      <div className='header-test'>
        <img className="leftLace" src={'wedding/images/flush-left-lace.png'}/>
        <CenterCrest/>
        <img className="rightLace" src={'wedding/images/flush-right-lace.png'}/>
      </div>
    )
  }
});

export default WeddingNav