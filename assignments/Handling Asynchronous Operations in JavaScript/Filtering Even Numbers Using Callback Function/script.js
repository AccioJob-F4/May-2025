/**
 * Filters an array to return only numbers that are not even according to the provided callback
 *
 * @param {Array} arr - The array of numbers to filter
 * @param {Function} isEven - Callback function that determines if a number is even
 * @returns {Array} - New array containing only the numbers that are not even
 */
function filterEvenNumbers(arr, isEven) {
  // Use JavaScript's built-in filter method to create a new array
  // containing only elements for which the callback returns true
  // Here we're keeping elements where isEven returns false (not even)
  return arr.filter((num) => !isEven(num));
}

/**
 * Callback function that determines if a number is even
 *
 * @param {number} num - The number to check
 * @returns {boolean} - True if the number is even, false otherwise
 */
const isEven = (num) => num % 2 === 0;

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
  // Parse the first line of input as a JSON array and convert each element to an integer
  const arr = JSON.parse(input[0]).map((e) => parseInt(e, 10));
  // Call filterEvenNumbers with the parsed array and the isEven callback
  console.log(filterEvenNumbers(arr, isEven));
}
