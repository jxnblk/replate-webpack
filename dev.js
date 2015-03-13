// Attempting to use webpack node, but no idea how to set this up

console.log('testing WIP');

var WebpackDevServer = require("webpack-dev-server");
var webpack = require('webpack');
var config = require('./webpack.config');

var build = require('static-react/build');
var options = require('./config');

//webpack(config, function(err, stats) {
//
//  if (err) {
//    console.error(err);
//  }
//
//  build(options); 
//
//});

console.log(config);

var compiler = webpack(config, function(err, stats) {
  if (err) {
    console.log(err);
  }
  console.log('compiled');
  build(options);
});

//compiler

var server = new WebpackDevServer(compiler, {
  // webpack-dev-server options
  contentBase: __dirname,
  // or:
  //contentBase: "http://localhost:8090",

  //hot: true,
  // Enable special support for Hot Module Replacement
  // Page is no longer updated, but a "webpackHotUpdate" message is send to the content
  // Use "webpack/hot/dev-server" as additional module in your entry point
  // Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does. 

  // webpack-dev-middleware options
  quiet: false,
  noInfo: false,
  lazy: true,
  filename: "bundle.js",
  watchDelay: 300,
  publicPath: "/assets/",
  headers: { "X-Custom-Header": "yes" },
  stats: { colors: true },

  // set this as true if you want to access dev server from arbitrary url
  // this is handy if you are using a html5 router
  historyApiFallback: true,
});

server.listen(8090, "localhost", function() {
  console.log('Server listening at 8090');
});

