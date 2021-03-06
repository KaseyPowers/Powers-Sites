var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var _ = require('lodash');

var logger = require('../../utils/logger');

function register(server, options, next) {

  // var statistics = [];
  var webpackConfig = require('../../webpack');

  var bundleCounts = Object.keys(webpackConfig.entry).length;
  console.log('bundles: ' + bundleCounts);

  // var done = _.after(bundleCounts, function() {
  //   logger.info(statistics[0]);
  //   logger.ok('Finished bundling');
  //   next();
  // });

  logger.info('Started bundling');
  var compiler = webpack(webpackConfig);

  compiler.plugin('done', function(stats) {

    var _stats = stats.toString({
      colors: true,
      cached: true,
      reasons: false,
      source: false,
      chunks: false
    });
    logger.info(_stats);
    logger.ok('Finished bundling');
    next();
  });

  var webpackDev = webpackMiddleware(compiler, {
    noInfo: true, // display no info to console (only warnings and errors)
    quiet: true, // display nothing to the console
    lazy: false,
    stats: false,
    watchOptions: {
      aggregateTimeout: 1200,
      poll: 1000
    }
  });

  // Handle webpackDevMiddleware
  server.ext('onRequest', function _onRequest(request, reply) {

    var req = request.raw.req;
    var res = request.raw.res;

    webpackDev(req, res, function(error) {
      if (error) {
        return reply(error);
      }
      reply.continue();
    });
  });

}

register.attributes = {
  name: 'webpack',
  pkg: require('../../package.json')
};

module.exports = register;