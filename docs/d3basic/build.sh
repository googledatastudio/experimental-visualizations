#!/bin/bash
GCS_BUCKET="$1"

# USER TODO: Ensure that dscc and d3.js have the correct paths

rm -rf deploy
mkdir -p deploy

cat ~/Code/ds-component/lib/dscc.js > deploy/d3basic.js
echo >> deploy/d3basic.js
cat src/d3.min.js >> deploy/d3basic.js
echo >> deploy/d3basic.js
cat src/index.js >> deploy/d3basic.js

cp src/d3basic.json deploy/d3basic.json

gsutil cp -a public-read deploy/* "gs://$GCS_BUCKET" 
