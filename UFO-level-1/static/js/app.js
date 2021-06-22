// from data.js
var tableData = data;

// YOUR CODE HERE!
// select html elements
var tbody = d3.select("tbody");
var button =d3.select("#filter-btn");
var form = d3.select("form");

// YOUR CODE HERE!
// append table to display data from data.js
data.forEach(function(row){
    var tr = tbody.append("tr");
    Object.entries(row).forEach(function([key, value]){
        var cell =tr.append("td");
        cell.text(value);
        });
    });

// function to display filtered data when Filter Table button is clicked or Enter is pressed on the keyboard after input value in the Enter a Data field.
function handleChange() {
    //clear the table
    d3.select("#ufo-table").selectAll("tr").remove();
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // grab the value of the input field
    var datetimeElement = d3.select("#datetime");
    var datetimeValue = datetimeElement.property("value");
    // when there is a date value, then filtered data based on the input value
    if (datetimeValue !== ""){
        var filteredData = tableData.filter(tableData => tableData.datetime === datetimeValue);
        //Display filtered data in the table
        filteredData.forEach(function(row){
        var tr = tbody.append("tr");  
        Object.entries(row).forEach(function([key, value]){
            var cell =tr.append("td");
            cell.text(value);
            });
        });
    }
    
    // when the value is removed, then display all data again.
    if(datetimeValue === ""){
        data.forEach(function(row){
            var tr = tbody.append("tr");       
            Object.entries(row).forEach(function([key, value]){
                var cell =tr.append("td");
                cell.text(value);
                });
            });
    }
};
  
button.on("click", handleChange);
form.on("submit",handleChange);