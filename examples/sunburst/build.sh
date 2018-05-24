#! /bin/bash

# TODO: assign GCS_BUCKET to your GCS bucket
GCS_BUCKET = "your_bucket_path"

# create a directory for deployment files
rm -rf deploy
mkdir -p deploy

# create the combined js file
# TODO: ensure that dscc and d3 have the correct paths 
cat ./lib/dscc.min.js > deploy/sunburst.js
echo >> deploy/sunburst.js
cat ./lib/d3.min.js >> deploy/sunburst.js
cat ./src/index.js >> deploy/sunburst.js

# add the configuration json to the deploy directory
cp src/sunburst.json deploy/sunburst.json

# use clasp to update the Google apps script manifest
cd appsscript-src/; npx @google/clasp push

# use gsutil to copy the files in deploy to your GCS bucket
gsutil cp -a public-read deploy/* "gs://$GCS_BUCKET" 
