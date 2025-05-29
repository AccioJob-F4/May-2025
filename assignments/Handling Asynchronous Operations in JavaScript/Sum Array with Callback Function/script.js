/**
 * Computes a sum over an array using a callback function to determine how each element contributes
 * This is a higher-order function that demonstrates functional programming principles
 *
 * @param {Array} arr - The array of numbers to process
 * @param {Function} callback - Function that defines how to incorporate each element into the running sum
 * @returns {number} - The final computed sum
 */
function sumWithCallback(arr, callback) {
  // Initialize the running sum to 0
  let runningSum = 0;

  // Iterate over the array and use the callback to compute the sum
  // For each element, the callback determines how to combine it with the running sum
  for (let i = 0; i < arr.length; i++) {
    runningSum = callback(runningSum, arr[i]);
  }

  // Return the final running sum
  return runningSum;
}

/**
 * Callback function that multiplies each number by 2 before adding it to the running sum
 * This demonstrates how callbacks can modify behavior without changing the main algorithm
 *
 * @param {number} runningSum - The current running sum
 * @param {number} num - The current number from the array
 * @returns {number} - The new running sum after processing the current number
 */
function multiplyByTwo(runningSum, num) {
  // Add the current number multiplied by 2 to the running sum
  return runningSum + num * 2;
}

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
  // Call sumWithCallback with the parsed array and the multiplyByTwo callback
  console.log(sumWithCallback(arr, multiplyByTwo));
}
