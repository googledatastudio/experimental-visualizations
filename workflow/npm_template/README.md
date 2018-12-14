# Managing community visualizations using npm templates 

## Instructions

Replace "YOUR_DEV_BUCKET" and "YOUR_PROD_BUCKET" in `package.json` file with
your own GCS buckets.


Make sure you have [npm][npm_site] and
[gsutil][gsutil_site] installed locally.



When you first clone this folder, run:
```bash
npm install
```


How to use the scripts:
```bash
# to build the "dev" version
npm run build:dev

# to deploy to the "dev" bucket
npm run push:dev

# to build the "prod" version
npm run build:prod

# to deploy to the "prod" bucket
npm run push:prod
```


[showcase]: https://developers.google.com/visualization "Community Visualization Gallery"
[npm_site]: https://www.npmjs.com/ "Node Package Manager"
[gsutil_site]: https://cloud.google.com/storage/docs/gsutil "gsutil Tool docs"
