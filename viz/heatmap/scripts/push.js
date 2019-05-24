const shelljs = require('shelljs');
const bluebird = require('bluebird');

const deploy = async bucketName => {
  shelljs.cd('build');
  const asyncExec = bluebird.promisify(shelljs.exec);
  await asyncExec(`gsutil cp -a public-read * ${bucketName}`);
  console.log(`Viz deployed to: ${bucketName}`);
};

deploy('gs://public-community-viz-showcase-reports/heatmap');
