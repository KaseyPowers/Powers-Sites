export default [
  {
    stylers: [
      { visibility: 'off' }
    ]
  },{
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      { visibility: 'on' },
      { color: '#549DB7' },
      { saturation: 15 }
    ]
  },{
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      { visibility: 'simplified' },
      { color: '#549DB7' },
      { lightness: -15 },
      { saturation: -50 }
    ]
  },{
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      { visibility: 'simplified' },
      { color: '#e0f0f1' },
      { saturation: -45 },
      { lightness: -30 }
    ]
  },{
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      { visibility: 'simplified' },
      { color: '#3c454e' }
    ]
  }, {
    featureType: 'road',
    elementType: 'labels.text.stroke',
    stylers: [
      { color: '#ffffff' },
      { visibility: 'on' }
    ]
  },{
    featureType: 'road.highway',
    elementType: 'labels',
    stylers: [
      { visibility: 'on' }
    ]
  }
];