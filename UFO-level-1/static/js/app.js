// from data.js
var tableData = data;

// YOUR CODE HERE!
// from data.js
var tbody = d3.select("tbody");

// YOUR CODE HERE!
data.forEach(function(row){
    console.log(row);
    var tr = tbody.append("tr");

    Object.entries(row).forEach(function([key, value]){
        console.log(key,value);
        var cell =tr.append("td");
        cell.text(value);
        });
    });

var button =d3.select("#filter-btn");
// Select the form
var form = d3.select("form");
function handleChange() {
    d3.select("#ufo-table").selectAll("tr").remove();
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // grab the value of the input field
    var datetimeElement = d3.select("#datetime");
    var datetimeValue = datetimeElement.property("value");
    var filteredData = tableData.filter(tableData => tableData.datetime === datetimeValue);
    console.log(filteredData);
    
    //Display filtered data in the table
    filteredData.forEach(function(row){
        
        console.log(row);
        var tr = tbody.append("tr");
    
        Object.entries(row).forEach(function([key, value]){
            console.log(key,value);
            var cell =tr.append("td");
            cell.text(value);
            });
        });
};
  
  button.on("click", handleChange);
  form.on("submit",handleChange);