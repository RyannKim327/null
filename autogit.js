function countOccurrences(str, word) {
    // Use regex to split the string by spaces or punctuation marks
    const wordsArray = str.split(/\s+|[,;.!?]/);
    
    // Use filter to get only the occurrences of the specific word
    const occurrences = wordsArray.filter(w => w.toLowerCase() === word.toLowerCase());

    // Return the length of the filtered array
    return occurrences.length;
}

// Usage example
const str = "How much wood would a woodchuck chuck if a woodchuck could chuck wood?";
const word = "wood";
const occurrences = countOccurrences(str, word);
console.log(`The word "${word}" occurs ${occurrences} times in the string.`);
