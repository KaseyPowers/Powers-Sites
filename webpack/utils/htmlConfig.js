var _ = require('lodash');
// var path = require('path');


var HtmlWebpackPlugin = require('html-webpack-plugin');

var projects = require('../../project-config.json').projects;

// //build entry object
// var entry = {};

// _.forEach(projects, function(project) {
//   entry[project.name] = project.src;
//   // entry[project.name] = path.join(project.src, 'index.js');
// });

// var output = {
//   path: path.join(process.cwd(), 'build'),
//   filename: '[name]/index.js'
// };

// module.exports.entry = entry;
// module.exports.output = output;


module.exports = function() {
  var output = [];
  _.forEach(projects, function(project) {
    output.push(
      new HtmlWebpackPlugin({
        title: project.name,
        filename: project.name+'/index.html',
        chunks: [ project.name, 'commons']
      })
    );
  });
  return output;
}
