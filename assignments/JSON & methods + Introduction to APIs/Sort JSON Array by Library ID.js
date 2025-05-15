/**
 * Comparison function for sorting library objects by libraryID in ascending order
 * @param {Object} a - First library object with libraryID property
 * @param {Object} b - Second library object with libraryID property
 * @returns {number} - Negative if a should come before b, positive if after
 *
 * Note: There's a parameter mismatch between function definition (initial)
 * and actual usage (a, b), but the code uses the parameters implicitly
 * passed by Array.sort() which are the array elements being compared.
 */
function AscendingSort(initial) {
  // Write your code here
  return a.libraryID - b.libraryID;
}

//DO NOT CHANGE THE CODE BELOW

// Create readline interface to handle user input
var readline = require("readline").createInterface(process.stdin);
readline.on("line", readInputs);

/**
 * Processes input JSON, sorts it, and outputs the results
 * @param {string} line - JSON string input that will be parsed
 *
 * This function:
 * 1. Parses the JSON input into an object
 * 2. Sorts the object array by libraryID using the AscendingSort function
 * 3. Outputs each item in the sorted array
 *
 * Note: There appears to be an issue with the string concatenation in the output
 * (using "" - "" instead of proper separators)
 */
function readInputs(line) {
  // Parse JSON string into an object
  let obj = JSON.parse(line);

  // Sort the object array using the AscendingSort comparison function
  var sortedObj = obj.sort(AscendingSort);

  // Output each library item in the sorted array
  for (var i = 0; i < sortedObj.length; i++) {
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
  readline.close();
}
