function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

let inputString = "hello world";
let characterToCount = "l";
let occurrences = countOccurrences(inputString, characterToCount);

console.log(`The character '${characterToCount}' appears ${occurrences} times in the string.`);
