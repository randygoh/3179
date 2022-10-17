var vg_1 = "us_crime_2016_map.vg.json";
vegaEmbed("#map", vg_1).then(function(result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "violent_crime_line_chart.vg.json";
vegaEmbed("#linechart", vg_2).then(function(result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error)

var vg_3 = "us_crime_2016_piechart.vg.json";
vegaEmbed("#piechart", vg_3).then(function(result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error)

var vg_4 = "property_crime_line_chart.vg.json";
vegaEmbed("#linechart2", vg_4).then(function(result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error)

var vg_5 = "total_crime_area_chart.vg.json";
vegaEmbed("#areachart", vg_5).then(function(result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error)