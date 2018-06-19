#!/bin/bash
GCS_BUCKET="YOUR_GCS_BUCKET_PATH"

rm -rf deploy
mkdir -p deploy
# TODO: make sure that the path to dscc is correct
cat dscc.min.js > deploy/sankey.js
echo >> deploy/sankey.js
# TODO: make sure that the path to d3 and d3-sankey is correct
cat src/d3.min.js >> deploy/sankey.js
echo >> deploy/sankey.js
cat src/d3-sankey.min.js >> deploy/sankey.js
echo >> deploy/sankey.js
cat src/index.js >> deploy/sankey.js

cp src/sankey.json deploy/sankey.json
cp src/manifest.json deploy/manifest.json

gsutil cp -a public-read deploy/* "gs://$GCS_BUCKET" 
