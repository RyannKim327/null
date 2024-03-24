function countOccurrence(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count++;
        }
    }
    return count;
}

// Example Usage
let myString = "hello world";
let charToCount = "l";
let result = countOccurrence(myString, charToCount);
console.log(`The character "${charToCount}" occurs ${result} times in the string.`);
