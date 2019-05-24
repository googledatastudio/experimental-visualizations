const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = [
  {
    mode: 'development',
    entry: ['./src/index.scss', './src/index.js'],
    devServer: {
      contentBase: './dist',
    },
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'build'),
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'bundle.css',
              },
            },
            {loader: 'extract-loader'},
            {loader: 'css-loader'},
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [autoprefixer()],
              },
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: ['./node_modules'],
              },
            },
          ],
        },
      ],
    },
  },
];
