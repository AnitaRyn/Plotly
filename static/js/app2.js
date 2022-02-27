//iterate through the dataset and create opitons for the dropdown menu
d3.json("samples.json").then((data)=>{
    console.log(data);
    var dropdown = d3.select("#selDataset")
    var names = data["names"];
    for (var i = 0; i<names.length;i++){
        dropdown.append("option")
        .property("value",names[i])
            .text(names[i])
}

    //get values from the 
    var samples = data.samples;
    var metadata = data.metadata;

    var sample_values = filteredSample.sample_values;
    var otu_ids = filteredSample.otu_ids;
    var otu_labels = filteredSample.otu_labels;

    var bar_data = [{
        x: sample_values.slice(0,10).reverse(),
        y: otu_ids.slice(0,10).reverse(),
        text: otu_labels.slice(0,10).reverse(),
        type: "bar",
        orientation: "h"

    }];
    
}
    //define plot layout
    var layout = {
        title: 'top 10 OTUs',
        barmode: 'stack',
        width: 800
    };
    //display plot
    Plotly.newPlot('bar', bar_data, layout);



/*function getInfo(){
    d3.json("samples.json").then((data)=>{
        var metadata = data.metadata;
        console.log(metadata)
    
    //filter data based on id
    var result = metadata.filter(sampleObject => sampleObject.id==id);
    var demographicInfo = d3.select("#sample-metadata");
    
    //empty the info panel before getting new id info
    demographicInfo.html("");
    Object.entries(result).forEach((key) => {
        demographicInfo.append("h5").text(key);
    });    
//create function for the change event
function optionChanged(){
    d3.json("samples.json").then((data)=> {
    var dropdown = d3.select("#selDataset");
    })
d3.selectAll("#selDataset").on("change", optionChanged);


}

})
}*/
