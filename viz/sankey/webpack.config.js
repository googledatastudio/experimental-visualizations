const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const CSS_FILE = process.env.npm_package_dsccViz_cssFile;

module.exports = [
  {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
      contentBase: './dist',
    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new CopyWebpackPlugin([{from: path.join('src', CSS_FILE), to: '.'}]),
    ],
  },
];
