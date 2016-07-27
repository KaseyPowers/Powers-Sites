import React, {PropTypes} from 'react'
import GoogleMap from 'google-map-react';
import {fitBounds} from 'google-map-react/utils';
import ReactDom from 'react-dom';
import mapStyles from './mapStyles';

import keys from '../../../../keys';

import _ from 'lodash';

const appKey = keys.googleMaps;

const locations = [
  {
    pos: {
      lat: 28.567543,
      lng: -81.355481
    },
    name: 'veneu'
  },
  {
    pos: {
      lat: 28.541245,
      lng: -81.378741
    },
    name: 'hotel1'
  }
]

const lats = _.map(locations, 'pos.lat');
const lngs = _.map(locations, 'pos.lng');
const buffer = .00001;

const bounds = {
  nw:  {
    lat: _.max(lats) + buffer,
    lng: _.min(lngs) - buffer
  },
  se: {
    lat: _.min(lats) - buffer,
    lng: _.max(lngs) + buffer
  }
};
const size = {
  width: window.innerWidth - ((10 + 75) * 2),
  height: 400
}

const {center, zoom} = fitBounds(bounds, size);


const K_WIDTH = 100;
const K_HEIGHT = 40;

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: '5px solid #f44336',
  borderRadius: K_HEIGHT,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4
};


var ExampleMarker = React.createClass({
  propTypes: {
    text: PropTypes.string
  },
  defaultProps: {},
  render() {
    return (
      <div style={greatPlaceStyle}>
        <span className="wedding-icon icon-restaurant"></span>
        <span className="wedding-icon icon-building"></span>
        <span className="wedding-icon icon-diamond"></span>
        {this.props.text}
      </div>
    );
  }
})

var EventMap = React.createClass({
  componentDidMount: function() {
    this.hasLoaded = true;
  },
  render() {
    const markers = locations.map((location) => {
      return (
        <ExampleMarker
          key={location.name}
          lat={location.pos.lat}
          lng={location.pos.lng}
          text={location.name}/>
      );
    });
    return (
      <div className='event-map-container'>
        <GoogleMap
          options={
            {
              zoomControl: false,
              scaleControl: false,
              styles: mapStyles
            }
          }
          // ref={(ref) => this.mapRef = ReactDom.findDOMNode(ref) }
          // style= { getMapStyle() }
          defaultCenter={center}
          defaultZoom={zoom}
          bootstrapURLKeys={
            {
              key: appKey
            }
          }>
          {markers}
        </GoogleMap>
      </div>
    )
  }
});

export default EventMap