/*
 * URL Information Script
 * ======================
 * This script demonstrates basic DOM interaction by accessing the current URL
 * and displaying its length to the user.
 *
 * Theory:
 * - window: The global object in browser JavaScript that represents the browser window
 * - window.location: An object containing information about the current URL
 * - window.location.href: A property that returns the entire URL as a string
 * - String.length: A property of strings that returns the number of characters
 */

// Get the current URL from the window.location object
// The 'var' keyword declares a variable with function scope
var currentURL = window.location.href;

// Calculate the length of the URL string
// The 'const' keyword declares a block-scoped variable that cannot be reassigned
const urlLen = currentURL.length;

// Display an alert with the URL length
// Template literals (backticks) allow embedding expressions using ${expression} syntax
alert(`The length of the URL is: ${urlLen}`);
