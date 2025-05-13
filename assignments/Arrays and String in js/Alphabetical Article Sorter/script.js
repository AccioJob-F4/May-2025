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

// Function to remove articles (a, an, the) from the beginning of band names for sorting purposes
function strip(bandName) {
  // Use regex to remove 'a ', 'an ', or 'the ' from the start of the string (case-insensitive)
  // and trim any whitespace
  return bandName.replace(/^(a |an |the)/i, "").trim();
}
// Sort the bands array alphabetically, ignoring articles at the beginning
const sortedBands = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));
// Select the HTML element with id "bands" and set its innerHTML
// Map each band name to an HTML list item, then join them into a single string
document.querySelector("#bands").innerHTML = sortedBands
  .map((band) => `<li>${band}</li>`)
  .join("");
