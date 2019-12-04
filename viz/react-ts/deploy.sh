#!/bin/bash

set -ex

yarn build


echo > index.js
for f in build/static/js/*.js
do
  cat $f >> index.js
  echo >> index.js
done
mv index.js build/viz.js

gsutil cp -a public-read manifest.json gs://yl-viz-dev/react-ts/
gsutil cp -a public-read config.json gs://yl-viz-dev/react-ts/
gsutil cp -a public-read build/viz.js gs://yl-viz-dev/react-ts/
