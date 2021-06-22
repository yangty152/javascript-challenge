// from data.js
var tableData = data;

// YOUR CODE HERE!
// select html elements
var tbody = d3.select("tbody");
var button1 =d3.select("#filter-btn");
var button2 =d3.select("#clear-filter-btn");
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
    // grab the values of the input fields
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
    
    //create a filter dictionary
    var filters = new Object();
    //assign key and value pair to the dictionary based on user inputs
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

    //call seaerch function to return filtered data 
    var filteredData = tableData.filter(search, filters);
    
    //search function that will search data based on filters in a dictionary
    function search(data){
      return Object.keys(this).every((key) => data[key] === this[key]);
    }

    //display filtered data in the html table
    filteredData.forEach(function(row){
        var tr = tbody.append("tr");
        Object.entries(row).forEach(function([key, value]){
            var cell =tr.append("td");
            cell.text(value);
            });
    });
};

//this function will empty all input values, and relist all values in the data.js
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

//events that triggers functions above
  button1.on("click", handleChange);
  button2.on("click", filterReset);
  form.on("submit",handleChange);