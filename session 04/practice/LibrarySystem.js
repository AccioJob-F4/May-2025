// QUESTION:
// =========
// Library System with Nested Objects and Cloning
//
// Requirements:
// 1. Implement a Library class with nested objects:
//    - sections (array of section objects)
//
// 2. Each section object should have:
//    - sectionName
//    - books (array of book objects)
//
// 3. Implement methods to:
//    - Add a book to a section
//    - Remove a book by title
//    - Clone a section using a deep copy function
//    - Calculate the total number of books in the library

// Utility function for creating deep copies of objects
// Uses JSON methods to create a completely new object with the same structure and values
// This ensures that modifying the clone doesn't affect the original object
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Main Library class that manages sections and books
class Library {
  constructor() {
    // Initialize the library with an empty array of sections
    this.sections = [];
  }

  // Method to add a new section to the library
  addSection(section) {
    // Add the section object to the sections array
    this.sections.push(section);
  }

  // Method to add a book to a specific section identified by name
  addBook(sectionName, book) {
    // Find the section with the matching name
    const section = this.sections.find((s) => s.sectionName === sectionName);
    // If section exists, add the book; otherwise, log an error message
    section
      ? section.books.push(book)
      : console.log(`Section ${sectionName} not found.`);
  }

  // Method to remove a book from a specific section by its title
  removeBook(sectionName, title) {
    // Find the section with the matching name
    const section = this.sections.find((s) => s.sectionName === sectionName);
    // If section doesn't exist, exit the method early
    if (!section) return;

    // Filter out the book with the matching title, keeping all others
    section.books = section.books.filter((book) => book.title !== title);
  }

  // Method to create a deep copy of a section by name
  cloneSection(sectionName) {
    // Find the section with the matching name
    const section = this.sections.find((s) => s.sectionName === sectionName);
    // If section exists, create and return a deep clone; otherwise, return null
    return section ? deepClone(section) : null;
  }

  // Method to calculate the total number of books across all sections
  calculateTotalBooks() {
    // Use reduce to sum the number of books in each section
    return this.sections.reduce(
      (acc, section) => acc + section.books.length,
      0
    );
  }
}

// Test code to demonstrate the Library System functionality
// Create a new library instance
const library = new Library();

// Create a fiction section with an empty books array
const fictionSection = { sectionName: "Fiction", books: [] };
// Add the section to the library
library.addSection(fictionSection);

// Add two books to the Fiction section
library.addBook("Fiction", { title: "1984", author: "Orwell" });
library.addBook("Fiction", { title: "Brave New World", author: "Huxley" });

// Create a deep copy of the Fiction section and log it
const clonedFiction = library.cloneSection("Fiction");
console.log("Cloned Section:", clonedFiction);

// Calculate and display the total number of books in the library
console.log("Total Books in Library:", library.calculateTotalBooks());
