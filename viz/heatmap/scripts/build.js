const bluebird = require('bluebird');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const fs = require('mz/fs');
const path = require('path');
const webpack = require('webpack');

const buildOptions = buildValues => {
  // common options
  const webpackOptions = {
    entry: {
      // this is the viz source code
      main: path.resolve('./src', 'index.js'),
    },
    module: {
      rules: [
        {
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.js'],
    },
    output: {
      filename: 'index.js',
      path: path.resolve('./build'),
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          from: path.resolve('./src', 'index.json'),
          to: '.',
        },
        {
          from: path.resolve('./src', 'index.css'),
          to: '.',
        },
      ]),
    ],
  };

  if (buildValues.devMode) {
    const devOptions = {
      mode: 'development',
    };
    Object.assign(webpackOptions, devOptions);
  } else {
    const prodOptions = {
      mode: 'production',
    };
    Object.assign(webpackOptions, prodOptions);
  }

  return webpackOptions;
};

const build = async devMode => {
  const devBucket = process.env.npm_package_dsccViz_gcsDevBucket;
  const prodBucket = process.env.npm_package_dsccViz_gcsProdBucket;
  const deployBucket = devMode ? devBucket : prodBucket;

  const encoding = 'utf-8';
  const webpackOptions = buildOptions(devMode);
  const compiler = webpack(webpackOptions);

  const compilerRun = bluebird.promisify(compiler.run, {context: compiler});

  await compilerRun();

  const manifestSrc = path.resolve(process.env.PWD, 'src', 'manifest.json');
  const manifestDest = path.resolve(process.env.PWD, 'build', 'manifest.json');
  const manifestContents = await fs.readFile(manifestSrc, encoding);
  const newManifest = manifestContents
    .replace(/YOUR_GCS_BUCKET/g, deployBucket)
    .replace(/"DEVMODE_BOOL"/, `${devMode}`);

  return fs.writeFile(manifestDest, newManifest);
};

const main = () => {
  const devArg = process.argv[2];
  const devMode = devArg === 'dev' ? true : false;
  build(devMode);
};

main();
