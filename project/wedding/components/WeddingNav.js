import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'

import CenterCrest from './navComponents/CenterCrest'
import SectionLink from './navComponents/SectionLink'


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

    var totalLinks = _.size(this.props.sections);
    let leftSize = Math.floor(totalLinks/2);
    let rightSize = totalLinks - leftSize;

    let leftCol = Math.max(Math.floor(12/leftSize), 1);
    let rightCol = Math.max(Math.floor(12/rightSize), 1);

    let leftLinks = [];
    let rightLinks = [];

    _.forEach(this.props.sections, function(value, key) {
      let addLeft = leftLinks.length < leftSize;
      let linkClass = 'col-md-'+ (addLeft ? leftCol : rightCol);

      (addLeft ? leftLinks : rightLinks).push(
        <div className={linkClass} key={key} style={sectionStyle}>
          <SectionLink name={key} targetScroll={value.scrollToggle} targetElm={value.element}/>
        </div>
      );
    });


    return (

      <div
        ref={(ref) => this.navRef = ref }
        className='header-test'>
        <img className="leftLace" src={'wedding/images/teal-lace.svg'}/>
        <img className="rightLace" src={'wedding/images/teal-lace.svg'}/>
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