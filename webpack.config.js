const path = require('path')

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      { test: /\.js?$/, loader: 'eslint', exclude: /node_modules/ }
    ],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
}
