#!/bin/bash
DEV_BUCKET="YOUR_DEV_BUCKET_PATH/d3errorbar"
PROD_BUCKET="YOUR_PROD_BUCKET_PATH/d3errorbar"

rm -rf deploy
mkdir -p deploy
cat ~/Code/ds-component/lib/dscc.min.js > deploy/d3errorbar.js
echo >> deploy/d3errorbar.js
cat src/d3.min.js >> deploy/d3errorbar.js
echo >> deploy/d3errorbar.js
cat src/index.js >> deploy/d3errorbar.js

cp src/d3errorbar.json deploy/d3errorbar.json
cp src/d3errorbar.css deploy/d3errorbar.css

# default to dev unless prod arg passed
if [ $1 == "-prod" ]
then
  echo "deploying to $PROD_BUCKET"
  cat src/manifest.json | sed -e "s|GCS_PARENT_BUCKET|gs://$PROD_BUCKET|" -e "s/DEVMODE_BOOL/false/" > deploy/manifest.json
  gsutil cp -a public-read deploy/* "gs://$PROD_BUCKET" 
else
  echo "deploying to $DEV_BUCKET"
  cat src/manifest.json | sed -e "s|GCS_PARENT_BUCKET|$DEV_BUCKET|" -e "s/DEVMODE_BOOL/true/" > deploy/manifest.json
  gsutil cp -a public-read deploy/* "gs://$DEV_BUCKET" 
fi
