function countCharacter(str, char) {
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count++;
        }
    }
    
    return count;
}

// Example usage
const str = "hello world";
const charToCount = 'o';
const occurrences = countCharacter(str, charToCount);
console.log(`Number of occurrences of '${charToCount}' in '${str}': ${occurrences}`);
