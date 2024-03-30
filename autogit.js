function countOccurrences(str, word) {
    return str.split(word).length - 1;
}

// Example usage
const text = "How much wood would a woodchuck chuck if a woodchuck could chuck wood?";
const word = "wood";
const result = countOccurrences(text, word);
console.log(`The word "${word}" appears ${result} times in the text.`);
