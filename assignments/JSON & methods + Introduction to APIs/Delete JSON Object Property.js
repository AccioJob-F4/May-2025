const readline = require("readline");

/**
 * Deletes a specified property from an object
 * @param {Object} obj - The object to modify
 * @param {string} x - The property key to delete
 *
 * The delete operator removes a property from an object.
 * This is useful for cleaning up objects or removing unwanted properties.
 */
function deleteProperty(obj, x) {
  delete obj[x];
}

// Create readline interface to handle user input/output
// This allows the program to read from stdin and write to stdout
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Initialize variables:
let n = 0; // Will store the number of key-value pairs
let obj = {}; // The object that will hold the key-value pairs
let keyToDelete = ""; // The key that will be deleted
let count = 0; // Counter to track the line of input being processed

/**
 * Event handler for each line of input
 * This processes input in the following sequence:
 * 1. First line: number of key-value pairs
 * 2. Next n lines: key-value pairs to add to the object
 * 3. Final line: key to delete from the object
 */
rl.on("line", (line) => {
  count++;

  if (count === 1) {
    // First line contains the number of key-value pairs
    n = parseInt(line.trim(), 10);
  } else if (count > 1 && count <= n + 1) {
    // Process each key-value pair and add to the object
    let [key, val] = line.trim().split(" ");
    obj[key] = val;
  } else if (count === n + 2) {
    // Last line contains the key to delete
    keyToDelete = line.trim();
    rl.close(); // Close the readline interface when all input is received
  }
});

/**
 * Event handler for when the readline interface is closed
 * This executes the delete operation and outputs the modified object
 */
rl.on("close", () => {
  // Delete the specified property from the object
  deleteProperty(obj, keyToDelete);

  // Output all remaining key-value pairs in the object
  for (let key in obj) {
    // Check if property is directly on the object, not from prototype chain
    if (obj.hasOwnProperty(key)) {
      console.log(`${key} ${obj[key]}`);
    }
  }
});
