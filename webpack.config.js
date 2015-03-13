
module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    //path: __dirname,
    publicPath: 'http://localhost:8090/assets',
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader', },
      { test: /\.json/, loader: 'json-loader', },
    ]
  },
  externals: {
    // Uncomment to skip bundling React
    //'react': 'React',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  }
};
