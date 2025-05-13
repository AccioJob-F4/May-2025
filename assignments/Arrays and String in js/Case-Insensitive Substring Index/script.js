function indexOfIgnoreCase(str, subStr) {
  // Convert the main string to lowercase for case-insensitive comparison
  let lowerStr = str.toLowerCase(); //hello world
  // Convert the substring to lowercase for case-insensitive comparison
  let lowerSubStr = subStr.toLowerCase();
  // Return the index of the first occurrence of the substring in the main string, or -1 if not found
  return lowerStr.indexOf(lowerSubStr);
}

// Please do not change the code below
// Prompt the user to enter the first string
const s1 = prompt("Enter s1:");
// Prompt the user to enter the second string (substring to find)
const s2 = prompt("Enter s2:");
// Display the result of the indexOfIgnoreCase function as an alert
alert(indexOfIgnoreCase(s1, s2));
