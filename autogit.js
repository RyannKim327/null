function countOccurrences(text, word) {
    // Split the text into an array of words
    let wordsArray = text.split(/\s+/);
    
    // Initialize a counter for the word occurrences
    let count = 0;
    
    // Loop through the words array and count the occurrences of the specified word
    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i].toLowerCase() === word.toLowerCase()) {
            count++;
        }
    }
    
    return count;
}

// Sample string
let text = "Hello, Hello world! Hello, and hello again.";
let word = "hello";

// Count occurrences of the word in the string
let occurrences = countOccurrences(text, word);

console.log(`The word "${word}" occurs ${occurrences} times in the text.`);
