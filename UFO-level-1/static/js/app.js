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
function handleChange(event) {
    // grab the value of the input field
    var inputText = d3.event.target.value;
    console.log(inputText)
    data.forEach(function(row){
        Object.entries(row).forEach(function([key,value]){
        }
    };
  };
  
  button.on("click", handleChange);
