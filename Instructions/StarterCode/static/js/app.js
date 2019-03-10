// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach((UFO_sighting) => {
    var row = tbody.append("tr");
    Object.values(UFO_sighting).forEach((value) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

var submit = d3.select("#filter-btn");

submit.on("click", function() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    d3.selectAll("tbody>tr").remove()
    var filteredData = tableData.filter(UFO_sighting => UFO_sighting.datetime === inputValue);
    console.log(filteredData);    
    filteredData.forEach((UFO_sighting) => {
        var row = tbody.append("tr");
        Object.values(UFO_sighting).forEach((value) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
});