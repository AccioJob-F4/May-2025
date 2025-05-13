function firstNonRepeatedChar(str) {
  let charCount = {};

  //create frequency
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
