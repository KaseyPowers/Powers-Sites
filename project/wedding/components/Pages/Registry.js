import React from 'react'
import Page from './Page'

var Registry = React.createClass({
  render: function() {
    return (
      <Page>
        <h1 className="text-test-c">Registries</h1>
        <div className="row">
          <div className="col-md-6">
            <a href="https://www.amazon.com/wedding/kasey-powers-sarah-armstrong-orlando-november-2016/registry/1HSEWTY58GVCX" target="_blank">
              <img src="images/Amazon-Logo.png" className="img-responsive registryButton"/>
            </a>
          </div>
          <div className="col-md-6">
            <a href="http://www.target.com/gift-registry/registry/iIF8LH-1oF2vkGKU3BZVwA" target="_blank">
              <img src="images/Target-Logo.png"  className="img-responsive registryButton"/>
            </a>
          </div>
        </div>
        <div className="container-fluid">
          <p> Gift cards would be magical too. </p>
          <img src="./images/pile_of_gold.jpg" className="img-responsive center-block"/>
        </div>
      </Page>
    )
  }
});

export default Registry
