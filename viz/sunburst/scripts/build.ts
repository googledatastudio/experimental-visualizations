/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as bluebird from 'bluebird';
import * as CopyWebpackPlugin from 'copy-webpack-plugin';
import * as fs from 'mz/fs';
import * as path from 'path';
import * as webpack from 'webpack';

const buildOptions = (buildValues: any): webpack.Configuration => {
  // common options
  const webpackOptions: webpack.Configuration = {
    entry: {
      // this is the viz source code
      main: path.resolve('./src', 'index.ts'),
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: ['tsx', '.ts', '.js']
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

export const build = async (devMode: boolean) => {
  const devBucket: any = process.env.npm_package_dsccViz_gcsDevBucket;
  const prodBucket: any = process.env.npm_package_dsccViz_gcsDevBucket;
  const deployBucket = devMode ? devBucket : prodBucket;

  const encoding = 'utf-8';
  const webpackOptions = buildOptions(devMode);
  const compiler = webpack(webpackOptions);

  const compilerRun = bluebird.promisify(compiler.run, {context: compiler});

  await compilerRun();

  const manifestSrc = path.resolve(
    process.env.PWD!,
    'src',
    'manifest.json'
  );
  const manifestDest = path.resolve(
    process.env.PWD!,
    'build',
    'manifest.json'
  );
  const manifestContents = await fs.readFile(manifestSrc, encoding);
  const newManifest = manifestContents
    .replace(/YOUR_GCS_BUCKET/g, deployBucket)
    .replace(/"DEVMODE_BOOL"/, `${devMode}`);

  return fs.writeFile(manifestDest, newManifest);
};

const main = () => {
  const devArg = process.argv[2];
  const devMode = devArg === 'dev' ? true : false;
  build(devMode)
}

main()
