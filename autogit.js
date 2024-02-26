function countOccurrences(str, word) {
    // Split the string into an array of words
    let words = str.split(" ");
    
    // Initialize a counter to keep track of the occurrences
    let count = 0;
    
    // Iterate over the words array and count occurrences
    words.forEach(function (element) {
        if (element.toLowerCase() === word.toLowerCase()) {
            count++;
        }
    });
    
    return count;
}

// Example usage
let text = "Hello world, hello JavaScript, hello programming.";
let wordToCount = "hello";
let occurrences = countOccurrences(text, wordToCount);

console.log(`The word "${wordToCount}" occurs ${occurrences} times in the text.`);
