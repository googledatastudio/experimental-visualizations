#!/bin/bash
DEV_BUCKET="YOUR_DEV_BUCKET_PATH/codelab"

rm -rf deploy
mkdir -p deploy

cat ~/Code/ds-component/lib/dscc.min.js src/myVizSource.js > deploy/myViz.js
cp src/myViz.css deploy/myViz.css
cp src/myViz.json deploy/myViz.json
cp src/manifest.json deploy/manifest.json

# default to dev unless prod arg passed
echo "deploying to $DEV_BUCKET"
cat src/manifest.json | sed -e "s|MY_GOOGLE_CLOUD_STORAGE_BUCKET|$DEV_BUCKET|" > deploy/manifest.json
gsutil cp -a public-read deploy/* "gs://$DEV_BUCKET" 
