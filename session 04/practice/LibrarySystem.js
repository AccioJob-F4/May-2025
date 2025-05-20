/**
 * LIBRARY SYSTEM IMPLEMENTATION - PRACTICE EXERCISE
 *
 * This file demonstrates:
 * - Object-oriented programming in JavaScript
 * - Class implementation with methods
 * - Nested object structures
 * - Deep cloning of objects
 * - Array methods (find, filter, reduce)
 * - Data manipulation and management
 */

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

/**
 * Creates a deep copy of an object using JSON serialization and parsing
 *
 * @param {Object} obj - The object to be deeply cloned
 * @returns {Object} A new object with the same structure and values but no references to the original
 */
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Library class representing a collection of sections containing books
 * Manages the organization and operations on books and sections
 */
class Library {
  /**
   * Create a new Library instance
   * Initializes with an empty array of sections
   */
  constructor() {
    // Initialize the library with an empty array of sections
    this.sections = [];
  }

  /**
   * Adds a new section to the library
   *
   * @param {Object} section - The section object to add, should have sectionName and books properties
   */
  addSection(section) {
    // Add the section object to the sections array
    this.sections.push(section);
  }

  /**
   * Adds a book to a specific section identified by name
   *
   * @param {string} sectionName - The name of the section to add the book to
   * @param {Object} book - The book object to add
   */
  addBook(sectionName, book) {
    // Find the section with the matching name
    const section = this.sections.find((s) => s.sectionName === sectionName);
    // If section exists, add the book; otherwise, log an error message
    section
      ? section.books.push(book)
      : console.log(`Section ${sectionName} not found.`);
  }

  /**
   * Removes a book from a specific section by its title
   *
   * @param {string} sectionName - The name of the section to remove the book from
   * @param {string} title - The title of the book to remove
   */
  removeBook(sectionName, title) {
    // Find the section with the matching name
    const section = this.sections.find((s) => s.sectionName === sectionName);
    // If section doesn't exist, exit the method early
    if (!section) return;

    // Filter out the book with the matching title, keeping all others
    section.books = section.books.filter((book) => book.title !== title);
  }

  /**
   * Creates a deep copy of a section by name
   *
   * @param {string} sectionName - The name of the section to clone
   * @returns {Object|null} A deep copy of the section or null if not found
   */
  cloneSection(sectionName) {
    // Find the section with the matching name
    const section = this.sections.find((s) => s.sectionName === sectionName);
    // If section exists, create and return a deep clone; otherwise, return null
    return section ? deepClone(section) : null;
  }

  /**
   * Calculates the total number of books across all sections
   *
   * @returns {number} The total number of books in the library
   */
  calculateTotalBooks() {
    // Use reduce to sum the number of books in each section
    return this.sections.reduce(
      (acc, section) => acc + section.books.length,
      0
    );
  }
}

// =====================================================================
// TEST CODE
// =====================================================================
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
