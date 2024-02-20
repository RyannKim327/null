function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

// Example of counting occurrences of character 'a' in a string 'banana'
let string = 'banana';
let charToCount = 'a';
let occurrenceCount = countOccurrences(string, charToCount);

console.log(`The character '${charToCount}' appears ${occurrenceCount} time(s) in the string.`);
