/**
 * JAVASCRIPT STRINGS - SESSION 03
 * This file covers JavaScript string concepts and methods including:
 * - String creation and properties
 * - String immutability
 * - Template literals
 * - Common string methods for manipulation, extraction, and searching
 * - String conversion
 * - Escape characters
 * - Iterating over strings
 * - Practical string examples (vowel counter, palindrome checker)
 */

// =====================================================================
// STRING BASICS AND CREATION
// =====================================================================
// Strings --> immutable (cannot be changed after creation)

// let singleQuote = "single quote";  // Using single quotes
// let doubleQuote = "double quote";  // Using double quotes
// let backtick = `backtick`;         // Using backticks (Template Literals)

// console.log(singleQuote);
// console.log(doubleQuote);
// console.log(backtick);

// =====================================================================
// STRING IMMUTABILITY
// =====================================================================
// let firstName = "John";
// console.log(firstName[1]);         // 'o'
// firstName[1] = "a";                // This doesn't change the string because strings are immutable
// console.log(firstName[1]);         // Still 'o'

// =====================================================================
// TEMPLATE LITERALS
// =====================================================================
// // Multiline Strings
// let poem = `Roses are red,
// violets are blue,
// sugar is sweet,
// and so are you.`;                  // Backticks allow for multiline strings without escape characters

// console.log(poem);

// =====================================================================
// STRING PROPERTIES
// =====================================================================
// String Methods
// let str = "Hello World";

// console.log(str.length);           // 11 - number of characters in the string

// let str2 = `Hello
// World`;

// console.log(str2.length);          // 12 - includes the newline character

// =====================================================================
// CHARACTER ACCESS METHODS
// =====================================================================
// charAt() - Returns the character at a specified index
// let str = "Hello World";

// console.log(str.charAt(0));        // 'H'

// console.log(str.charAt(1));        // 'e'

// charCodeAt() - Returns the Unicode value of the character at a specified index
// let str = "Hello World";

// console.log(str.charCodeAt(0));    // 72 - Unicode value of 'H'

// console.log(str.charCodeAt(1));    // 101 - Unicode value of 'e'

// =====================================================================
// CASE TRANSFORMATION METHODS
// =====================================================================
// toUpperCase() & toLowerCase()
// let str = "Hello World";

// console.log(str.toUpperCase());    // "HELLO WORLD"
// console.log(str.toLowerCase());    // "hello world"

// =====================================================================
// SEARCH METHODS
// =====================================================================
// indexOf() and lastIndexOf() - Find the position of a substring
// let str = "Hello World";

// console.log(str.indexOf("o"));     // 4 - position of the first occurrence of 'o'

// console.log(str.lastIndexOf("o")); // 7 - position of the last occurrence of 'o'

// includes(), startsWith(), endsWith() - Check if a string contains/starts with/ends with a substring
// let str = "Hello World";

// console.log(str.includes("Hello")); // true - string contains "Hello"
// console.log(str.includes("hello")); // false - case sensitive

// console.log(str.startsWith("Hello")); // true - string starts with "Hello"
// console.log(str.startsWith("hello")); // false - case sensitive

// console.log(str.endsWith("World")); // true - string ends with "World"
// console.log(str.endsWith("world")); // false - case sensitive

// =====================================================================
// STRING EXTRACTION METHODS
// =====================================================================
// String Manipulations

// Extraction
// slice() - Extracts a part of a string and returns a new string
// let str = "Hello World";

// console.log(str.slice(0, 5));     // "Hello" - from index 0 to 4 (5 not included)

// console.log(str.slice(6));        // "World" - from index 6 to the end

// substring() - Similar to slice but cannot accept negative indices
// let str = "Hello World";

// console.log(str.substring(0, 5)); // "Hello" - from index 0 to 4 (5 not included)

// console.log(str.substring(6));    // "World" - from index 6 to the end

// console.log(str.substring(8, 3)); // "lo Wo" - swaps if start > end

// substr() - Extracts a specified number of characters (deprecated in modern JavaScript)
// let str = "Hello World";

// console.log(str.substr(0, 3));    // "Hel" - starts at index 0 and gets 3 characters

// console.log(str.substr(6));       // "World" - from index 6 to the end

// =====================================================================
// STRING REPLACEMENT METHODS
// =====================================================================
// Replacing
// replace() - Replaces the first occurrence of a substring
// let str = "Hello World World";

// console.log(str.replace("World", "Universe")); // "Hello Universe World" - only first occurrence is replaced
// console.log(str);                              // "Hello World World" - original string is unchanged
// console.log(str.replace("world", "Universe")); // "Hello World World" - case sensitive, no replacement

