/**
 * DEEP DIVE INTO OBJECTS IN JAVASCRIPT - SESSION 04
 * This file covers advanced JavaScript object concepts including:
 * - Object creation and access
 * - Constructor functions
 * - Nested objects
 * - Optional chaining
 * - Deep vs. shallow copying
 * - Pure vs. impure functions
 * - Spread and rest operators
 * - Object methods (keys, values, entries, assign, freeze, seal)
 * - Object destructuring
 */

// =====================================================================
// BASIC OBJECT CREATION AND ACCESS
// =====================================================================
// DEEP DIVE INTO OBJECTS IN JS

// const employee = {
//   id: 101,
//   name: "Divyansh Singh",
//   role: "Senior Frontend Engineer",
//   salary: 2000,
//   performance: 2,
//   getAnnualSalary: function () {      // Method inside an object
//     return this.salary * 12;
//   },
// };

// // DOT Notation
// console.log(employee.getAnnualSalary()); // 24000 - accessing a method
// console.log(employee.performance);      // 2 - accessing a property

// // Bracket Notation
// console.log(employee["getAnnualSalary"]()); // 24000 - alternative way to access a method
// console.log(employee["performance"]);      // 2 - alternative way to access a property

// =====================================================================
// CONSTRUCTOR FUNCTIONS
// =====================================================================
// Constructor Function - Used to create multiple objects with the same structure
// function Employee(id, name, role, salary, performance) {
//   this.id = id;                       // 'this' refers to the new object being created
//   this.name = name;
//   this.role = role;
//   this.salary = salary;
//   this.performance = performance;
//   this.getAnnualSalary = function () {
//     return this.salary * 12;
//   };
// }

// const employee1 = new Employee(       // 'new' keyword creates a new object
//   101,
//   "Divyansh Singh",
//   "Senior Frontend Engineer",
//   2000,
//   2
// );

// console.log(employee1.getAnnualSalary()); // 24000
// console.log(employee1.performance);      // 2

// =====================================================================
// NESTED OBJECTS
// =====================================================================
// const library = {
//   name: "Central Library",
//   location: "Downtown",
//   sections: {                         // Nested object
//     fiction: {                        // Nested object within a nested object
//       books: [                        // Array of objects
//         { title: "1984", author: "George Orwell", copies: 3 },
//         { title: "Brave New World", author: "Aldous Huxley", copies: 5 },
//       ],
//     },
//     science: {
//       books: [
//         {
//           title: "A Brief History of Time",
//           author: "Stephen Hawking",
//           copies: 2,
//         },
//         { title: "The Selfish Gene", author: "Richard Dawkins", copies: 4 },
//       ],
//     },
//   },
// };

// console.log(library.sections.fiction.books[0].copies); // 3 - Deep property access

// // Accessing the author of "The Selfish Gene"
// console.log(library.sections.science.books[1].author); // "Richard Dawkins"

// =====================================================================
// OPTIONAL CHAINING
// =====================================================================
// Optional Chaining - Safely accessing nested properties without errors

// const data = {
//   id: 1,
//   name: "Divyansh Singh",
//   role: "Senior Frontend Engineer",
//   salary: 2000,
//   performance: 2,
//   //   techStack: ["React", "Node", "MongoDB"],
// };

// console.log(data.role);              // "Senior Frontend Engineer"
// // if (data && data.techStack && data.techStack.length > 0)
// // console.log(data.techStack[0]);   // Traditional way to avoid errors (verbose)

// // Optional Chaining
// console.log(data?.techStack?.[0]);   // undefined - no error is thrown if property doesn't exist

// const library = {
//   name: "Central Library",
//   location: "Downtown",
//   sections: {
//     fiction: {
//       books: [
//         { title: "1984", author: "George Orwell", copies: 3 },
//         { title: "Brave New World", author: "Aldous Huxley", copies: 5 },
//       ],
//     },
//     science: {
//       books: [
//         {
//           title: "A Brief History of Time",
//           author: "Stephen Hawking",
//           copies: 2,
//         },
//         { title: "The Selfish Gene", author: "Richard Dawkins", copies: 4 },
//       ],
//     },
//   },
// };

