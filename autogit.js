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
const myString = "hello world";
const character = "l";
const occurrences = countOccurrences(myString, character);

console.log(`The character "${character}" occurs ${occurrences} times in the string.`);
