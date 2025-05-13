function stringChop(str, size) {
  if (!str) return [];
  let chunks = [];
  for (let i = 0; i < str.length; i = i + size) {
    let subStr = str.slice(i, i + size);
    chunks.push(subStr);
  }
  return chunks;
}

console.log(stringChop("Hello, world!", 5));

// // Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
