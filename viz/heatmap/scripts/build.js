
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const webpackOptions = {
  mode: 'development',
  entry: [
    // this is the viz source code
    path.resolve('./src', 'index.js'),
    path.resolve('./src', 'index.scss')
  ],
  output: {
    filename: 'index.js',
    path: path.resolve('./build'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'index.css',
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve('./node_modules/')]
            }
          },

        ]
      },
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve('./src/', 'index.json'),
        to: '.',
      },
      {
        from: path.resolve('./src/', 'manifest.json'),
        to: '.',
      },
    ]),
  ],
};

const build = async (webpackOptions) => {
  const compiler = webpack(webpackOptions);
  compiler.run((err, stats) => {
    // console.log(err);
    // console.log(stats);
  })

};

console.log(path.resolve('./node_modules/'));
build(webpackOptions)
