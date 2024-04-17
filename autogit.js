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
const characterToCount = "l";
const result = countOccurrences(myString, characterToCount);
console.log(`The character "${characterToCount}" occurs ${result} times in the string "${myString}".`);
