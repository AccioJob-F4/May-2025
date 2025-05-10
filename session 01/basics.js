// Variables
// let name = "John";
// let age = 20;
// let isStudent = true;

// console.log(name, age, isStudent);

// Variable Declaration
// const, let, var

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

// Data Types
// Primitive Types: Number, String, Boolean, Null, Undefined, Symbol, BigInt
// Reference Types: Object, Array, Function

// let a = 10;
// let b = "Hello";
// let c = true;
// let array = [1, 2, 3];
// let arr2 = [1, "hello", true];
// let obj = { name: "John", age: 20 };
// let func = function () {
//   console.log("Hello");
// };

// console.log(typeof a, typeof b, typeof c);

// Functions
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

// let st = "Hello";
// console.log(st[1]);
// st[1] = "M";
// st = "Hello World";
// console.log(st);

// let a1 = [1, 2, 3];
// console.log(a1[1]);
// a1[1] = "M";
// console.log(a1);

// Scoping
// Global Scope
// let a = 10;
// console.log(a);

// const addVar = (b) => {
//   return a + b;
// };

// console.log(addVar(20));

// Block Scope
// const addVar = (b) => {
//   if (b > 10) {
//     let a = 20;
//     console.log(a);
//   }
//   console.log(a);
//   return a + b;
// };

// console.log(addVar(200));

// Function Scope
// function add(a, b) {
//   let c = 10;
//   if (a > 10) {
//     let c = 20;
//     c = 30;
//     console.log(c); // 30
//   }
//   console.log(c); // 10
//   return a + b + c;
// }
// // console.log(c);
// console.log(add(100, 2));

// Control Structures (conditionals, loops)
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

// == v/s ===

// console.log(1 == "1"); // checks for value only

// console.log(1 === "1"); // checks for value and type
// console.log(1 == "1" && typeof 1 === typeof "1"); // true

const arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) console.log(arr[i]);
// }

// let i = 0;
// while (i < arr.length) {
//   if (arr[i] % 2 === 0) console.log(arr[i]);
//   i++;
// }

// do while
// let i = 0;
// do {
//   if (arr[i] % 2 === 0) console.log(arr[i]);
//   i++;
// } while (i < arr.length);

// for of
// for (let i of arr) {
//   if (i % 2 === 0) console.log(i);
// }

// // for each
// const forEachArr = arr.forEach((i, idx) => {
//   if (i % 2 === 0) console.log(i);
//   return i;
// });
// console.log({ forEachArr });

// // map
// const mapArr = arr.map((i, idx) => {
//   if (i % 2 === 0) console.log(i);
//   return i * 3; // [3, 6, 9, 12, 15]
// });
// console.log({ mapArr: mapArr });

// reduce, filter, find, findIndex, some, every

// Closures --> function inside a function that remembers the variables of the parent function even after the parent function has returned or completed its execution

// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// const add5 = add(5);

// // const add5 = function (b) {
// //     return a + b;
// //   };
// console.log(add5(10));

// // function add(a, b) {

// Hoisting --> is a JS behavior of moving declarations to the top of their scope before execution
// {
//   console.log(a);
//   var a; // declaration is moved to the top of the scope, initialized with undefined
// }

// // JS would treat above code as below due to hoisting
// {
//   var a = undefined;
//   console.log(a);
// }

// console.log(b);
// let b;

// console.log(c);
// const c;
