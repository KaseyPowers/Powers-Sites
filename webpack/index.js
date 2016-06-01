var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
// var HtmlWebpackPlugin = require('html-webpack-plugin');

var entryOutput = require('./utils/entry-output');
var htmlConfig = require('./utils/htmlConfig');
// var _ = require('lodash');

module.exports = {
  context: path.join(process.cwd(),  'project'),
  entry: entryOutput.entry,
  output: entryOutput.output,
  module: {
    loaders: [
      {test: /\.html$/, loader: 'html'},
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css', {
          publicPath: '../'
        })
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!autoprefixer-loader?{browsers: ["last 3 versions", "ie 8", "ie 9", "> 1%"]}!less-loader',
          {
            publicPath: '../'
          }
        )
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'file?name=[path]/[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
      minChunks: 2
    }),
    // Use bundle name for extracting bundle css
    new ExtractTextPlugin('[name]/css/index.css', {
      allChunks: true
    }),

    new CleanWebpackPlugin(['build'], {
      root: process.cwd(),
      verbose: true,
      dry: false
    }),

    ...htmlConfig()

    // new HtmlWebpackPlugin({
    //   filename: '[name]/index.html'
    // })
  ]



  // devtool: 'source-map' cannot cache SourceMaps for modules and need to regenerate complete SourceMap for the chunk. It’s something for production…
  // devtool: 'eval-source-map' is really as good as devtool: 'source-map', but can cache SourceMaps for modules. It’s much faster for rebuilds.
  // devtool: 'eval-cheap-module-source-map' offers SourceMaps that only maps lines (no column mappings) and are much faster.
  // devtool: 'eval-cheap-source-map' is similar but doesn’t generate SourceMaps for modules (i. e. jsx to js mappings).
  //
  // The best performance has devtool: 'eval', but it only maps to compiled source code per module. In many cases this is good enough. Hint: combine it with output.pathinfo: true.
  // The UglifyJsPlugin uses SourceMaps to map errors to source code. And SourceMaps are slow. As you should only use this in production this is fine. If your production build is really slow (or doesn’t finish at all) you can disable it with new UglifyJsPlugin({ sourceMap: false }).
  // devtool: utils.maps()
}