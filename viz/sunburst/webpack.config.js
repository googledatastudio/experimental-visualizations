const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = [
  {
    mode: 'development',
    entry: ['./dist/index.js'],
    devServer: {
      contentBase: './dist',
    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new CopyWebpackPlugin([
        {from: path.resolve('./src', 'index.css'), to: '.'},
      ]),
    ],
  },
];
