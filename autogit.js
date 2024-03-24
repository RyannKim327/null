function countCharOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

// Test the function
const text = "hello world";
const charToCount = "o";
const occurrences = countCharOccurrences(text, charToCount);
console.log(`The character '${charToCount}' occurs ${occurrences} times in the text.`);
