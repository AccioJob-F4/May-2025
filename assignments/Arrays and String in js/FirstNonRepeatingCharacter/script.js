function firstNonRepeatedChar(str) {
  // Object to store the count of each character in the string
  let charCount = {};

  // Create frequency map: loop through each character in the string
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  //check frequency and returns result
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  return null;
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input));
