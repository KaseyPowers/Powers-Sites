'use strict';

const Hapi = require('hapi');
var path = require('path');

var pluginWebpack = require('./plugins/dev'); 

const server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: path.join(__dirname, '../build')
      }
    }
  }
});
server.connection({ port: 3000 });

server.register([pluginWebpack], function(err) {
 
  if (err) {
    throw err;
  }

  server.start(function() {
    if (err) {
      throw err;
    }
    console.log('Server running at:', server.info.uri);
  });

});



// server.register(require('inert'), (err) => {
//   if (err) {
//     throw err;
//   }
//   server.route({
//     method: 'GET',
//     path: '/wedding',
//     handler: function (request, reply) {
//       console.log('Request to /wedding');
//       reply.file('wedding/index.html');
//     }
//   });
//   server.route({
//     method: 'GET',
//     path: '/commons.js',
//     handler: function (request, reply) {
//       console.log('Request to /commons.js');
//       reply.file('commons.js');
//     }
//   });
//   server.route({
//     method: 'GET',
//     path: '/wedding/index.js',
//     handler: function (request, reply) {
//       console.log('Request to /wedding/index.js');
//       reply.file('wedding/index.js');
//     }
//   });
//   server.route({
//     method: 'GET',
//     path: '/wedding/css/index.css',
//     handler: function(request, reply) {
//       console.log('Getting wedding/css/index.css');
//       reply.file('wedding/css/index.css');
//     }
//   });
// });


// server.start((err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('Server running at:', server.info.uri);
// });
