function indexOfIgnoreCase(str, subStr) {
  let lowerStr = str.toLowerCase(); //hello world
  let lowerSubStr = subStr.toLowerCase();
  return lowerStr.indexOf(lowerSubStr);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