// =====================================================================
// ITERATING THROUGH NESTED OBJECTS
// =====================================================================
// const displayAllBooks = (library) => {
//   const sections = library.sections;

//   for (let section in sections) {     // Iterating through object properties
//     console.log(`Section: ${section}`);

//     sections[section].books.forEach((book) => { // Using forEach to iterate through array
//       console.log(` - ${book.title} by ${book.author}`);
//     });
//   }
// };

// displayAllBooks(library);             // Displays all books by section
// console.log(library.sections.fiction.books[0].copies); // 3
// library.sections.fiction.books[0].copies += 1;         // Modifying nested property
// console.log(library.sections.fiction.books[0].copies); // 4

// =====================================================================
// DEEP COPY VS SHALLOW COPY
// =====================================================================
// Deep Copy & Shallow Copy

// Shallow Copy - Only copies the references to nested objects

// const shallowCopy = library;          // Not a copy at all, just another reference to the same object
// const shallowCopy2 = { ...library };  // Shallow copy using spread operator
// const shallowCopy3 = Object.assign({}, library); // Shallow copy using Object.assign

// shallowCopy.name = "New Library";     // Modifies the original object too

// console.log(shallowCopy);             // Shows "New Library"
// console.log(library);                 // Also shows "New Library"

// Deep Copy - Creates a completely independent copy

// const deepCopy = JSON.parse(JSON.stringify(library)); // Deep copy using JSON methods
// deepCopy.name = "New Library deep";   // Doesn't affect the original
// console.log(deepCopy);                // Shows "New Library deep"
// console.log(library);                 // Still shows original name

// TAKE HOME ASSIGNMENT
// const createDeepCopy = (obj) => {
//   // return deep copy of obj without using JSON.parse or JSON.stringify
// };

// =====================================================================
// COMPARING SHALLOW VS DEEP COPY BEHAVIOR
// =====================================================================
// const obj1 = { a: 1, b: { c: 2 } };
// const shallowCopyObj1 = { ...obj1 };

// const obj2 = { a: 1, b: { c: 2 } };
// const deepCopyObj2 = JSON.parse(JSON.stringify(obj2));

// shallowCopyObj1.a = 10;               // This only changes the copy's top-level property
// shallowCopyObj1.b.c = 20;             // This changes both the copy AND the original's nested property

// deepCopyObj2.a = 10;                  // This only changes the copy's top-level property
// deepCopyObj2.b.c = 20;                // This only changes the copy's nested property

// console.log(obj1);                    // { a: 1, b: { c: 20 } } - nested property was modified
// console.log(shallowCopyObj1);         // { a: 10, b: { c: 20 } }

// console.log(obj2);                    // { a: 1, b: { c: 2 } } - original is unchanged
// console.log(deepCopyObj2);            // { a: 10, b: { c: 20 } }

// =====================================================================
// PURE VS IMPURE FUNCTIONS
// =====================================================================
// Pure functions - Always return the same output for the same input, no side effects

// function add(a, b) {
//   return a + b;                       // Pure function - depends only on inputs, no side effects
// }

// console.log(add(1, 2));               // 3
// console.log(add(1, 2));               // Always 3

// Impure functions - May return different output for the same input, has side effects

// let count = 0;
// function increment(a) {
//   count++;                            // Side effect - modifies external state
//   return count + a;                   // Depends on external state
// }

// console.log(increment(1));            // 2 (count becomes 1)
// console.log(increment(1));            // 3 (count becomes 2)
// console.log(increment(1));            // 4 (count becomes 3)
// console.log(increment(1));            // 5 (count becomes 4)

// =====================================================================
// SPREAD AND REST OPERATORS
// =====================================================================
// Spread Operator (...) - Expands an iterable into individual elements

// const student1 = { name: "Alice", age: 20, courses: ["Maths", "Physics"] };
// const contact1 = { email: "alice@gmail.com", phone: 1234567890 };
// const student2 = { ...student1 };     // Shallow copy using spread operator
// const mergedStudents = { ...contact1, ...student1 }; // Merging objects

// console.log(student1);                // Original object
// console.log(student2);                // Copied object (shallow copy)
// console.log(mergedStudents);          // Merged object

