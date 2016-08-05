import React, {PropTypes} from 'react'

const EventLocation = React.createClass({
  propTypes: {
    type: PropTypes.string,
    text: PropTypes.string,
    mainLink: PropTypes.string,
    mapLink: PropTypes.string
  },
  defaultProps: {},
  onMainClick() {
    window.open(this.props.mainLink);
  },
  onMapClick() {
    window.open(this.props.mapLink);
  },
  render() {
    return (
      <div className='location-marker'>
        <div className='location-container'>
          <div className="container-body" onClick={this.onMainClick}>
            <div className="title">{this.props.text}</div>
            <div className="subtext">Click for webpage</div>
          </div>
          <div className="container-right">
            <span className={'container-main wedding-icon icon-' + this.props.type}></span>
            <span className='container-map wedding-icon icon-map' onClick={this.onMapClick}></span>
          </div>
        </div>
        <div className="marker-carrot"></div>
      </div>
    );
  }
});

export default EventLocation;