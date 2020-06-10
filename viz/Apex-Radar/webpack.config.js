const path = require('path');
const fs = require('fs');

const plugins = [];
let body = '<script src="main.js"></script>';

const iframeHTML = `
<!doctype html>
<html><body>
${body}
</body></html>
`;

fs.writeFileSync(path.resolve(__dirname, 'dist', 'vizframe.html'), iframeHTML);

module.exports = [
  {
    mode: 'development',
    entry: './src/index.ts',
    devServer: {
      contentBase: './dist',
    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: plugins,
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
  },
];
