/**
 * ALPHABETICAL ARTICLE SORTER
 *
 * This script sorts a list of band names alphabetically while ignoring articles
 * (a, an, the) at the beginning of names. It then displays the sorted list in the DOM.
 *
 * Concepts demonstrated:
 * - Array manipulation with sort() method
 * - Regular expressions for string replacement
 * - DOM manipulation
 * - Arrow functions
 * - Template literals
 */

// Array of band names to be sorted
const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

/**
 * Removes articles (a, an, the) from the beginning of band names
 *
 * @param {string} bandName - The band name to process
 * @returns {string} - The band name without leading articles
 */
function strip(bandName) {
  // Use regex to remove 'a ', 'an ', or 'the ' from the start of the string (case-insensitive)
  // ^      - Matches the beginning of the string
  // (...)  - Capturing group to match any of the articles
  // |      - Logical OR operator in regex
  // /i     - Makes the pattern case-insensitive
  return bandName.replace(/^(a |an |the)/i, "").trim();
}

// Sort the bands array alphabetically, ignoring articles at the beginning
// The sort() method takes a comparison function:
// - Returns a positive value (1) if the first argument should be sorted after the second
// - Returns a negative value (-1) if the first argument should be sorted before the second
const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

// Select the HTML element with id "bands" and update its content
// 1. Map each band name to an HTML list item using template literals
// 2. Join all list items into a single string with join("")
// 3. Set the innerHTML of the selected element to this string
document.querySelector("#bands").innerHTML = sortedBands
  .map((band) => `<li>${band}</li>`)
  .join("");
