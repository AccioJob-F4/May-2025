function convertToRoman(num) {
  // Define an array of symbol-value pairs for Roman numerals in descending order
  const symbols = [
    ["M", 1000], // 1000 = M
    ["CM", 900], // 900 = CM
    ["D", 500], // 500 = D
    ["CD", 400], // 400 = CD
    ["C", 100], // 100 = C
    ["XC", 90], // 90 = XC
    ["L", 50], // 50 = L
    ["XL", 40], // 40 = XL
    ["X", 10], // 10 = X
    ["IX", 9], // 9 = IX
    ["V", 5], // 5 = V
    ["IV", 4], // 4 = IV
    ["I", 1], // 1 = I
  ];

  // Initialize an empty string to build the Roman numeral
  let roman = "";
  // Loop through each symbol-value pair
  symbols.forEach((item) => {
    // Destructure the array to get the symbol and its value
    const [symbol, value] = item;
    // While the current number is greater than or equal to the current value
    while (num >= value) {
      // Add the corresponding Roman numeral symbol to the result
      roman += symbol;
      // Subtract the value from the number
      num -= value;
    }
  });
  // Return the complete Roman numeral string
  return roman;
}

// Test cases
console.log(convertToRoman(14)); // XIV
console.log(convertToRoman(798)); // DCCXCVIII

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));

// // do not edit below this line
module.exports = convertToRoman;
