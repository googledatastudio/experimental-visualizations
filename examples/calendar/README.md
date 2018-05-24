# Calendar Visualization

This directory provides sample visualization code for [Data Studio Community
Visualizations](https://datastudio.com/datastudio/visualization).

The [build.sh](./build.sh) script provides an example of a bash script to build
and deploy the visualization. The script depends on
[clasp](https://github.com/google/clasp), a command-line utility for developing
Google apps script projects, and
[gsutil](https://cloud.google.com/storage/docs/gsutil), a command-line
application for accessing Google cloud storage.

This repository does not contain
[dscc](https://github.com/googledatastudio/ds-component/blob/master/lib/dscc.min.js<sup>1</sup>,
or d3.js, which are both required for the visualization to run. 

1.  The link will return a 404 if you are not part of trusted testing.
