#!/bin/bash
# TODO: assign GCS_BUCKET to your GCS bucket
GCS_BUCKET = "your_bucket_path"

# TOOD: make sure that dscc, d3.js, and d3-sankey all have the correct paths
#
rm -rf deploy
mkdir -p deploy
cat lib/dscc.min.js > deploy/sankey.js
echo >> deploy/sankey.js
cat src/d3.min.js >> deploy/sankey.js
echo >> deploy/sankey.js
cat src/d3-sankey.min.js >> deploy/sankey.js
echo >> deploy/sankey.js
cat src/index.js >> deploy/sankey.js

cp src/sankey.json deploy/sankey.json
cp src/manifest.json deploy/manifest.json

gsutil cp -a public-read deploy/* "gs://$GCS_BUCKET" 
