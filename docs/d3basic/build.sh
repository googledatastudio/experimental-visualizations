#!/bin/bash
GCS_BUCKET="YOUR_GCS_BUCKET_PATH/d3basic"

rm -rf deploy
mkdir -p deploy
cat dscc.js > deploy/d3basic.js
echo >> deploy/d3basic.js
cat src/d3.min.js >> deploy/d3basic.js
echo >> deploy/d3basic.js
cat src/index.js >> deploy/d3basic.js

cp src/d3basic.json deploy/d3basic.json
cp src/manifest.json deploy/manifest.json

gsutil cp -a public-read deploy/* "gs://$GCS_BUCKET" 
