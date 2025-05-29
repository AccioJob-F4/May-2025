// Asynchronous Code

// Synchronous Code
// console.log(1);
// console.log(2);
// console.log(3);

// setTimeout(() => {
//   console.log(4);
// }, 1000);

// setTimeout(() => {
//   console.log(3);
// }, 500);

// setTimeout(() => {
//   console.log(2);
// }, 0);

// console.log(5);

// EVENT LOOP

// 1. Call Stack
// 2. Task Queue (MacroTask Queue or Callback Queue) --> takes care of setTimeout, setInterval, etc.
// 3. MicroTask Queue --> takes care of Promise

// let i = 1;
// const intervalId = setInterval(() => {
//   console.log(i);
//   i++;

//   if (i > 10) {
//     clearInterval(intervalId);
//   }
// }, 1000);

// setTimeout(() => {
//   console.log(1);
//   setTimeout(() => {
//     console.log(2);
//   }, 1000);
//   console.log(3);
// }, 500);

// Sudeep (Pending, Resolved, Rejected)

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 0);

// Promise.resolve().then(() => {
//   console.log(3);
// });

// console.log(4);
