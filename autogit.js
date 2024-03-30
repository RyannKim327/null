function countOccurrences(str, char) {
  let count = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  
  return count;
}

// Example usage
let myString = "Hello, World!";
let charToCount = "o";
let occurrences = countOccurrences(myString, charToCount);

console.log(`'${charToCount}' occurs ${occurrences} times in '${myString}'`);
