function countOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

const myString = "Hello, world!";
const myChar = "l";
console.log(countOccurrences(myString, myChar)); // Output: 3
function countOccurrences(str, char) {
  const regex = new RegExp(char, "g");
  const matches = str.match(regex);
  return matches ? matches.length : 0;
}

const myString = "Hello, world!";
const myChar = "l";
console.log(countOccurrences(myString, myChar)); // Output: 3
