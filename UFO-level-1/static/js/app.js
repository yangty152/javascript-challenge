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
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // grab the value of the input field
    var inputElement = d3.select("#datetime");
    var inputText = inputElement.property("value");
    console.log(inputText)
    var filteredData = tableData.filter(tableData => tableData.datetime === inputText);
    console.log(filteredData)
};
  
  button.on("click", handleChange);
  form.on("submit",handleChange);