/**
 * DOM MANIPULATION - SESSION 06
 * This file covers methods for selecting DOM elements:
 * - getElementById
 * - getElementsByClassName
 * - getElementsByTagName
 * - querySelector
 * - querySelectorAll
 *
 * The Document Object Model (DOM) is a programming interface for HTML documents.
 * It represents the page so that programs can change the document structure, style, and content.
 */

// =====================================================================
// SELECTING DOM ELEMENTS - TRADITIONAL METHODS
// =====================================================================
// Selecting DOM elements

// getElementById --> Selects an element using its id attribute --> returns just one element
// Most efficient method when selecting by ID, but limited to ID selection only

// const greetBtn = document.getElementById("greet-btn");  // Returns null if element doesn't exist

// getElementsByClassName --> Selects all elements with the given class name --> returns a list of elements (HTMLCollection)
// HTMLCollection is a live collection - it updates automatically when DOM changes

// const listItems = document.getElementsByClassName("greet-btn-class");

// console.log(listItems);  // Returns HTMLCollection even if there's only one match or no matches

// getElementsByTagName --> Selects all elements with the given tag name --> returns a list of elements (HTMLCollection)
// Useful for selecting all elements of the same type (e.g., all paragraphs, all images)

// const listItems = document.getElementsByTagName("li");

// console.log(listItems);  // Returns HTMLCollection of all <li> elements in the document

// =====================================================================
// SELECTING DOM ELEMENTS - MODERN METHODS
// =====================================================================
// querySelector --> Selects the first element that matches the given CSS selector --> returns just one element
// More versatile than getElementById as it can use any CSS selector

// const greetBtnId = document.querySelector("#greet-btn");     // Select by ID (use # prefix)
// const greetBtnClass = document.querySelector(".greet-btn-class"); // Select by class (use . prefix)
// const greetBtnTag = document.querySelector("li");            // Select by tag name

// console.log(greetBtnId);      // Returns the first element with id="greet-btn" or null if not found
// console.log(greetBtnClass);   // Returns the first element with class="greet-btn-class" or null if not found
// console.log(greetBtnTag);     // Returns the first <li> element or null if not found

// querySelectorAll --> Selects all elements that match the given CSS selector --> returns a list of elements (NodeList)
// NodeList is not a live collection (unlike HTMLCollection) - it doesn't update automatically

// const greetBtnId = document.querySelectorAll("#greet-btn");         // Should return a list with one element (IDs are unique)
// const greetBtnClass = document.querySelectorAll(".greet-btn-class"); // Returns all elements with the class
// const greetBtnTag = document.querySelectorAll("li");                // Returns all <li> elements

// console.log(greetBtnId);      // NodeList with one item (or empty if not found)
// console.log(greetBtnClass);   // NodeList with all matching elements
// console.log(greetBtnTag);     // NodeList with all <li> elements

// =====================================================================
// KEY DIFFERENCES BETWEEN SELECTION METHODS
// =====================================================================
// 1. Return Type:
//    - getElementById returns a single Element
//    - getElementsByClassName returns a live HTMLCollection
//    - getElementsByTagName returns a live HTMLCollection
//    - querySelector returns a single Element
//    - querySelectorAll returns a static NodeList

// 2. Selector Flexibility:
//    - getElementById only works with IDs
//    - getElementsByClassName only works with classes
//    - getElementsByTagName only works with tag names
//    - querySelector and querySelectorAll work with any CSS selector

// 3. Performance:
//    - Traditional methods (getElementById, etc.) are generally faster
//    - querySelector and querySelectorAll are more versatile but slightly slower

// ------------------------------------------------------------
