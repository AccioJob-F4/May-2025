// Arrays in JS
// const fruits = ["apple", "banana", "cherry", "pineapple", "mango", "blueberry"];
// const fruits2 = { 0: "apple", 1: "banana", 2: "cherry" };

// console.log(typeof fruits);
// console.log(typeof fruits2);

// Accessing elements
// console.log(fruits[0]); // "apple"
// console.log(fruits2[0]); // "apple"

// Adding & Removing Elements
// push --> adds an element to the end of the array
// const pushedFruit = fruits.push("orange");
// console.log(pushedFruit); // 4
// console.log(fruits); // ["apple", "banana", "cherry", "orange"]

// // pop --> removes an element from the end of the array
// const poppedFruit = fruits.pop();
// console.log(poppedFruit); // "orange"
// console.log(fruits); // ["apple", "banana", "cherry"]

// unshift --> adds an element to the beginning of the array
// const unshiftedFruit = fruits.unshift("pineapple");
// console.log(unshiftedFruit); // 4
// console.log(fruits); // ["pineapple", "apple", "banana", "cherry"]

// shift --> removes an element from the beginning of the array
// const shiftedFruit = fruits.shift();
// console.log(shiftedFruit); // "pineapple"
// console.log(fruits); // ["apple", "banana", "cherry"]

// splice --> adds or removes elements from the array
// Syntax : array.splice(start, deleteCount, item1, item2, ...)
// const splicedFruit = fruits.splice(1, 0, "orange");

// // ["apple", "banana", "cherry"] --> ["apple", ,"banana", "cherry"] --> ["apple", "orange", "banana", "cherry"]
// console.log(splicedFruit);
// console.log(fruits); // ["apple", "orange", "banana", "cherry"]

// Can we can add another array using splice method
// const arr = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];

// arr.splice(1, 0, ...arr2);
// console.log("🚀 ~ arr:", arr);

// console.log([...arr, ...arr2]);

// slice --> returns a shallow copy of a portion of an array into a new array object
// Syntax : array.slice(start, end) --> start is inclusive and end is exclusive, end > start, end is optional
// console.log(fruits);
// const slicedFruit = fruits.slice(1, 4);
// console.log(slicedFruit); // ["orange", "banana"]
// console.log(fruits); // ["apple", "banana", "cherry"]

// const slicedFruit2 = fruits.slice(2);
// console.log(slicedFruit2); // ["cherry", "pineapple", "mango", "blueberry"]

// const lTwo = fruits.slice(-2);
// console.log(lTwo); // ["mango", "blueberry"]

// [ 'apple', 'banana', 'cherry', 'pineapple', 'mango', 'blueberry' ]
// const random = fruits.slice(-2, -2); // []
// console.log("🚀 ~ random:", random);

// Hoisting --> var

// console.log(a);
// var a = 10;

// var a;
// console.log(a);
// a = 10;

// Function Declaration --> fully hoisted
// greet();

// function greet() {
//   console.log("Hello, world!");
// }

// // Variable Declarations --> only declaration are hoisted, not initialization
// console.log(a);
// var a = 10;

// // Class Declarations --> it works the similar way as let and const, they cant be accessed before declarations
// const obj = new Person();

// class Person {
//   constructor() {
//     this.name = "Dunes";
//   }
// }

// a = 10; // Initialization
// console.log(a); // Accessing
// var a; // Declaration

// // ------
// var a; // Declaration
// a = 10; // Initialization
// console.log(a); // Accessing

// // ------

// a = 10; // Initialization
// console.log(a); // Accessing
// let a; // Declaration

// reduce --> executes a reducer function on each element of the array, resulting in a single output value
// Syntax : array.reduce(callback(accumulator, currentValue, currentIndex (optional), array (optional)), initialValue (optional))

// const numbers = [6, 7, 8, 9, 10];

// const sum = numbers.reduce((accumulator, currentValue) => {
//   console.log({ accumulator, currentValue });
//   return accumulator + currentValue;
// });
// console.log(sum); // 15

// acc --> 0, 1, 3, 6, 10, 15
// curr --> 1, 2, 3, 4, 5

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
// }, {});

// console.log(voteCount);

// filter --> creates a new array with all elements that pass the test implemented by the provided function
// Syntax : array.filter(callback(element, index, array), thisArg)

// const words = ["apple", "banana", "cherry", "pineapple", "mango", "blueberry"];

// const longWords = words.filter((element) => {
//   if (element.length > 5) return element;
// });
// console.log("🚀 ~ longWords ~ longWords:", longWords);

// const long = (element) => {
//   if (element.length > 5) return element;
// };

// let output = [];
// for (let word of words) {
//   if (long(word)) output.push(long(word));
// }
// console.log("🚀 ~ output ~ output:", output);

// find() & findIndex()

// const numbers = [1, 4, 2, 7, 3, 9, 5, 6, 8];

// const firstGreaterThan5 = numbers.findIndex((element) => {
//   if (element > 5) return element;
// });

// console.log("🚀 ~ firstGreaterThan5 ~ firstGreaterThan5:", firstGreaterThan5);

// for ...of vs for ...in

// const fruitsArr = [
//   "apple",
//   "banana",
//   "cherry",
//   "pineapple",
//   "mango",
//   "blueberry",
// ];

// for (let fruit of fruitsArr) {
//   console.log(fruit);
// }

// for (let i in fruitsArr) {
//   console.log(fruitsArr[i]);
// }

// for ...of --> iterates over the values
// for ...in --> iterates over the keys

// some() & every()
// const ages = [18, 22, 16, 30];

// some() --> returns true if at least one element in the array passes the test implemented by the provided function
// every() --> returns true if all elements in the array pass the test implemented by the provided function

// const isAdultPresent = ages.some((age) => {
//   return age >= 18;
// });

// const isAllAdults = ages.every((age) => {
//   return age >= 18;
// });

// console.log("🚀 ~ isAdultPresent ~ isAdultPresent:", isAdultPresent);
// console.log("🚀 ~ isAllAdults ~ isAllAdults:", isAllAdults);
