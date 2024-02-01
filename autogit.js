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
const myString = "hello world";
const myChar = "l";
const occurrences = countOccurrences(myString, myChar);
console.log(occurrences); // Output: 3
function countOccurrences(str, char) {
    return str.split('').filter((c) => c === char).length;
}

// Example usage:
const myString = "hello world";
const myChar = "l";
const occurrences = countOccurrences(myString, myChar);
console.log(occurrences); // Output: 3
