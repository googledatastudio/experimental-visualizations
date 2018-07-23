#!/bin/bash
DEV_BUCKET="YOUR_DEV_BUCKET_PATH/d3basic"

rm -rf deploy
mkdir -p deploy
cat ~/Code/ds-component/lib/dscc.min.js > deploy/d3basic.js
echo >> deploy/d3basic.js
cat src/d3.min.js >> deploy/d3basic.js
echo >> deploy/d3basic.js
cat src/index.js >> deploy/d3basic.js

cp src/d3basic.json deploy/d3basic.json
cp src/d3basic.css deploy/d3basic.css

# default to dev unless prod arg passed
echo "deploying to $DEV_BUCKET"
cat src/manifest.json | sed -e "s|MY_GOOGLE_CLOUD_STORAGE_BUCKET|$DEV_BUCKET|" > deploy/manifest.json
gsutil cp -a public-read deploy/* "gs://$DEV_BUCKET" 

