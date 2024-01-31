function countOccurrences(string, character) {
  let count = 0;
  
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === character) {
      count++;
    }
  }
  
  return count;
}

// Example usage
const myString = "Hello, World!";
const characterToCount = "o";

const occurrenceCount = countOccurrences(myString, characterToCount);
console.log("Number of occurrences:", occurrenceCount);
