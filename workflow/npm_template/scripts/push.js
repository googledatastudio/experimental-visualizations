// imports
const program = require('commander');
const shell = require('shelljs');

// constants
const DEV_BUCKET = process.env.npm_package_config_gcsDevBucket;
const PROD_BUCKET = process.env.npm_package_config_gcsProdBucket;

// configure command-line arguments
program
  .option('-p, --prod', 'Build for prod?', /^(true|false)$/i, true)
  .parse(process.argv);

const GCS_BUCKET = program.args[0] === 'true' ? PROD_BUCKET : DEV_BUCKET;

shell.cd('dist')
shell.exec('gsutil cp -a public-read * ' + GCS_BUCKET);
