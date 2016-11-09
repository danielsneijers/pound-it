const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!css-loader!postcss-loader'
      }
    ]
  },
  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.js'],
    modulesDirectories: [
      'node_modules',
      'src/js',
      'src/css'
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
      googleAnalytics: {
        trackingId: 'UA-15406251-3',
        pageViewOnLoad: true
      },
      inject: true,
      hash: true
    })
  ],
  postcss: () => {
    return [
      require('postcss-import'),
      require('postcss-cssnext')({ browsers: 'last 3 Chrome versions' })
    ]
  }
}
