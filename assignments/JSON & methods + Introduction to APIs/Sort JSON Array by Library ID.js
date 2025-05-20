/**
 * SORT JSON ARRAY BY LIBRARY ID
 *
 * This script demonstrates sorting an array of library objects by their libraryID property.
 * It handles JSON parsing, array sorting, and formatted output.
 *
 * Concepts demonstrated:
 * - JSON parsing (JSON.parse)
 * - Array sorting with custom comparator function
 * - Command-line input handling with Node.js readline
 * - Object property access
 * - String concatenation
 */

/**
 * Comparison function for sorting library objects by libraryID in ascending order
 *
 * @param {Object} a - First library object with libraryID property
 * @param {Object} b - Second library object with libraryID property
 * @returns {number} - Negative if a should come before b, positive if a should come after b
 *
 * When used with Array.sort(), this function will sort the array in ascending order
 * based on the libraryID property of each object.
 */
function AscendingSort(a, b) {
  // Compare libraryID values numerically
  // Subtraction will return:
  // - Negative value if a's libraryID is smaller than b's (a comes first)
  // - Zero if they're equal (order remains unchanged)
  // - Positive value if a's libraryID is larger than b's (b comes first)
  return a.libraryID - b.libraryID;
}

//DO NOT CHANGE THE CODE BELOW

// Create readline interface to handle user input from standard input (terminal)
var readline = require("readline").createInterface(process.stdin);
readline.on("line", readInputs);

/**
 * Processes input JSON, sorts it, and outputs the results
 *
 * @param {string} line - JSON string input that will be parsed
 *
 * Processing flow:
 * 1. Parse the input string into a JavaScript object using JSON.parse()
 * 2. Sort the array of objects by libraryID using our custom comparator
 * 3. Output each library item in the sorted order with formatted information
 */
function readInputs(line) {
  // Parse JSON string into a JavaScript object
  // The input is expected to be a JSON array of library objects
  let obj = JSON.parse(line);

  // Sort the object array using the AscendingSort comparison function
  // This modifies the original array (sort operates in-place)
  var sortedObj = obj.sort(AscendingSort);

  // Output each library item in the sorted array
  for (var i = 0; i < sortedObj.length; i++) {
    // Note: There appears to be an issue with the separators in the output formatting
    // It's using "" - "" which likely doesn't produce the intended result
    // A better approach would be to use a proper separator like " - "
    console.log(
      sortedObj[i].title +
        "" -
        "" +
        sortedObj[i].author +
        "" -
        "" +
        sortedObj[i].libraryID
    );
  }

  // Close the readline interface after processing is complete
  readline.close();
}
