var webpack = require('webpack');

var webpackConfig = require('../webpack');

var compiler = webpack(webpackConfig);

compiler.run(function(err, stats) {

  if (err) {
    console.error(err);
  }

  var _stats = stats.toString({
    colors: true,
    cached: true,
    reasons: false,
    source: false,
    chunks: false
  });

  console.log(_stats);
});

// var done = _.after(bundleCounts, function() {
//     cb();
//   });

//   compiler.run(function(err, stats) {

//     if (err) {
//       throw new gUtil.PluginError('webpack', err);
//     }

//     var _stats = stats.toString({
//       colors: true,
//       cached: true,
//       reasons: false,
//       source: false,
//       chunks: false
//     });

//     gUtil.log('[av:build]', _stats);

//     // Webpack will emit stats per entry point bundle created.  Gulp will
//     // cry foul if the callback is called multiple times.
//     done();

//   });