// // Rest Operator (...) - Collects remaining elements into a single variable
// const user = { id: "1", name: "John", age: 20, email: "john@gmail.com" };
// const { id, name, ...userInfo } = user; // id and name extracted, rest collected in userInfo

// console.log(id);                      // "1"
// console.log(name);                    // "John"
// console.log(userInfo);                // { age: 20, email: "john@gmail.com" }

// =====================================================================
// OBJECT METHODS
// =====================================================================
// Object.keys() - Returns an array of a given object's own property names
// Object.values() - Returns an array of a given object's own property values
// Object.entries() - Returns an array of a given object's own [key, value] pairs

// const user = { id: "1", name: "John", age: 20, email: "john@gmail.com" };

// console.log(Object.keys(user));       // ["id", "name", "age", "email"]
// console.log(Object.values(user));     // ["1", "John", 20, "john@gmail.com"]
// console.log(Object.entries(user));    // [["id", "1"], ["name", "John"], ["age", 20], ["email", "john@gmail.com"]]

// Object.assign() - Copies all enumerable own properties from one or more source objects to a target object

// const user1 = { id: "1", name: "John", age: 20, email: "john@gmail.com" };
// const user2 = { id1: "2", name1: "Jane", age1: 21, email1: "jane@gmail.com" };

// const mergedUsers = Object.assign({}, user1, user2); // Merge objects

// console.log(mergedUsers);             // Combined object with properties from both user1 and user2

// Object.freeze() & Object.seal() - Control mutability of objects

// const user = { id: "1", name: "John", age: 20, email: "john@gmail.com" };

// Object.freeze(user);                  // This will prevent any changes to the object
// user.name = "Dunes";                  // Attempt to modify (will not work)
// delete user.email;                    // Attempt to delete (will not work)
// user.phone = 1234567890;              // Attempt to add (will not work)
// console.log(user);                    // Still the original object

// Object.seal(user);                    // This prevents adding/deleting properties but allows modifying existing ones
// user.name = "Dunes";                  // This will work
// delete user.email;                    // This will not work
// user.phone = 1234567890;              // This will not work
// console.log(user);                    // { id: "1", name: "Dunes", age: 20, email: "john@gmail.com" }

// =====================================================================
// OBJECT DESTRUCTURING
// =====================================================================
// Destructuring - Extract multiple properties from an object in a single statement

// const company = {
//   name: "TechCorp",
//   address: {
//     city: "Bangalore", // <--
//     zip: 560095,
//   },
//   employees: {
//     ceo: {
//       name: "John Doe", // <--
//       age: 40,
//       email: "john@gmail.com",
//     },
//     cto: {
//       name: "Jamie Jamison ", // <--
//       age: 400,
//       email: "jamie@gmail.com", // <--
//     },
//   },
// };

// // Nested destructuring - extracting deeply nested properties
// const {
//   address: { city },                  // Extract city from address
//   employees: {
//     ceo: { name: ceoName },           // Extract name from ceo and rename to ceoName
//     cto: { name, email },             // Extract name and email from cto
//   },
// } = company;

// // Destructuring with rest operator
// const {
//   name,
//   address: { zip, ...restAddress },   // Extract zip, collect rest in restAddress
//   employees: {
//     ceo: { age, email, ...restCeo },  // Extract age and email, collect rest in restCeo
//     cto: { age: ctoAge, ...restCto }, // Extract age (rename to ctoAge), collect rest in restCto
//   },
// } = company;

// console.log(restAddress);             // { city: "Bangalore" }
// console.log(restCeo);                 // { name: "John Doe" }
// console.log(restCto);                 // { name: "Jamie Jamison ", email: "jamie@gmail.com" }

// console.log(city);                    // "Bangalore"
// console.log(ceoName);                 // "John Doe"
// console.log(name);                    // "Jamie Jamison "
// console.log(email);                   // "jamie@gmail.com"

// company.employees.cto.name;           // Accessing nested property traditional way

// // 50
// const ctoName = company.employees.cto.name; // Traditional way to extract a property

// // 50
// const ceoAge = company.employees.cto.age;   // Traditional way to extract a property

// // 50
// const ctoEmail = company.employees.cto.email; // Traditional way to extract a property
