// let a = 5;
// Creating Promises
// const evenOddPromise = new Promise((resolve, reject) => {
//   if (a % 2 === 0) {
//     resolve("Even Number");
//   } else {
//     reject("Odd Number");
//   }
// });

// const isEven = (num) => {
//   return new Promise((resolve, reject) => {
//     if (num % 2 === 0) {
//       resolve("Even Number");
//     } else {
//       reject("Odd Number");
//     }
//   });
// };

// Consuming Promises
// .then(), .catch(), .finally()

// console.log(isEven(6) + "hkb");
// isEven(5)
//   .then((message) => {
//     console.log({ message });
//   })
//   .catch((error) => {
//     console.log({ error });
//   })
//   .finally(() => {
//     console.log("Promise is resolved");
//   });

// const checkAge = (age) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (age > 18) {
//         resolve("Eligible to vote");
//       } else {
//         reject("Not eligible to vote");
//       }
//     }, 2000);
//   });
// };

// console.log(checkAge(19));

// checkAge(19)
//   .then((data) => {
//     console.log({ data });
//   })
//   .catch((error) => {
//     console.log({ error });
//   })
//   .finally(() => {
//     console.log("Promise is resolved/rejected");
//   });

// checkAge(10)
//   .then((data) => {
//     console.log({ data });
//   })
//   .catch((error) => {
//     console.log({ error });
//   })
//   .finally(() => {
//     console.log("Promise is resolved/rejected");
//   });

// doTask1()
//   .then((result1) => {
//     return doTask2(result1);
//   })
//   .then((result2) => {
//     return doTask3(result2);
//   })
//   .then((finalResult) => {
//     console.log({ finalResult });
//   })
//   .catch((error) => {
//     console.log({ error });
//   });

// ====================================================================================================================================
// Promise.all() : Promise.all() is used to run multiple promises in parallel and return the results in an array.

// Promise.allSettled() : Promise.allSettled() is used to run multiple promises in parallel and return the results in an array.

// Promise.race() : Promise.race() is used to run multiple promises in parallel and return the results in an array.

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Promise 1 rejected");
//   }, 4000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 2 rejected");
//   }, 2000);
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 3 resolved");
//   }, 3000);
// });

// // Accepts am array of promises and returns the array of resolved values
// // If any of the promise is rejected, then the promise.all() will return the rejected value
// // If all the promises are resolved, then the promise.all() will return the array of resolved values
// Promise.all([promise1, promise2, promise3])
//   .then((data1) => {
//     console.log({ data1 });
//     // add(a, b, c) => d;
//   })
//   .catch((error1) => {
//     console.log({ error1 });
//   });

// // Accepts am array of promises and returns the array of resolved values
// // If any of the promise is rejected, then the promise.allSettled() will return an array of objects with status and value and reason
// // If all the promises are resolved, then the promise.allSettled() will return the array of resolved values
// Promise.allSettled([promise1, promise2, promise3])
//   .then((data2) => {
//     console.log({ data2 });
//   })
//   .catch((error2) => {
//     console.log({ error2 });
//   });

// // Accepts an array of promises and returns the first resolved or rejected promise
// // If all the promises are resolved, then the promise.race() will return the resolved value for the  promise that is resolved or rejected first
// Promise.race([promise1, promise2, promise3])
//   .then((data3) => {
//     console.log({ data3 });
//   })
//   .catch((error3) => {
//     console.log({ error3 });
//   });

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 1 resolved");
//   }, 4000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 2 resolved");
//   }, 2000);
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 3 resolved");
//   }, 3000);
// });

// const start = Date.now();
// Promise.race([promise1, promise2, promise3])
//   .then((data) => {
//     const end = Date.now();
//     console.log(`Time taken: ${end - start}ms`);
//   })
//   .catch((error) => {
//     console.log({ error });
//   });

// doTask1((result1) => {
//   checkAge(10)
//     .then((data) => {
//       console.log({ data });
//     })
//     .catch((error) => {
//       console.log({ error });
//     })
//     .finally(() => {
//       console.log("Promise is resolved/rejected");
//     });
//   doTask2(result1, (result2) => {
//     checkAge(10)
//       .then((data) => {
//         console.log({ data });
//       })
//       .catch((error) => {
//         console.log({ error });
//       })
//       .finally(() => {
//         console.log("Promise is resolved/rejected");
//       });
//     doTask3(result2, (result3) => {
//       checkAge(10)
//         .then((data) => {
//           console.log({ data });
//         })
//         .catch((error) => {
//           console.log({ error });
//         })
//         .finally(() => {
//           console.log("Promise is resolved/rejected");
//         });
//       doTask4(result3, (result4) => {
//         checkAge(10)
//           .then((data) => {
//             console.log({ data });
//           })
//           .catch((error) => {
//             console.log({ error });
//           })
//           .finally(() => {
//             console.log("Promise is resolved/rejected");
//           });
//         doTask5(result4, (result5) => {
//           checkAge(10)
//             .then((data) => {
//               console.log({ data });
//             })
//             .catch((error) => {
//               console.log({ error });
//             })
//             .finally(() => {
//               console.log("Promise is resolved/rejected");
//             });
//           console.log({ result5 });
//         });
//       });
//     });
//   });
// });

// // Callback Hell or Pyramid of Doom
// doTask1
//    ↳ doTask2
//        ↳ doTask3
//            ↳ doTask4
//                ↳ result

// // Promise
// doTask1 → doTask2 → doTask3 → doTask4 → result
