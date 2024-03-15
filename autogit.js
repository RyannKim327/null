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
const str = "Hello, World!";
const charToCount = "l";
const occurrences = countOccurrences(str, charToCount);

console.log(`The character '${charToCount}' occurs ${occurrences} time(s) in the string '${str}'.`);
