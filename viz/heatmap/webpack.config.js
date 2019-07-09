const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = [
  {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
      contentBase: './dist',
    },
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new CopyWebpackPlugin([
        {from: path.resolve('./src', 'index.css'), to: '.'},
      ]),
    ],
  },
];
