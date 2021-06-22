// from data.js
var tableData = data;

// YOUR CODE HERE!
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
    var cityElement = d3.select("#city");
    var cityValue = cityElement.property("value");
    var stateElement = d3.select("#state");
    var stateValue = stateElement.property("value");
    var countryElement = d3.select("#country");
    var countryValue = countryElement.property("value");
    var shapeElement = d3.select("#shape");
    var shapeValue = shapeElement.property("value");
    if (datetimeValue!==null || cityValue!==null || stateValue!==null || countryValue!==null || shapeValue!==null){
        
    }
    if (datetimeValue!==null && cityValue!==null && stateValue!==null && countryValue!==null && shapeValue!==null)
    {
        var filteredData = tableData.filter((tableData => tableData.datetime === datetimeValue) && (tableData => tableData.city === cityValue)&&(tableData => tableData.state === stateValue)&&
        (tableData => tableData.country === countryValue)&&(tableData => tableData.shape === shapeValue))
    }
    //var filteredData = tableData.filter((tableData => tableData.datetime === datetimeValue)&&(tableData => tableData.city === cityValue))&&(tableData => tableData.state === stateValue)&&
    //(tableData => tableData.country === countryValue)&&(tableData => tableData.shape === shapeValue));
    console.log(filteredData)
    
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