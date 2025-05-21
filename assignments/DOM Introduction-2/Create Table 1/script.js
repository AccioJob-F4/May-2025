/**
 * Function to insert a new row at the beginning of the table
 * This function is called when the "Insert row" button is clicked
 */
function insert_Row() {
  // Get a reference to the table element by its ID
  var table = document.getElementById("sampleTable");

  // Create a new row at position 0 (top of the table)
  // insertRow(0) adds the row at the first position, pushing existing rows down
  var newRow = table.insertRow(0);

  // Create two cells within the newly created row
  // insertCell(0) creates the first cell
  var cell1 = newRow.insertCell(0);
  // insertCell(1) creates the second cell
  var cell2 = newRow.insertCell(1);

  // Set the HTML content of the cells to display text
  cell1.innerHTML = "New Cell1";
  cell2.innerHTML = "New Cell2";
}
