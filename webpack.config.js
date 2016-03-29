var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    "./index.js"
  ],
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader?localIdentName=[path][name]__[hash:base64:5]__[local]!less-loader"
      },
    ]
  },
  devServer: {
    stats: 'warnings-only',
  }
};
