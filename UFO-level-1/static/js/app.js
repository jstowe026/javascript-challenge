// from data.js
var tableData = data;

var tbody = d3.select("tbody");

//Pull in table of data to html
function buildTable(data) {
  tbody.html("");

  data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
}) 
}

buildTable(tableData);


// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredDate = tableData.filter(date => date.datetime === inputValue);

  console.log(filteredDate);

  buildTable(filteredDate);

  });