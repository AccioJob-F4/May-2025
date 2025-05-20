function convertToRoman(num) {
  const symbols = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  let roman = "";
  symbols.forEach((item) => {
    const [symbol, value] = item;
    while (num >= value) {
      roman += symbol;
      num -= value;
    }
  });
  return roman;
}

// Test cases
console.log(convertToRoman(14)); // XIV
console.log(convertToRoman(798)); // DCCXCVIII

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));

// // do not edit below this line
module.exports = convertToRoman;
