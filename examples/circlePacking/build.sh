#! /bin/bash

# TODO: assign GCS_BUCKET to your GCS bucket
GCS_BUCKET = "your_bucket_path"

# create a directory for deployment files
rm -rf deploy
mkdir -p deploy

# create the combined js file
# TODO: ensure that gdscv and d3 have the correct paths 
cat ./lib/gdscv.min.js > deploy/circlePacking.js
echo >> deploy/circlePacking.js
cat ./lib/d3.min.js >> deploy/circlePacking.js
cat ./src/index.js >> deploy/circlePacking.js

# add the configuration json to the deploy directory
cp src/circlePacking.json deploy/circlePacking.json

# use clasp to update the Google apps script manifest
cd appsscript-src/; npx @google/clasp push

# use gsutil to copy the files in deploy to your GCS bucket
gsutil cp -a public-read deploy/* "gs://$GCS_BUCKET" 
