const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.base.config');

const devConfig = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 9001,
    hot: true
  }
};

module.exports = merge(config, devConfig);
