const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATH = require('../path');

module.exports = {
  entry: {
    'web': PATH.WEB + '/entry.js'
  },

  output: {
    path: PATH.DIST,
    filename: 'js/[name].js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      SOURCE: PATH.SOURCE,
      STYLE: PATH.STYLE,
      EXTENSION: PATH.EXTENSION
    }
  },

  plugins: [
    new CleanWebpackPlugin([PATH.DIST], PATH.ROOT),

    new CopyWebpackPlugin([
      {
        from: PATH.ASSETS + '/**/*',
        to: PATH.DIST + '/',
        context: PATH.APP + '/'
      }
    ]),
    
    new HtmlWebpackPlugin({
      template: PATH.WEB + '/index.html'
    })
  ],

  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}
