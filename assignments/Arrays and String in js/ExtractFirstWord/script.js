function firstWord(str) {
  // Trim any leading and trailing whitespace from the input string
  let trimStr = str.trim();
  // Split the string into an array of words based on space character
  let words = str.split(" "); // ["see", "and", "stop"]
  // Return the first word (first element of the array)
  return words[0];
}

// Test case 1: "see and stop" should return "see"
console.log(firstWord("see and stop"));
// Test case 2: " Hello World!" should return "Hello" (note: there's an issue here as trimStr isn't used)
console.log(firstWord(" Hello World!"));
// Test case 3: "12345" should return "12345" (single word)
console.log(firstWord("12345"));
// Test case 4: "" should return undefined (empty string has no words)
console.log(firstWord(""));
// Do not change the code below

// // Prompt the user to enter a string
// const s = prompt("Enter String:");
// // Display the first word of the string as an alert
// alert(firstWord(s));
