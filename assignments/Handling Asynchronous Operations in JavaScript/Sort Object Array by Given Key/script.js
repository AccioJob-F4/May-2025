/**
 * Sorts an array of objects based on a specified key using a comparison function.
 *
 * @param {Array} arr - The array of objects to sort
 * @param {string} keyName - The key name to use for comparison
 * @param {Function} compareFunc - The comparison function to use for sorting
 * @returns {Array} - The sorted array
 */
function sortObjectsByKey(arr, keyName, compareFunc) {
  // Use JavaScript's built-in sort method with a custom comparator
  // The comparator applies the comparison function to the values of the specified key
  return arr.sort((a, b) => compareFunc(a[keyName], b[keyName]));
}

/**
 * Standard comparison function that determines the sorting order
 * Returns -1 if a < b (a comes before b)
 * Returns 1 if a > b (a comes after b)
 * Returns 0 if a equals b (order doesn't change)
 *
 * @param {*} a - First value to compare
 * @param {*} b - Second value to compare
 * @returns {number} - Comparison result (-1, 0, or 1)
 */
const compareFunc = (a, b) => {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
};

// Import readline module to handle input/output operations
const readline = require("readline");

// Array to store input lines
const input = [];

// Create interface for reading from stdin and writing to stdout
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Event handler for each line of input
// Adds each line to the input array
rl.on("line", function (cmd) {
  input.push(cmd);
});

// Event handler for when input stream ends
// Calls the Main function with collected input
rl.on("close", function (cmd) {
  Main(input);
});

/**
 * Main program function that processes the input and outputs the result
 *
 * @param {Array} input - Array of input strings
 */
function Main(input) {
  // Parse the first line of input as a JSON array
  const arr = JSON.parse(input[0]);
  // Call sortObjectsByKey with the array, the key name from the second line, and the comparison function
  console.log(sortObjectsByKey(arr, input[1], compareFunc));
}
