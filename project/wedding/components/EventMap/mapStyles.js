export default [
  {
    elementType: 'labels',
    stylers: [
      { visibility: 'off' }
    ]
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      { color: '#ffffff' },
      { visibility: 'simplified' }
    ]
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      { color: '#3c454e' },
      { visibility: 'on' }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      { color: '#3c454e' },
      { 'lightness': 38 },
      { visibility: 'off' }
    ]
  },
  {
    featureType: 'poi.park',
    stylers: [
      { visibility: 'on' }
    ]
  },
  {
    featureType: 'water',
    stylers: [
      { visibility: 'simplified' },
      { 'hue': '#0019ff' },
      { 'lightness': -60 },
      { 'saturation': -80 }
    ]
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      { visibility: 'off' }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      { visibility: 'simplified' }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels',
    stylers: [
      { visibility: 'on' }
    ]
  }
];