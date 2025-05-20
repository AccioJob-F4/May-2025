/**
 * JAVASCRIPT BASICS - SESSION 01
 * This file covers fundamental JavaScript concepts including:
 * - Variables and their declaration types
 * - Data types
 * - Functions and their different syntaxes
 * - Scoping
 * - Control structures
 * - Array methods
 * - Closures
 * - Hoisting
 */

// =====================================================================
// VARIABLES SECTION
// =====================================================================
// Variables are containers for storing data values
// let name = "John";
// let age = 20;
// let isStudent = true;

// console.log(name, age, isStudent);

// =====================================================================
// VARIABLE DECLARATION TYPES
// =====================================================================
// var --> function scope, re-declared or updates, issues due to hoisting, rarely used in modern code

// let --> block scope, cannot be re-declared, can be updated used in modern code

// const --> block scope, cannot be re-declared, cannot be updated used in modern code

// var a = 10;
// let b = 20;
// const c = 30;

// console.log(a, b, c);

// a = 50;
// b = 60;
// c = 70; // <-- trying to update const variable will throw an error

// console.log(a, b, c);

// console.log(x);
// var x; // <-- var variables are hoisted to the top of their scope and initialized with undefined
// let y; // <-- let and const variables are not hoisted, trying to access them before declaration will throw a ReferenceError
// const z; // <-- trying to declare a const variable without initializing it will throw an error

// =====================================================================
// DATA TYPES
// =====================================================================
// JavaScript has two main categories of data types:
// Primitive Types: Number, String, Boolean, Null, Undefined, Symbol, BigInt
// Reference Types: Object, Array, Function

// let a = 10;                        // Number
// let b = "Hello";                   // String
// let c = true;                      // Boolean
// let array = [1, 2, 3];             // Array (reference type)
// let arr2 = [1, "hello", true];     // Array with mixed types (JavaScript arrays can hold multiple data types)
// let obj = { name: "John", age: 20 }; // Object
// let func = function () {           // Function
//   console.log("Hello");
// };

// console.log(typeof a, typeof b, typeof c);

// =====================================================================
// FUNCTIONS
// =====================================================================
// Functions are reusable blocks of code that perform a specific task

// Function Declaration
// function add1(a, b) {
//   return a + b;
// }

// // Function Expression
// const add2 = function (a, b) {
//   return a + b;
// };

// // Arrow Function
// const add3 = (a, b) => {
//   return a + b;
// };

// console.log(add1(1, 2));
// console.log(add2(1, 2));
// console.log(add3(1, 2));

// =====================================================================
// PRIMITIVES VS REFERENCE TYPES
// =====================================================================
// Primitive types are immutable, while reference types are mutable

// let st = "Hello";
// console.log(st[1]);
// st[1] = "M";                       // This doesn't change the string because strings are immutable
// st = "Hello World";                // This creates a new string and assigns it to st
// console.log(st);

// let a1 = [1, 2, 3];
// console.log(a1[1]);
// a1[1] = "M";                       // This changes the array because arrays are mutable
// console.log(a1);

// =====================================================================
// SCOPING
// =====================================================================
// Scope determines the accessibility/visibility of variables

// Global Scope - Variables declared outside any function or block
// let a = 10;
// console.log(a);

// const addVar = (b) => {
//   return a + b;                    // a is accessible here because it's a global variable
// };

// console.log(addVar(20));

// Block Scope - Variables declared inside a block using let/const
// const addVar = (b) => {
//   if (b > 10) {
//     let a = 20;                    // a is only accessible within this if block
//     console.log(a);
//   }
//   console.log(a);                  // This will cause an error because a is not accessible here
//   return a + b;
// };

// console.log(addVar(200));

// Function Scope - Variables declared inside a function
// function add(a, b) {
//   let c = 10;                      // c is accessible anywhere inside this function
//   if (a > 10) {
//     let c = 20;                    // This creates a new variable c that shadows the outer c
//     c = 30;                        // This updates the inner c
//     console.log(c);                // 30
//   }
//   console.log(c);                  // 10 (the outer c is still 10)
//   return a + b + c;
// }
// // console.log(c);                 // This would cause an error because c is not accessible outside the function
// console.log(add(100, 2));

// =====================================================================
// CONTROL STRUCTURES
// =====================================================================
// Control structures dictate the flow of execution in a program

// if, else if, else
// switch, case, default

// for, while, do while
// for in, for of
// for each

// let a = 100;
// if (a >= 100) {
//   console.log("a is greater than 100");
// } else if (a >= 50 && a < 100) {
//   console.log("a is greater than 50 and less than 100");
// } else if (a >= 30 && a < 50) {
//   console.log("a is greater than 30 and less than 50");
// } else {
//   console.log("a is less than 30");
// }

// switch (a) {
//   case 100:
//     console.log("a is 100");
//     break;
//   case 50:
//     console.log("a is 50");
//     break;
//   case 30:
//     console.log("a is 30");
//     break;
//   default:
//     console.log("a is less than 30");
// }

// =====================================================================
// EQUALITY OPERATORS
// =====================================================================
// == v/s ===

// console.log(1 == "1");             // true - checks for value only, performs type coercion

// console.log(1 === "1");            // false - checks for value and type
// console.log(1 == "1" && typeof 1 === typeof "1"); // false - explicitly checking both value and type

// =====================================================================
// ARRAY ITERATION METHODS
// =====================================================================
const arr = [1, 2, 3, 4, 5];

// for loop - traditional method
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) console.log(arr[i]);
// }

// while loop
// let i = 0;
// while (i < arr.length) {
//   if (arr[i] % 2 === 0) console.log(arr[i]);
//   i++;
// }

// do while loop - executes at least once
// let i = 0;
// do {
//   if (arr[i] % 2 === 0) console.log(arr[i]);
//   i++;
// } while (i < arr.length);

// for of loop - iterates over the values of an iterable object
// for (let i of arr) {
//   if (i % 2 === 0) console.log(i);
// }

// forEach method - executes a provided function once for each array element
// const forEachArr = arr.forEach((i, idx) => {
//   if (i % 2 === 0) console.log(i);
//   return i;                        // Note: forEach always returns undefined, regardless of the return value
// });
// console.log({ forEachArr });       // undefined

// map method - creates a new array with the results of calling a function for every array element
// const mapArr = arr.map((i, idx) => {
//   if (i % 2 === 0) console.log(i);
//   return i * 3;                    // [3, 6, 9, 12, 15]
// });
// console.log({ mapArr: mapArr });

// Other array methods: reduce, filter, find, findIndex, some, every

// =====================================================================
// CLOSURES
// =====================================================================
// Closures --> function inside a function that remembers the variables of the parent function even after the parent function has returned or completed its execution

// function add(a) {
//   return function (b) {
//     return a + b;                  // Inner function has access to the 'a' parameter of the outer function
//   };
// }

// const add5 = add(5);               // Returns a function that adds 5 to any number passed to it

// // Equivalent to:
// // const add5 = function (b) {
// //     return a + b;
// //   };
// console.log(add5(10));             // 15

// // function add(a, b) {

// =====================================================================
// HOISTING
// =====================================================================
// Hoisting --> is a JS behavior of moving declarations to the top of their scope before execution
// {
//   console.log(a);                  // undefined
//   var a;                           // declaration is moved to the top of the scope, initialized with undefined
// }

// // JS would treat above code as below due to hoisting
// {
//   var a = undefined;
//   console.log(a);
// }

// console.log(b);                    // ReferenceError: Cannot access 'b' before initialization
// let b;

// console.log(c);                    // ReferenceError: Cannot access 'c' before initialization
// const c;
