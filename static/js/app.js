d3.json("samples.json").then((data)=>{
    var dropdown = d3.select("#selDataset");
    var names = data["names"];
    
    for (var i = 0; i<names.length;i++){
    dropdown.append("option")
    .property("value",names[i])
    .text(names[i])
    }
    
})
function buildChart(input) {
    d3.json("samples.json").then((data)=>{
    var newData = data.samples
    newData = newData.filter(x=>x.id===input)
    
    var sample_values = newData[0].sample_values
    var otu_ids = newData[0].otu_ids
    var otu_labels = newData[0].otu_labels

    var xData = newData[0].sample_values.slice(0,10).reverse()
    var yData = newData[0].otu_ids.slice(0,10)
    yData = yData.map(x=>`otu ${x}`)
    var labels = newData[0].otu_labels.slice(0,10)

    //Create bar chart
    var barData = [{
    x: xData,
    y: yData,
    text: labels,
    type: "bar",
    orientation: "h"
    }]
    //define plot layout
    var layout = {
    title: 'Top 10 OTUs',
    barmode: 'stack',
    width: 800
    };
    //display plot
    Plotly.newPlot('bar', barData, layout);

    //Bubble chart
    var bubbleData = [{
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        mode: 'markers',
        marker: {
            color: otu_ids,
            size: sample_values,
            colorscale: 'YlOrRd'
          }
        }];
        //define plot layout
        var layout = {
        height: 600,
        width: 600
        };
        //display plot
        Plotly.newPlot('bubble', bubbleData, layout);
    })   
}
buildChart("952")
function buildData(input){
d3.json("samples.json").then((data)=>{
    console.log(data)
    var newData = data.metadata
    newData = newData.filter(x=>x.id===input)
   
    //console.log(Object.entries(newData[0]))
    var metaTag = d3.select("#sample-metadata")
    metaTag.html("")
    Object.entries(newData[0]).forEach (([a,b])=>{
    console.log(a,b)
    metaTag.append("p").text(`${a}:${b}`)
    })
})
}
buildData (940)
function optionChanged(input){
    buildChart(input)
    buildData (parseInt(input))
}
