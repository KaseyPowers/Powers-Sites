var _ = require('lodash');

var strings = [
  'hello',
  'world',
  'powers family'
];

_.forEach(strings, function(str) {
  console.log(str);
});