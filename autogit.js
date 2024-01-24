function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count++;
        }
    }
    return count;
}

// Example usage
const myString = "Hello, World!";
const charToCount = "o";
const occurrences = countOccurrences(myString, charToCount);
console.log(occurrences); // Output: 2
function countOccurrences(str, char) {
    const charArray = str.split(char);
    return charArray.length - 1;
}

// Example usage
const myString = "Hello, World!";
const charToCount = "o";
const occurrences = countOccurrences(myString, charToCount);
console.log(occurrences); // Output: 2
function countOccurrences(str, char) {
    const regex = new RegExp(char, 'g');
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}

// Example usage
const myString = "Hello, World!";
const charToCount = "o";
const occurrences = countOccurrences(myString, charToCount);
console.log(occurrences); // Output: 2
