// JSON --> JavaScript Object Notation

// SYNTAX RULES OF JSON
// --------------------------
// Data is represented in key-value pairs
// Keys must be strings enclosed in double quotes
// Values can be strings, numbers, arrays, objects, booleans, null
// JSON objects are enclosed in curly braces {}
// JSON arrays are enclosed in square brackets []
// Multiple key-value pairs are separated by commas
// The last key-value pair must not end with a comma

// COMPARISON WITH XML
// --------------------------
// XML is a markup language that is used to structure data

// Format
// JSON is lighter and simple
// XML is Heavier and more verbose

// Syntax
// JSON is key value pairs
// XML are tags with opening and closing

// Data Types
// JSON supports string, number, object, array, boolean, null
// XML supports Text, Attributes, Tags

// Readability
// JSON is more readable
// XML is less readable

// Parsing
// Native JS methods (JSON.parse(), JSON.stringify())
// XML requires XML parsers

// JSON Example
// --------------------------
// {
//     "name": "Divyansh Singh",
//     "age": 20,
//     "isAdmin": false
// }

// XML Example
// --------------------------
// <user>
//     <name>Divyansh Singh</name>
//     <age>20</age>
//     <isAdmin>false</isAdmin>
// </user>

// Complex JSON Example
// --------------------------
// {
//    "name": "Divyansh Singh",
//   "age": 20,
//   "isAdmin": false,
//   "hobbies": ["reading", "coding", "music"],
//   "address": {
//     "street": "123 Main St",
//     "city": "Anytown",
//     "zip": "12345"
//   }
// }

// Complex XML Example
// --------------------------
/* <user>
  <name>Divyansh Singh</name>
  <age>20</age>
  <isAdmin>false</isAdmin>
  <hobbies>
    <hobby>reading</hobby>
    <hobby>coding</hobby>
    <hobby>music</hobby>
  </hobbies>
  <address>
    <street>123 Main St</street>
    <city>Anytown</city>
    <zip>12345</zip>
  </address>
</user> */

// Real world use cases of JSON
// -----------------------------
// Config files
// {
//     "database": {
//         "host": "localhost",
//         "port": 3306,
//         "username": "root",
//         "password": "password",
//         "database": "mydatabase"
//     },
//     "server": {
//         "port": 3000,
//     }
// }

// API Responses
// {
//     "status": "success",
//     "data": {
//         "name": "Divyansh Singh",
//         "age": 20,
//         "isAdmin": false
//     }
// }

// Data Storage in NoSQL databases
// {
//     "name": "Divyansh Singh",
//     "age": 20,
//     "isAdmin": false
// }

// Client-Server Communication
// {
//     "event": "newMessage",
//     "data": {
//         "sender": "Divyansh Singh",
//         "message": "Hello, how are you?",
//         "timestamp": "2021-01-01 12:00:00"
//     }
// }

// JSON METHODS
// -----------------------------

// JSON.stringify(value, replacer, space) --> converts a JavaScript object or value to a JSON string
// ----------------------------------------------------------------------------------------------------

// value --> The object or array to convert to JSON
// replacer --> A function Or array that determines which properties of the object are included in the JSON string (OPTIONAL)
// space --> The number of spaces to use for indentation (OPTIONAL)

// const user = {
//   name: "Alice",
//   age: 25,
//   hobbies: ["reading", "coding"],
//   isActive: true,
// };

// const jsonString = JSON.stringify(user);
// const jsonStringWithReplacer = JSON.stringify(user, ["name", "hobbies"]);
// const jsonStringWithSpace = JSON.stringify(user, null, 4);
// console.log(jsonString);
// console.log(jsonStringWithReplacer);
// console.log(jsonStringWithSpace);

// JSON.parse(text, reviver) --> parses a JSON string and converts it into a JavaScript object
// ----------------------------------------------------------------------------------------------------

// text --> The JSON string to parse
// reviver --> A function to manipulate the resulting object (OPTIONAL)

// const user = {
//   name: "Alice",
//   age: 25,
//   hobbies: ["reading", "coding"],
//   isActive: true,
// };

// const jsonString = JSON.stringify(user);

// const revertedUser = JSON.parse(jsonString);
// const revertedUserWithReviver = JSON.parse(jsonString, (key, value) => {
//   if (key === "age") {
//     return value > 18 ? "Adult" : "Minor";
//   }
//   return value;
// });
// console.log(revertedUser);
// console.log(revertedUserWithReviver);

// HANDLING CIRCULAR REFERENCES
// -----------------------------

// const employee = { name: "Divyansh Singh" };

// employee.circle = employee;

// console.log(employee); // { name: 'Divyansh Singh', circle: [Circular *1] }

// const jsonString = JSON.stringify(employee);

// console.log(jsonString); // TypeError: Converting circular structure to JSON

// SOLUTION
// ---------

// /**
//  * Creates a JSON replacer function that detects circular references in objects
//  * This function is designed to be used with JSON.stringify() as the replacer parameter
//  *
//  * @param {string} key - The current key being processed (not used in outer function)
//  * @param {any} value - The current value being processed (not used in outer function)
//  * @returns {Function} A replacer function that handles circular references
//  */
// const circularReference = (key, value) => {
//   // Create a Set to track objects that have already been processed
//   const seen = new Set();

