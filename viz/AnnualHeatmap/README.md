# Data Studio Community Visualization code to create Annual Weather Heatmap report

Data Studio [community visualizations][https://datastudio.google.com/c/u/0/navigation/reporting] allow you to write custom JavaScript visualizations for [Google Data Studio][https://developers.google.com/datastudio/visualization]

## About this Community Visualization

1) This Visualization allows you to view annual weather data in HeatMap view. 
2) The visualization takes weather data from different years and the report is rendered with the date and temperature fields and the color coding is based on the temperature on a particular day in the month.
3) Create a "New Field" using the formula "concat(MONTH(Date),"-",DAY(Date))" - The "Date" being the input from the sheet. 
4) The new field will be a text field in "month-date" format which is mandatory to create the report as it takes text data as input in the date dimension field. Select the new field as "Date Dimension"

![https://github.com/googledatastudio/experimental-visualizations/blob/AnnualHeatMap/viz/AnnualHeatmap/AnnualWeatherHeatmapStyle.png](https://github.com/googledatastudio/experimental-visualizations/blob/AnnualHeatMap/viz/AnnualHeatmap/AnnualWeatherHeatmap.png)

5) Custom styling options are available for the report generated. 

![https://github.com/googledatastudio/experimental-visualizations/blob/AnnualHeatMap/viz/AnnualHeatmap/AnnualWeatherHeatmapStyle.png](https://github.com/googledatastudio/experimental-visualizations/blob/AnnualHeatMap/viz/AnnualHeatmap/AnnualWeatherHeatmapStyle.png)

