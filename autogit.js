function countOccurrences(str, word) {
    // Split the string by the word
    var wordsArray = str.split(word);
    
    // Count the number of occurrences of the word
    return wordsArray.length - 1;
}

// Usage example
var text = "The quick brown fox jumps over the lazy dog. The dog barks loudly.";
var wordToCount = "the";
var count = countOccurrences(text.toLowerCase(), wordToCount.toLowerCase());

console.log(`${wordToCount} occurs ${count} times in the text.`);
