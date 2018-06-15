#!/bin/bash

VIS_NAME="$1"
GCS_BUCKET="$2"

yarn install
yarn build
mkdir -p deploy
cp build/static/js/*.js "deploy/$VIS_NAME.js"
cp "src/$VIS_NAME.json" "deploy/$VIS_NAME.json"
cp "src/$VIS_NAME.css" "deploy/$VIS_NAME.css"

gsutil.par cp -a public-read deploy/* "gs://$GCS_BUCKET"
