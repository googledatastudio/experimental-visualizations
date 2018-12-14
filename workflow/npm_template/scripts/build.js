// imports
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const program = require('commander');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

// constants
const DEV_BUCKET = process.env.npm_package_config_gcsDevBucket;
const PROD_BUCKET = process.env.npm_package_config_gcsProdBucket;
const MANIFEST_FILE = process.env.npm_package_config_manifestFile;
const JS_FILE = process.env.npm_package_config_jsFile;
const JSON_FILE = process.env.npm_package_config_jsonFile;

// configure command-line arguments
program
  .option('-p, --prod', 'Build for prod?', /^(true|false)$/i, true)
  .parse(process.argv);

// default to dev if it's not prod
const DEVMODE = program.args[0] === 'true' ? false : true;
const GCS_BUCKET = DEVMODE ? DEV_BUCKET : PROD_BUCKET;

const encoding = 'utf-8';

// common options
let webpackOptions = {
  entry: {
    // this is the viz source code
    main: path.resolve(__dirname, '..', 'src', JS_FILE),
  },
  output: {
    filename: JS_FILE,
    path: path.resolve(__dirname, '..', 'dist'),
  },
  plugins: [
    new CopyWebpackPlugin([{from: path.join('src', JSON_FILE), to: '.'}]),
  ],
};

if (DEVMODE === true) {
  const devOptions = {
    mode: 'development',
    devtool: 'inline-source-map',
  };
  webpackOptions = Object.assign(webpackOptions, devOptions);
} else {
  const prodOptions = {
    mode: 'production',
    optimization: {
      minimizer: [new UglifyJsPlugin({
        sourceMap: false,
        uglifyOptions: {
          comments: false
        }
      })],
    },
  };
  webpackOptions = Object.assign(webpackOptions, prodOptions);
}

const compiler = webpack(webpackOptions);

// put everything together except the manifest
compiler.run((err, stats) => {
  // once dist is created...
  fs.readFileAsync(path.join('src', MANIFEST_FILE), encoding).then(value => {
    const newManifest = value
      .replace(/YOUR_GCS_BUCKET/g, GCS_BUCKET)
      .replace(/"DEVMODE_BOOL"/, DEVMODE);
    fs.writeFileAsync(path.join('./dist', MANIFEST_FILE), newManifest).catch(
      err => {
        console.log('Unable to write manifest: ', err);
      }
    );
  });
});
