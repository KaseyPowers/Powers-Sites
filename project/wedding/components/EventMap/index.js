import React from 'react'
import GoogleMap from 'google-map-react';
import {
  fitBounds
} from 'google-map-react/utils';
import mapStyles from './mapStyles';

import EventLocation from './EventLocation';

import keys from '../../../../keys';

import _ from 'lodash';

const appKey = keys.googleMaps;

const locations = [
  {
    pos: {
      lat: 28.567496,
      lng: -81.355428
    },
    name: 'Henry P Lou Gardens',
    type: 'venue',
    mainLink: 'http://leugardens.org',
    mapLink:  'https://www.google.com/maps/place/Harry+P+Leu+Gardens/@28.5675717,-81.3575736,17z/data=!3m1!4b1!4m5!3m4!1s0x88e77abc1a981009:0x9696d656a16a6fdc!8m2!3d28.5675717!4d-81.3553849'
  }, {
    pos: {
      lat: 28.538962,
      lng: -81.378658
    },
    name: 'Grand Bohemian Hotel',
    type: 'hotel',
    mainLink: 'http://www.grandbohemianhotel.com/',
    mapLink: 'https://www.google.com/maps/place/Grand+Bohemian+Hotel+Orlando,+Autograph+Collection/@28.5386985,-81.3808682,17z/data=!3m1!4b1!4m5!3m4!1s0x88e77b01fefd022b:0xca40d5cfca890aa4!8m2!3d28.5386985!4d-81.3786795'
  }, {
    pos: {
      lat: 28.540703,
      lng: -81.381379
    },
    name: 'Civiche',
    type: 'restaurant',
    mainLink: 'http://www.ceviche.com/orlando/',
    mapLink: 'https://www.google.com/maps/place/Ceviche+Tapas+Orlando/@28.5404395,-81.3835465,17z/data=!3m1!4b1!4m5!3m4!1s0x88e77affcad41dd3:0xfa814ffa35234a96!8m2!3d28.5404395!4d-81.3813578'
  }
];

var EventMap = React.createClass({
  componentDidMount: function() {
    this.hasLoaded = true;
  },
  render() {
    const lats = _.map(locations, 'pos.lat');
    const lngs = _.map(locations, 'pos.lng');
    const buffer = .002;

    const bounds = {
      nw: {
        lat: _.max(lats) + buffer,
        lng: _.min(lngs)
      },
      se: {
        lat: _.min(lats),
        lng: _.max(lngs)
      }
    };
    const size = {
      width: window.innerWidth - ((10 + 75) * 2),
      height: 500
    }

    const {center, zoom} = fitBounds(bounds, size);
    const markers = locations.map((location) => {
      return (
        <EventLocation
          key = {location.name}
          lat = {location.pos.lat}
          lng = {location.pos.lng}
          type = {location.type}
          text = {location.name}
          mainLink = {location.mainLink}
          mapLink = {location.mapLink}/>
      );
    });
    return (
      <div className = 'event-map-container' >
        <GoogleMap
        options = {{
          zoomControl: false,
          scaleControl: false,
          styles: mapStyles
        }}
        center = { center }
        zoom = { zoom }
        bootstrapURLKeys = { { key: appKey } } >
          {markers}
        </GoogleMap>
      </div>
    )
  }
});

export default EventMap
