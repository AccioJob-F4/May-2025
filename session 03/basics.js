// Strings --> immutable

// let singleQuote = "single quote";
// let doubleQuote = "double quote";
// let backtick = `backtick`; // (Template Literals)

// console.log(singleQuote);
// console.log(doubleQuote);
// console.log(backtick);

// let firstName = "John";
// console.log(firstName[1]);
// firstName[1] = "a";
// console.log(firstName[1]);

// Template Literals

// // Multiline Strings
// let poem = `Roses are red,
// violets are blue,
// sugar is sweet,
// and so are you.`;

// console.log(poem);

// String Methods
// let str = "Hello World";

// console.log(str.length);

// let str2 = `Hello
// World`;

// console.log(str2.length);

// charAt()
// let str = "Hello World";

// console.log(str.charAt(0));

// console.log(str.charAt(1));

// charCodeAt()
// let str = "Hello World";

// console.log(str.charCodeAt(0));

// console.log(str.charCodeAt(1));

// toUpperCase() & toLowerCase()
// let str = "Hello World";

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// indexOf() and lastIndexOf()
// let str = "Hello World";

// console.log(str.indexOf("o"));

// console.log(str.lastIndexOf("o"));

// includes(), startsWith(), endsWith()
// let str = "Hello World";

// console.log(str.includes("Hello"));
// console.log(str.includes("hello"));

// console.log(str.startsWith("Hello"));
// console.log(str.startsWith("hello"));

// console.log(str.endsWith("World"));
// console.log(str.endsWith("world"));

// String Manipulations

// Extraction
// slice()
// let str = "Hello World";

// console.log(str.slice(0, 5));

// console.log(str.slice(6));

// substring()
// let str = "Hello World";

// console.log(str.substring(0, 5));

// console.log(str.substring(6));

// console.log(str.substring(8, 3));

// substr()
// let str = "Hello World";

// console.log(str.substr(0, 3));

// console.log(str.substr(6));

// Replacing
// replace()
// let str = "Hello World World";

// console.log(str.replace("World", "Universe"));
// console.log(str);
// console.log(str.replace("world", "Universe"));

// replaceAll()
// let str = "Hello World World";

// console.log(str.replaceAll("World", "Universe"));

// Concatenation
// + Operator
// let str1 = "Hello";
// let str2 = "World";

// console.log(str1 + " " + str2);

// concat()
// let str1 = "Hello";
// let str2 = "World";

// console.log(str1.concat(" ", str2));
// console.log({ str1, str2 });

// Template Literals
// let firstName = "John";
// let lastName = "Doe";
// let age = 2;

// console.log(`Hello  ${age > 18 ? "Adult" : "Minor"} ${firstName} ${lastName}`);
// console.log("Hello Minor John Doe");
// console.log("Hello " + firstName + " " + lastName);

// split(separator/delimeter, limit)
// let str = "Hello World";

// console.log(str.split(" "));

// console.log(str.split(""));

// const data = "John,Jane,Doe,Smith";

// console.log(data.split(","));

// console.log(data.split(",", 2));

// repeat()
// let str = "Hello";
// console.log(str.repeat(2.7));

// padStart() and padEnd()
// let str = "Hello";

// console.log(str.padStart(10, "").length);

// console.log(str.padEnd(10, ""));

// String Conversion
// console.log(parseFloat("123.45ahgf"));

// Escape Characters
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

// Iterating over a string
// let str = "Hello World";

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// for (let char of str) {
//   console.log(char);
// }

// for (let char in str) {
//   console.log(char);
// }

// const sentence = "Learning Javascript is great";
// // Count the number of vowels in the sentence

// let vowels = "aeiouAEIOU";

// let vowelCount = 0;

// for (const char of sentence) {
//   if (vowels.includes(char)) vowelCount++;
// }

// console.log(`Number of vowels: ${vowelCount}`);

// Palindrome Check

// function isPalindrome(str) {
//   if (str.length <= 1) {
//     return true;
//   }

//   let reversedString = str.split("").reverse().join("");

//   return str === reversedString;
// }

// console.log(isPalindrome(""));
// console.log(isPalindrome("a"));
// console.log(isPalindrome("aa"));
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("hello"));
// console.log(isPalindrome("ab"));