//   // Return a function that will be called for each key-value pair during JSON serialization
//   return function (key, value) {
//     if (typeof value === "object" && value !== null) {
//       // Check if this is an object (and not null)
//       if (seen.has(value)) {
//         // If we've seen this object before, it's a circular reference
//         return "[Circular Reference Found]";
//       }
//       // Track this object to detect future circular references
//       seen.add(value);
//     }
//     // Return the original value if it's not a circular reference
//     return value;
//   };
// };

// const employee = { name: "Divyansh Singh" };

// employee.circle = employee;

// console.log(employee); // { name: 'Divyansh Singh', circle: [Circular *1] }

// const jsonString = JSON.stringify(employee, circularReference());

// console.log(jsonString); // { name: 'Divyansh Singh', circle: '[Circular Reference Found]' }

// Polyfills
// -----------

// JSON.stringify Polyfill
// ------------------------
// if (!window.JSON.stringify) {
//   window.JSON.stringify = function (obj) {
//     const seen = new Set();

//     function stringifyValue(value) {
//       if (value === null) {
//         return "null";
//       }
//       if (typeof value === "string") {
//         return `"${value}"`;
//       }
//       if (typeof value === "number" || typeof value === "boolean") {
//         return String(value);
//       }

//       if (Array.isArray(value)) {
//         const elements = value.map(stringifyValue).join(",");
//         return `[${elements}]`;
//       }

//       if (typeof value === "object") {
//         if (seen.has(value)) return '"[Circular]"';

//         seen.add(value);

//         const entries = Object.entries(value).map(([key, value]) => {
//           return `"${key}":${stringifyValue(value)}`;
//         });

//         return `{${entries.join(",")}}`;
//       }

//       return undefined;
//     }

//     return stringifyValue(obj);
//   };
// }

// const JsonStringifyPolyfill = (obj) => {
//   const seen = new Set();

//   function stringifyValue(value) {
//     if (value === null) {
//       return "null";
//     }
//     if (typeof value === "string") {
//       return `"${value}"`;
//     }
//     if (typeof value === "number" || typeof value === "boolean") {
//       return String(value);
//     }

//     if (Array.isArray(value)) {
//       const elements = value.map(stringifyValue).join(",");
//       return `[${elements}]`;
//     }

//     if (typeof value === "object") {
//       if (seen.has(value)) return '"[Circular]"';

//       seen.add(value);

//       const entries = Object.entries(value).map(([key, value]) => {
//         return `"${key}":${stringifyValue(value)}`;
//       });

//       return `{${entries.join(",")}}`;
//     }

//     return undefined;
//   }

//   return stringifyValue(obj);
// };

// const person = {
//   name: "Alice",
//   age: 30,
//   hobbies: ["reading", "coding"],
//   address: {
//     city: "Paris",
//     postalCode: 75001,
//   },
// };

// person.circle = person;

// console.log(person);

// const jsonString = JSON.stringify(person);

// console.log(jsonString);

// const customJsonString = JsonStringifyPolyfill(person);

// console.log(customJsonString);

// JSON.parse() Polyfill
// ----------------------
// TAKE HOME ASSIGNMENT

// PROBLEM STATEMENT
// -------------------
// We have a nested JSON object with mixed data types. Our objective is to extract all keys where the values are of type number.

// const nestedData = {
//   user: {
//     id: 101,
//     name: "Alice",
//     age: 30,
//     address: {
//       city: "New York",
//       zip: 10001,
//       coordinates: {
//         lat: 40.7128,
//         lng: -74.006,
//       },
//     },
//     hobbies: ["reading", "coding"],
//     stats: {
//       followers: 450,
//       following: 290,
//       posts: 12,
//     },
//   },
// };

// // Output: ["id", "age", "zip", "lat", "lng", "followers", "following", "posts"]

// /**
//  * Extracts all keys from an object (including nested objects) that have number values
//  *
//  * @param {Object} obj - The object to extract keys from
//  * @returns {Array} An array of keys that have number values
//  */
// const extractKeysWithNumberValues = (obj) => {
//   // Array to store all keys with number values
//   let result = [];

//   // Inner recursive function to process each level of the object
//   function recurse(currentObj) {
//     // Iterate through all key-value pairs in the current object
//     for (const [key, value] of Object.entries(currentObj)) {
//       if (typeof value === "number") {
//         // If the value is a number, add its key to the result array
//         result.push(key);
//       } else if (
//         typeof value === "object" &&
//         value !== null &&
//         !Array.isArray(value)
//       ) {
//         // If the value is a non-null, non-array object, process it recursively
//         // This handles nested objects
//         recurse(value);
//       }
//       // Other value types (strings, booleans, arrays, null, etc.) are ignored
//     }
//   }

//   // Start the recursive processing with the input object
//   recurse(obj);

//   // Return all collected keys that have number values
//   return result;
// };

// console.log(extractKeysWithNumberValues(nestedData));

// API
