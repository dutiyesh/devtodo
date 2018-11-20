const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATH = require('../path');

module.exports = {
  entry: {
    'devtools': PATH.EXTENSION + '/js/devtools.js',
    'panel': PATH.EXTENSION + '/js/panel.js'
  },

  output: {
    path: PATH.DIST + '/extension',
    filename: 'js/[name].js',
    publicPath: ''
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
        from: PATH.EXTENSION + '/*',
        to: PATH.DIST + '/',
        context: PATH.APP + '/',
        ignore: ['*.js', 'devtools.html', 'panel.html']
      }
    ]),

    new CopyWebpackPlugin([
      {
        from: PATH.ASSETS + '/icons/*',
        to: PATH.DIST + '/extension/',
        context: PATH.APP + '/'
      }
    ]),

    new HtmlWebpackPlugin({
      template: PATH.EXTENSION + '/devtools.html',
      filename: 'devtools.html',
      chunks: ['devtools', 'runtime']
    }),

    new HtmlWebpackPlugin({
      template: PATH.EXTENSION + '/panel.html',
      filename: 'panel.html',
      chunks: ['panel', 'runtime', 'vendors']
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
