function countOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count++;
    }
  }
  return count;
}

// Example usage:
const myString = "Hello World!";
const myChar = "o";
const occurrences = countOccurrences(myString, myChar);
console.log(`The character '${myChar}' occurs ${occurrences} times in the string.`);