// replaceAll() - Replaces all occurrences of a substring
// let str = "Hello World World";

// console.log(str.replaceAll("World", "Universe")); // "Hello Universe Universe" - all occurrences are replaced

// =====================================================================
// STRING CONCATENATION METHODS
// =====================================================================
// Concatenation
// + Operator
// let str1 = "Hello";
// let str2 = "World";

// console.log(str1 + " " + str2);   // "Hello World" - using the + operator

// concat()
// let str1 = "Hello";
// let str2 = "World";

// console.log(str1.concat(" ", str2)); // "Hello World" - using the concat method
// console.log({ str1, str2 });       // Original strings are unchanged

// Template Literals - Modern way to concatenate strings with expressions
// let firstName = "John";
// let lastName = "Doe";
// let age = 2;

// console.log(`Hello  ${age > 18 ? "Adult" : "Minor"} ${firstName} ${lastName}`); // Supports expressions inside ${}
// console.log("Hello Minor John Doe");
// console.log("Hello " + firstName + " " + lastName);

// =====================================================================
// STRING SPLITTING AND JOINING
// =====================================================================
// split(separator/delimeter, limit) - Splits a string into an array of substrings
// let str = "Hello World";

// console.log(str.split(" "));      // ["Hello", "World"] - split by space

// console.log(str.split(""));       // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"] - split by character

// const data = "John,Jane,Doe,Smith";

// console.log(data.split(","));     // ["John", "Jane", "Doe", "Smith"] - split by comma

// console.log(data.split(",", 2));  // ["John", "Jane"] - limit to 2 elements

// repeat() - Returns a new string with a specified number of copies
// let str = "Hello";
// console.log(str.repeat(2.7));     // "HelloHello" - decimal values are converted to integers

// =====================================================================
// STRING PADDING METHODS
// =====================================================================
// padStart() and padEnd() - Pad a string to a specified length
// let str = "Hello";

// console.log(str.padStart(10, "").length); // 10 - padding with spaces to make the string 10 characters long

// console.log(str.padEnd(10, ""));  // "Hello     " - padding with spaces at the end

// =====================================================================
// STRING CONVERSION
// =====================================================================
// console.log(parseFloat("123.45ahgf")); // 123.45 - converts string to number, stops at invalid character

// =====================================================================
// ESCAPE CHARACTERS
// =====================================================================
// \n --> new line
// \t --> tab
// \r --> carriage return
// \b --> backspace
// \f --> form feed
// \v --> vertical tab
// \' --> single quote
// \" --> double quote
// \\ --> backslash

// const escapeCharString =
//   "This is a new line:\nThis is a tab:\tTabbed text\nCarriage Return:\rOverwritten\nBackspace: ABC\b\nForm Feed:\fForm Feed Example\nSingle Quote:'Hellow'\nDouble Quote:\"Hello\"\nBackslash:\\";
// console.log(escapeCharString);

// =====================================================================
// STRING ITERATION
// =====================================================================
// Iterating over a string
// let str = "Hello World";

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);            // Access each character by index
// }

// for (let char of str) {
//   console.log(char);              // Iterate over each character using for...of
// }

// for (let char in str) {
//   console.log(char);              // Iterate over indices using for...in
// }

// =====================================================================
// PRACTICAL STRING EXAMPLES
// =====================================================================
// Example 1: Counting vowels in a string
// const sentence = "Learning Javascript is great";
// // Count the number of vowels in the sentence

// let vowels = "aeiouAEIOU";

// let vowelCount = 0;

// for (const char of sentence) {
//   if (vowels.includes(char)) vowelCount++;
// }

// console.log(`Number of vowels: ${vowelCount}`); // 9 vowels in the sentence

// Example 2: Palindrome Check (a word that reads the same backward as forward)
// function isPalindrome(str) {
//   if (str.length <= 1) {
//     return true;                  // Empty string or single character is always a palindrome
//   }

//   let reversedString = str.split("").reverse().join("");

//   return str === reversedString;  // Compare original string with its reversed version
// }

// console.log(isPalindrome(""));     // true - empty string is a palindrome
// console.log(isPalindrome("a"));    // true - single character is a palindrome
// console.log(isPalindrome("aa"));   // true - "aa" reads the same forwards and backwards
// console.log(isPalindrome("racecar")); // true - "racecar" is a palindrome
// console.log(isPalindrome("hello")); // false - "hello" is not a palindrome
// console.log(isPalindrome("ab"));   // false - "ab" is not a palindrome
