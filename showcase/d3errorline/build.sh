#!/bin/bash
DEV_BUCKET="YOUR_DEV_BUCKET_PATH/d3errorline"
PROD_BUCKET="YOUR_PROD_BUCKET_PATH/d3errorline"

rm -rf deploy
mkdir -p deploy
cat ~/Code/ds-component/lib/dscc.min.js src/d3.min.js src/index.js > deploy/d3errorline.js

cp src/d3errorline.json deploy/d3errorline.json

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
