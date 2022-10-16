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