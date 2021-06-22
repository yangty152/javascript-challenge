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
    var tr = tbody.append("tr");

    Object.entries(row).forEach(function([key, value]){
        var cell =tr.append("td");
        cell.text(value);
        });
    });

var button1 =d3.select("#filter-btn");
var button2 =d3.select("#clear-filter-btn");
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
    //var dict = []
    var filters = new Object();
    if (datetimeValue !== ""){
        filters["datetime"]=datetimeValue;
    }
    if (cityValue !== ""){
        filters["city"]=cityValue;
    }
    if (stateValue !== ""){
        filters["state"]=stateValue;
    }
    if (countryValue !== ""){
        filters["country"]=countryValue;
    }
    if (shapeValue !== ""){
        filters["shape"]=shapeValue;
    }

    var filteredData = tableData.filter(search, filters);
    
    function search(data){
      return Object.keys(this).every((key) => data[key] === this[key]);
    }

    filteredData.forEach(function(row){
        
        console.log(row);
        var tr = tbody.append("tr");
    
        Object.entries(row).forEach(function([key, value]){
            console.log(key,value);
            var cell =tr.append("td");
            cell.text(value);
            });
    });
    console.log(filteredData);
};

function filterReset(){
    d3.select("#datetime").property("value","");
    d3.select("#city").property("value","");
    d3.select("#state").property("value","");
    d3.select("#country").property("value","");
    d3.select("#shape").property("value","");
    data.forEach(function(row){
        console.log(row);
        var tr = tbody.append("tr");
    
        Object.entries(row).forEach(function([key, value]){
            console.log(key,value);
            var cell =tr.append("td");
            cell.text(value);
            });
        });
}

  button1.on("click", handleChange);
  button2.on("click", filterReset);
  form.on("submit",handleChange);