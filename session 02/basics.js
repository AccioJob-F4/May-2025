/**
 * JAVASCRIPT ARRAYS - SESSION 02
 * This file covers JavaScript array concepts and methods including:
 * - Array creation and access
 * - Array modification methods (push, pop, shift, unshift, splice, slice)
 * - Array iteration and transformation methods (reduce, filter, find, findIndex, some, every)
 * - Hoisting behavior in JavaScript
 * - Loop types for arrays (for...of, for...in)
 */

// =====================================================================
// ARRAYS IN JAVASCRIPT
// =====================================================================
// Arrays are ordered collections of values that can be of any type
// const fruits = ["apple", "banana", "cherry", "pineapple", "mango", "blueberry"];
// const fruits2 = { 0: "apple", 1: "banana", 2: "cherry" };   // Object with numeric keys (not a true array)

// console.log(typeof fruits);        // "object" - in JS, arrays are objects with special behaviors
// console.log(typeof fruits2);       // "object"

// =====================================================================
// ACCESSING ARRAY ELEMENTS
// =====================================================================
// console.log(fruits[0]);            // "apple" - using bracket notation with index
// console.log(fruits2[0]);           // "apple" - same notation works with objects having numeric keys

// =====================================================================
// ADDING & REMOVING ELEMENTS
// =====================================================================
// push --> adds an element to the end of the array
// const pushedFruit = fruits.push("orange");
// console.log(pushedFruit);          // 4 - returns the new length of the array
// console.log(fruits);               // ["apple", "banana", "cherry", "orange"]

// // pop --> removes an element from the end of the array
// const poppedFruit = fruits.pop();
// console.log(poppedFruit);          // "orange" - returns the removed element
// console.log(fruits);               // ["apple", "banana", "cherry"]

// unshift --> adds an element to the beginning of the array
// const unshiftedFruit = fruits.unshift("pineapple");
// console.log(unshiftedFruit);       // 4 - returns the new length of the array
// console.log(fruits);               // ["pineapple", "apple", "banana", "cherry"]

// shift --> removes an element from the beginning of the array
// const shiftedFruit = fruits.shift();
// console.log(shiftedFruit);         // "pineapple" - returns the removed element
// console.log(fruits);               // ["apple", "banana", "cherry"]

// =====================================================================
// SPLICE METHOD
// =====================================================================
// splice --> adds or removes elements from the array at a specified position
// Syntax : array.splice(start, deleteCount, item1, item2, ...)
// const splicedFruit = fruits.splice(1, 0, "orange");

// // ["apple", "banana", "cherry"] --> ["apple", ,"banana", "cherry"] --> ["apple", "orange", "banana", "cherry"]
// console.log(splicedFruit);         // [] - returns array of deleted elements (empty if none deleted)
// console.log(fruits);               // ["apple", "orange", "banana", "cherry"]

// Spreading arrays with splice
// const arr = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];

// arr.splice(1, 0, ...arr2);         // Using spread operator to insert all elements of arr2
// console.log("🚀 ~ arr:", arr);     // [1, 6, 7, 8, 9, 10, 2, 3, 4, 5]

// console.log([...arr, ...arr2]);    // Combining arrays with spread operator

// =====================================================================
// SLICE METHOD
// =====================================================================
// slice --> returns a shallow copy of a portion of an array into a new array object
// Syntax : array.slice(start, end) --> start is inclusive and end is exclusive, end > start, end is optional
// console.log(fruits);
// const slicedFruit = fruits.slice(1, 4);
// console.log(slicedFruit);          // ["orange", "banana"] - new array with extracted elements
// console.log(fruits);               // ["apple", "banana", "cherry"] - original array is unchanged

// Omitting the end parameter to slice until the end
// const slicedFruit2 = fruits.slice(2);
// console.log(slicedFruit2);         // ["cherry", "pineapple", "mango", "blueberry"]

// Using negative indices to count from the end
// const lTwo = fruits.slice(-2);
// console.log(lTwo);                 // ["mango", "blueberry"] - last two elements

// [ 'apple', 'banana', 'cherry', 'pineapple', 'mango', 'blueberry' ]
// const random = fruits.slice(-2, -2); // []
// console.log("🚀 ~ random:", random); // Empty array - start and end cancel each other out

// =====================================================================
// HOISTING IN JAVASCRIPT
// =====================================================================
// Hoisting --> var

// console.log(a);                    // undefined - variable declaration is hoisted but not initialization
// var a = 10;

// The above code is interpreted by JavaScript as:
// var a;
// console.log(a);                    // undefined
// a = 10;

// Function Declaration --> fully hoisted
// greet();                           // Works because function declarations are fully hoisted

