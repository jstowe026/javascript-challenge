// from data.js
var tableData = data;

//Pull in table of data to html
var tbody = d3.select("tbody");

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


// Select the button - Date
var button1 = d3.select("#filter-btn1");

button1.on("click", function() {

    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElementDate = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValueDate = inputElementDate.property("value");
  
    console.log(inputValueDate);
    console.log(tableData);

    var filteredDate = tableData.filter(date => date.datetime === inputValueDate);
  
    console.log(filteredDate);

    buildTable (filteredDate);

  });

  // Select the button - City
var button2 = d3.select("#filter-btn2");

button2.on("click", function() {

    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElementCity = d3.select("#city");
  
    // Get the value property of the input element
    var inputValueCity = inputElementCity.property("value");
  
    console.log(inputValueCity);
    console.log(tableData);

    var filteredCity = tableData.filter(city => city.city === inputValueCity);
  
    console.log(filteredCity);

    buildTable (filteredCity);

  });

  // Select the button - State
var button3 = d3.select("#filter-btn3");

button3.on("click", function() {

    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElementState = d3.select("#state");
  
    // Get the value property of the input element
    var inputValueState = inputElementState.property("value");
  
    console.log(inputValueState);

    var filteredState = tableData.filter(state => state.state === inputValueState);
  
    console.log(filteredState);

    buildTable (filteredState);

  });

 // Select the button - Shape
var button5 = d3.select("#filter-btn5");

button5.on("click", function() {

  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElementShape = d3.select("#shape");

  // Get the value property of the input element
  var inputValueShape = inputElementShape.property("value");

  console.log(inputValueShape);

  var filteredShape = tableData.filter(shape => shape.shape === inputValueShape);

  console.log(filteredShape);

  buildTable (filteredShape);

  });