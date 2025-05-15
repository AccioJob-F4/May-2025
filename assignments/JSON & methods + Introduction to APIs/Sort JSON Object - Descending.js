/**
 * Sorts an array of library objects by libraryID in descending order
 * @param {Array} initial - Array of objects containing libraryID property
 * @returns {Array} - The sorted array
 *
 * This function uses the Array.sort() method with a custom comparison function
 * that compares libraryID values in descending order (higher values first).
 */
function DecendingSort(initial) {
  // Use Array.sort() with a comparison function that:
  // - Returns negative value if b should come before a
  // - Returns 0 if the order remains unchanged
  // - Returns positive value if a should come before b
  // Since we want descending order, we subtract a from b
  const sortedArr = initial.sort((a, b) => b.libraryID - a.libraryID);
  return sortedArr;
}

// DO NOT CHANGE THE CODE BELOW

// Create readline interface to handle user input
var readline = require("readline").createInterface(process.stdin);
readline.on("line", readInputs);

/**
 * Processes input JSON, sorts it, and outputs the results
 * @param {string} line - JSON string input that will be parsed
 *
 * This function:
 * 1. Parses the JSON input into an object
 * 2. Sorts the object array by libraryID in descending order
 * 3. Outputs each item in the sorted array with title-author-libraryID format
 */
function readInputs(line) {
  // Parse JSON string into an object
  let obj = JSON.parse(line);

  // Sort the object array in descending order by libraryID
  var sortedObj = DecendingSort(obj);

  // Output each library item in the sorted array
  for (var i = 0; i < sortedObj.length; i++) {
    console.log(
      sortedObj[i].title +
        "-" +
        sortedObj[i].author +
        "-" +
        sortedObj[i].libraryID
    );
  }
  readline.close();
}
