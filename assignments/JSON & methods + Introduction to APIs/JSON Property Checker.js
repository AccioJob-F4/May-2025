/**
 * JSON PROPERTY CHECKER
 *
 * This script checks if a JSON object contains a specified property key.
 * It reads input from the command line to create an object and then checks
 * if a specific key exists within it.
 *
 * Concepts demonstrated:
 * - Object property checking with hasOwnProperty()
 * - Node.js readline for handling user input
 * - Event-based programming (on 'line', on 'close')
 * - Object manipulation
 * - String parsing with split()
 */

// Import the readline module to handle command-line input/output
const readline = require("readline");

/**
 * Checks if an object contains a specified property
 *
 * @param {Object} obj - The object to check
 * @param {string} key - The property key to look for
 * @returns {boolean} - True if the property exists, false otherwise
 *
 * The hasOwnProperty() method checks if the property exists directly on the object
 * (not inherited from prototype chain). This is important for safely
 * checking if an object has a specific property without accessing potentially
 * undefined properties or triggering getters on the prototype chain.
 */
function containsProp(obj, key) {
  // Check if the key exists in the object
  return obj.hasOwnProperty(key);
}

// Don't change the code below

// Create readline interface to handle user input/output
const rl = readline.createInterface({
  input: process.stdin, // Read from standard input (keyboard)
  output: process.stdout, // Write to standard output (console)
});

// Initialize variables:
let n = 0; // Will store the number of key-value pairs
let obj = {}; // The object that will hold the key-value pairs
let stringX = ""; // The key to check for

let count = 0; // Counter to track the number of input lines processed

/**
 * Event handler for each line of input
 * Processing flow:
 * 1. First line: Number of key-value pairs (n)
 * 2. Next n lines: Key-value pairs to add to the object
 * 3. Final line: The key to check for in the object
 */
rl.on("line", (line) => {
  count++;

  if (count === 1) {
    // First line indicates how many key-value pairs will follow
    n = parseInt(line);
  } else if (count > 1 && count <= n + 1) {
    // Process key-value pairs
    let [key, val] = line.split(" "); // Split the input line into key and value
    obj[key] = val; // Add the key-value pair to the object
  } else if (count === n + 2) {
    // Last line is the key to check for
    stringX = line;
    rl.close(); // Close the readline interface after all input is read
  }
});

/**
 * Event handler for when the readline interface is closed
 * Performs the property check and outputs the result
 */
rl.on("close", () => {
  // Check if the specified key exists in the object and output the result
  if (containsProp(obj, stringX)) {
    console.log("true"); // Property exists
  } else {
    console.log("false"); // Property doesn't exist
  }
});