// function greet() {
//   console.log("Hello, world!");
// }

// Variable Declarations --> only declaration are hoisted, not initialization
// console.log(a);                    // undefined
// var a = 10;

// Class Declarations --> it works the similar way as let and const, they cant be accessed before declarations
// const obj = new Person();          // Error: Cannot access 'Person' before initialization

// class Person {
//   constructor() {
//     this.name = "Dunes";
//   }
// }

// Different order examples
// a = 10;                            // Initialization
// console.log(a);                    // Accessing
// var a;                             // Declaration

// // ------
// var a;                             // Declaration
// a = 10;                            // Initialization
// console.log(a);                    // Accessing

// // ------

// a = 10;                            // Initialization
// console.log(a);                    // Accessing
// let a;                             // Declaration - Error: Cannot access 'a' before initialization

// =====================================================================
// REDUCE METHOD
// =====================================================================
// reduce --> executes a reducer function on each element of the array, resulting in a single output value
// Syntax : array.reduce(callback(accumulator, currentValue, currentIndex (optional), array (optional)), initialValue (optional))

// const numbers = [6, 7, 8, 9, 10];

// const sum = numbers.reduce((accumulator, currentValue) => {
//   console.log({ accumulator, currentValue });
//   return accumulator + currentValue;
// });
// console.log(sum);                  // 40 - sum of all numbers in the array

// Accumulator path for sum calculation:
// acc --> 6, 13, 21, 30, 40
// curr --> 7, 8, 9, 10

// Example: counting occurrences of items in an array
// const votes = [
//   "yes",
//   "yes",
//   "no",
//   "yes",
//   "no",
//   "yes",
//   "no",
//   "yes",
//   "no",
//   "yes",
// ];

// const voteCount = votes.reduce((accumulator, currentValue) => {
//   if (accumulator[currentValue]) accumulator[currentValue] += 1;
//   else accumulator[currentValue] = 1;
//   return accumulator;
// }, {});                            // Starting with empty object as accumulator

// console.log(voteCount);            // { yes: 6, no: 4 }

// =====================================================================
// FILTER METHOD
// =====================================================================
// filter --> creates a new array with all elements that pass the test implemented by the provided function
// Syntax : array.filter(callback(element, index, array), thisArg)

// const words = ["apple", "banana", "cherry", "pineapple", "mango", "blueberry"];

// const longWords = words.filter((element) => {
//   if (element.length > 5) return element;
// });
// console.log("🚀 ~ longWords ~ longWords:", longWords); // ["banana", "cherry", "pineapple", "blueberry"]

// Equivalent implementation using traditional loop
// const long = (element) => {
//   if (element.length > 5) return element;
// };

// let output = [];
// for (let word of words) {
//   if (long(word)) output.push(long(word));
// }
// console.log("🚀 ~ output ~ output:", output);

// =====================================================================
// FIND AND FINDINDEX METHODS
// =====================================================================
// find() & findIndex()

// const numbers = [1, 4, 2, 7, 3, 9, 5, 6, 8];

// const firstGreaterThan5 = numbers.findIndex((element) => {
//   if (element > 5) return element;
// });

// console.log("🚀 ~ firstGreaterThan5 ~ firstGreaterThan5:", firstGreaterThan5); // 3 - index of first element > 5

// =====================================================================
// ARRAY ITERATION: FOR...OF VS FOR...IN
// =====================================================================
// const fruitsArr = [
//   "apple",
//   "banana",
//   "cherry",
//   "pineapple",
//   "mango",
//   "blueberry",
// ];

// for (let fruit of fruitsArr) {
//   console.log(fruit);              // Directly outputs each value: "apple", "banana", etc.
// }

// for (let i in fruitsArr) {
//   console.log(fruitsArr[i]);       // Outputs values accessed via their indices
// }

// for ...of --> iterates over the values
// for ...in --> iterates over the keys (indices for arrays, property names for objects)

// =====================================================================
// SOME AND EVERY METHODS
// =====================================================================
// some() & every()
// const ages = [18, 22, 16, 30];

// some() --> returns true if at least one element in the array passes the test implemented by the provided function
// every() --> returns true if all elements in the array pass the test implemented by the provided function

// const isAdultPresent = ages.some((age) => {
//   return age >= 18;
// });                                // true - at least one age is >= 18

// const isAllAdults = ages.every((age) => {
//   return age >= 18;
// });                                // false - not all ages are >= 18 (16 is < 18)

// console.log("🚀 ~ isAdultPresent ~ isAdultPresent:", isAdultPresent);
// console.log("🚀 ~ isAllAdults ~ isAllAdults:", isAllAdults);
