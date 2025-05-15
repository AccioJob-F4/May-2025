const readline = require("readline");

/**
 * Checks if an object contains a specified property
 * @param {Object} obj - The object to check
 * @param {string} key - The property key to look for
 * @returns {boolean} - True if the property exists, false otherwise
 *
 * hasOwnProperty() checks if the property exists directly on the object
 * (not inherited from prototype chain). This is important for safely
 * checking if an object has a specific property.
 */
function containsProp(obj, key) {
  // Check if the key exists in the object
  return obj.hasOwnProperty(key);
}

// Don't change the code below

// Create readline interface to handle user input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Initialize variables:
let n = 0; // Will store the number of key-value pairs
let obj = {}; // The object that will hold the key-value pairs
let stringX = ""; // The key to check for

let count = 0;

rl.on("line", (line) => {
  count++;

  if (count === 1) {
    n = parseInt(line);
  } else if (count > 1 && count <= n + 1) {
    let [key, val] = line.split(" ");
    obj[key] = val;
  } else if (count === n + 2) {
    stringX = line;
    rl.close();
  }
});

rl.on("close", () => {
  if (containsProp(obj, stringX)) {
    console.log("true");
  } else {
    console.log("false");
  }
});
