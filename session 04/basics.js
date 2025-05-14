// DEEP DIVE INTO OBJECTS IN JS

// const employee = {
//   id: 101,
//   name: "Divyansh Singh",
//   role: "Senior Frontend Engineer",
//   salary: 2000,
//   performance: 2,
//   getAnnualSalary: function () {
//     return this.salary * 12;
//   },
// };

// // DOT Notation
// console.log(employee.getAnnualSalary());
// console.log(employee.performance);

// // Bracket Notation
// console.log(employee["getAnnualSalary"]());
// console.log(employee["performance"]);

// // Constructor Function
// function Employee(id, name, role, salary, performance) {
//   this.id = id;
//   this.name = name;
//   this.role = role;
//   this.salary = salary;
//   this.performance = performance;
//   this.getAnnualSalary = function () {
//     return this.salary * 12;
//   };
// }

// const employee1 = new Employee(
//   101,
//   "Divyansh Singh",
//   "Senior Frontend Engineer",
//   2000,
//   2
// );

// console.log(employee1.getAnnualSalary());
// console.log(employee1.performance);

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

// console.log(library.sections.fiction.books[0].copies);

// // Accessing the author of "The Selfish Gene"
// console.log(library.sections.science.books[1].author);

// Optional Chaining

// const data = {
//   id: 1,
//   name: "Divyansh Singh",
//   role: "Senior Frontend Engineer",
//   salary: 2000,
//   performance: 2,
//   //   techStack: ["React", "Node", "MongoDB"],
// };

// console.log(data.role);
// // if (data && data.techStack && data.techStack.length > 0)
// // console.log(data.techStack[0]);

// // Optional Chaining
// console.log(data?.techStack?.[0]);

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

// const displayAllBooks = (library) => {
//   const sections = library.sections;

//   for (let section in sections) {
//     console.log(`Section: ${section}`);

//     sections[section].books.forEach((book) => {
//       console.log(` - ${book.title} by ${book.author}`);
//     });
//   }
// };

// displayAllBooks(library);
// console.log(library.sections.fiction.books[0].copies);
// library.sections.fiction.books[0].copies += 1;
// console.log(library.sections.fiction.books[0].copies);

// Deep Copy & Shallow Copy

// Shallow Copy

// const shallowCopy = library;
// const shallowCopy2 = { ...library };
// const shallowCopy3 = Object.assign({}, library);

// shallowCopy.name = "New Library";

// console.log(shallowCopy);
// console.log(library);

// Deep Copy

// const deepCopy = JSON.parse(JSON.stringify(library));
// deepCopy.name = "New Library deep";
// console.log(deepCopy);
// console.log(library);

// TAKE HOME ASSIGNMENT
// const createDeepCopy = (obj) => {
//   // return deep copy of obj without using JSON.parse or JSON.stringify
// };

// const obj1 = { a: 1, b: { c: 2 } };
// const shallowCopyObj1 = { ...obj1 };

// const obj2 = { a: 1, b: { c: 2 } };
// const deepCopyObj2 = JSON.parse(JSON.stringify(obj2));

// shallowCopyObj1.a = 10; // this will not change the original obj1.a
// shallowCopyObj1.b.c = 20; // this will also change the original obj1.b.c

// deepCopyObj2.a = 10; // this will not change the original obj2.a
// deepCopyObj2.b.c = 20; // this will not change the original obj2.b.c

// console.log(obj1);
// console.log(shallowCopyObj1);

// console.log(obj2);
// console.log(deepCopyObj2);

// Pure functions

// function add(a, b) {
//   return a + b;
// }

// console.log(add(1, 2));
// console.log(add(1, 2));

// Impure functions

// let count = 0;
// function increment(a) {
//   count++;
//   return count + a;
// }

// console.log(increment(1));
// console.log(increment(1));
// console.log(increment(1));
// console.log(increment(1));

// Spread (...args) & Rest Operators (...args)

// Spread Operator
// const student1 = { name: "Alice", age: 20, courses: ["Maths", "Physics"] };
// const contact1 = { email: "alice@gmail.com", phone: 1234567890 };
// const student2 = { ...student1 }; // Spread Operator
// const mergedStudents = { ...contact1, ...student1 }; // Spread Operator

// console.log(student1);
// console.log(student2);
// console.log(mergedStudents);

// // Rest Operator
// const user = { id: "1", name: "John", age: 20, email: "john@gmail.com" };
// const { id, name, ...userInfo } = user;

// console.log(id);
// console.log(name);
// console.log(userInfo);

// Object.keys()
// Object.values()
// Object.entries()

// const user = { id: "1", name: "John", age: 20, email: "john@gmail.com" };

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// Object.assign()
// const user1 = { id: "1", name: "John", age: 20, email: "john@gmail.com" };
// const user2 = { id1: "2", name1: "Jane", age1: 21, email1: "jane@gmail.com" };

// const mergedUsers = Object.assign({}, user1, user2);

// console.log(mergedUsers);

// Object.freeze()  & Object.seal()

// const user = { id: "1", name: "John", age: 20, email: "john@gmail.com" };

// Object.freeze(user); // This will prevent any changes to the object
// user.name = "Dunes";
// delete user.email;
// user.phone = 1234567890;
// console.log(user);

// Object.seal(user); // This will prevent any changes to the object except for the properties that are already present
// user.name = "Dunes";
// delete user.email;
// user.phone = 1234567890;
// console.log(user);

// Destructuring

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

// const {
//   address: { city },
//   employees: {
//     ceo: { name: ceoName },
//     cto: { name, email },
//   },
// } = company;

// const {
//   name,
//   address: { zip, ...restAddress },
//   employees: {
//     ceo: { age, email, ...restCeo },
//     cto: { age: ctoAge, ...restCto },
//   },
// } = company;

// console.log(restAddress);
// console.log(restCeo);
// console.log(restCto);

// console.log(city);
// console.log(ceoName);
// console.log(name);
// console.log(email);

// company.employees.cto.name;

// // 50
// const ctoName = company.employees.cto.name;

// // 50
// const ceoAge = company.employees.cto.age;

// // 50
// const ctoEmail = company.employees.cto.email;
