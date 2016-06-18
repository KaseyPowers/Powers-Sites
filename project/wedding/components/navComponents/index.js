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

    let myPrefix = this.props.prefix.length > 1 ? this.props.prefix + '/' : this.props.prefix;

    var totalLinks = _.size(this.props.sections);
    let leftSize = Math.floor(totalLinks/2);
    let rightSize = totalLinks - leftSize;

    let leftCol = Math.max(Math.floor(12/leftSize), 1);
    let rightCol = Math.max(Math.floor(12/rightSize), 1);

    let leftLinks = [];
    let rightLinks = [];

    _.forEach(this.props.sections, function(key) {
      let addLeft = leftLinks.length < leftSize;
      let linkClass = 'col-md-'+ (addLeft ? leftCol : rightCol);

      (addLeft ? leftLinks : rightLinks).push(
        <div className={linkClass + ' sectionLink'} key={key.path} style={sectionStyle}>
          <Link to={myPrefix + key.path}>
            {key.name}
          </Link>
        </div>
      );
    });


    return (

      <div
        ref={(ref) => this.navRef = ref }
        className='header-test text-fancy'>
        <img className="leftLace" src={myPrefix + 'images/teal-lace.svg'}/>
        <img className="rightLace" src={myPrefix + 'images/teal-lace.svg'}/>
        <div className="row">
          <div className="col-xs-4">
            <div className="row">
              { leftLinks }
            </div>
          </div>
          <div className="col-xs-4" style={starterStyle}>
            <CenterCrest/>
          </div>
          <div className="col-xs-4">
            <div className="row">
              { rightLinks }
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default WeddingNav