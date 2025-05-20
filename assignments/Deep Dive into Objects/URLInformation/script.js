/**
 * URL INFORMATION SCRIPT
 * ======================
 * This script demonstrates basic DOM interaction by accessing the current URL
 * and displaying its length to the user.
 *
 * Concepts demonstrated:
 * - Browser window object and its properties
 * - String properties and methods
 * - Alert dialog box
 * - Template literals
 * - Variable declaration with different keywords
 */

/*
 * Theory:
 * - window: The global object in browser JavaScript that represents the browser window
 *   It contains properties like document, location, history, and methods like alert()
 *
 * - window.location: An object containing information about the current URL
 *   Properties include href, hostname, pathname, search, hash, etc.
 *
 * - window.location.href: A property that returns the entire URL as a string
 *   For example: "https://www.example.com/page?param=value#section"
 *
 * - String.length: A property of strings that returns the number of characters
 *   It's a read-only property available on any string object
 */

// Get the current URL from the window.location object
// The 'var' keyword declares a variable with function scope
// Variables declared with 'var' are hoisted to the top of their execution context
var currentURL = window.location.href;

// Calculate the length of the URL string
// The 'const' keyword declares a block-scoped variable that cannot be reassigned
// Constants are preferred when the value won't change throughout the execution
const urlLen = currentURL.length;

// Display an alert with the URL length
// The alert() method displays a dialog box with a message and an OK button
// Template literals (backticks) allow embedding expressions using ${expression} syntax
// They provide a cleaner way to concatenate variables and strings
alert(`The length of the URL is: ${urlLen}`);
