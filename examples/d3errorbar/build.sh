#!/bin/bash
GCS_BUCKET="yulanlin-sand/showcase/d3errorbar"

rm -rf deploy
mkdir -p deploy
cat ~/Code/ds-component/lib/dscc.min.js >> deploy/d3errorbar.js
echo >> deploy/d3errorbar.js
cat src/d3.min.js >> deploy/d3errorbar.js
echo >> deploy/d3errorbar.js
cat src/index.js >> deploy/d3errorbar.js

cp src/d3errorbar.json deploy/d3errorbar.json
cp src/d3errorbar.css deploy/d3errorbar.css
cp src/manifest.json deploy/manifest.json

gsutil cp -a public-read deploy/* "gs://$GCS_BUCKET" 
