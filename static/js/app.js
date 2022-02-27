//iterate through the dataset and create opitons for the dropdown menu
d3.json("samples.json").then((data)=>{
    var dropdown = d3.select("#selDataset")
    var names = data["names"];
    for (var i = 0; i<names.length;i++){
        dropdown.append("option")
        .property("value",names[i])
            .text(names[i])
}

function optionChanged() {
    d3.json("samples.json").then(function(data){
        var dropdownMenu = d3.select("#selDataset");
        var dataset = dropdownMenu.property("value");
        for(var i = 0; i < metadata.length; i++){   
}
}
}
d3.selectAll("#selDataset").on("change", optionChanged);

/*d3.selectAll("#selData").on("optionChanged(this.value)")

function info() {
    var div = d3.select('#sample-metadata');
    for(var i = 0; i < metadata.length; i++){
    

/*
//horizontal bar chart to display the top 10 OTUs

function buildPlot(){
    d3.json("samples.json").then(function(data){

var number = data.samples.slice(0,10);
var id = data.map(x=>x.otu_ids);
var otu_label = data.otu_labels;

var trace1 = {
    x: number.reverse(),
    y: id.reverse(),
    text: otu_label.reverse(),
    type: "bar",
    orientation: "h"
    }
};    

var data = [trace1];

var layout = {
    title: 'top 10 OTUs',
    barmode: 'stack',
    width: 800
}
Plotly.newPlot('plot', trace1, layout);

buildPlot();
*/
})