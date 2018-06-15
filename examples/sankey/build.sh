#!/bin/bash
GCS_BUCKET="yulanlin-sand/showcase/sankey"

rm -rf deploy
mkdir -p deploy
cat ~/Code/ds-component/lib/dscc.min.js > deploy/sankey.js
echo >> deploy/sankey.js
cat src/d3.min.js >> deploy/sankey.js
echo >> deploy/sankey.js
cat src/d3-sankey.min.js >> deploy/sankey.js
echo >> deploy/sankey.js
cat src/index.js >> deploy/sankey.js

cp src/sankey.json deploy/sankey.json
cp src/manifest.json deploy/manifest.json

gsutil cp -a public-read deploy/* "gs://$GCS_BUCKET" 
