import React from 'react'
import { Link } from 'react-router'
import _ from 'lodash'

import CenterCrest from './CenterCrest'

const starterStyle = {
  marginTop: 20
};

//give all the same margin-top: 20px;
//sectionlinks have padding-top = centerCrest height/6

var WeddingNav = React.createClass({
  componentDidMount: function() {
    this.hasLoaded = true;
    this.props.setNavRef(this.navRef);
  },
  render: function() {
    let sectionStyle = Object.assign({}, starterStyle);
    if(this.hasLoaded) {
      sectionStyle.paddingTop = (this.navRef.offsetHeight - starterStyle.marginTop)/6;
    }

    return (
      <div
        ref={(ref) => this.navRef = ref }
        className='header-test text-fancy'>
        <img className="leftLace" src={'/under-construction/images/teal-lace.svg'}/>
        <img className="rightLace" src={'/under-construction/images/teal-lace.svg'}/>
        <div className="row">
          <div className="col-xs-4">
          </div>
          <div className="col-xs-4" style={starterStyle}>
            <CenterCrest/>
          </div>
          <div className="col-xs-4">
          </div>
        </div>
      </div>
    )
  }
});

export default WeddingNav