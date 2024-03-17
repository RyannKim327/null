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
const str = "hello world";
const charToCount = "o";
const occurrences = countOccurrences(str, charToCount);

console.log(`"${charToCount}" appears ${occurrences} times in "${str}"`);
