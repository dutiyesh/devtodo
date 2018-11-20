const merge = require('webpack-merge');

const PATH = require('../path');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
  mode: 'development',

  devtool: 'source-map',

  watch: true,

  devServer: {
    contentBase: PATH.DIST,
    compress: true,
    host: '0.0.0.0',
    port: 9000,
    inline: true
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
})
