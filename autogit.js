function countOccurrences(str, word) {
    // Use regex to split the string by non-word characters and filter out empty strings
    const wordsArray = str.split(/\b\W+\b/).filter(Boolean);

    // Use the filter method to filter out the words that match the target word
    const matchingWords = wordsArray.filter((w) => w.toLowerCase() === word.toLowerCase());

    return matchingWords.length;
}

const text = "Hello world. This is a sample text with word occurrences. Word word word.";
const wordToCount = "word";
const occurrences = countOccurrences(text, wordToCount);

console.log(`The word "${wordToCount}" occurs ${occurrences} times in the text.`);
