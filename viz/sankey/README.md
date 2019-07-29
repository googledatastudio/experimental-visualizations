# Data Studio Community Sankey community visualization

Data Studio [community visualizations][community viz] allow you to write custom
JavaScript visualizations for [Google Data Studio][datastudio].

![Sankey diagram](./src/sankey.png)

This [sankey] community visualization built with d3.js takes 2 dimensions and a metric. It works best with dimensions of moderate [cardinality] - for example, dimensions with 5-10 unique values.

> Note: This sankey will not render if the two dimensions have overlapping values.
> For example: if > `a` exists in dimension 1, dimension 2 cannot contain the value `a`.

## Deployed version

Component ID of the deployed version of this visualization:

```
gs://public-community-viz-showcase-reports/sankey
```

See the visualization [deployed].

## Authors

This code was written by Yulan Lin.

[community viz]: http://developers.google.com/datastudio/visualization
[datastudio]: https://datastudio.google.com
[sankey]: https://en.wikipedia.org/wiki/Sankey_diagram
[cardinality]: https://en.wikipedia.org/wiki/Cardinality
[deployed]: https://datastudio.google.com/u/0/reporting/1hdqhp5dK31BcFInZzmaQOEQdVB54D4gz/page/j9DU
