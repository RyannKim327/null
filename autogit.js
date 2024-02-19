function countOccurrences(text, word) {
    // Split the text into an array of words
    let words = text.split(' ');

    // Initialize a count variable to store the number of occurrences
    let count = 0;

    // Loop through each word in the array and check if it matches the word
    words.forEach(function (term) {
        if (term.toLowerCase() === word.toLowerCase()) {
            count++;
        }
    });

    return count;
}

// Test the function
const text = "Hello world, hello world!";
const word = "hello";
const occurrences = countOccurrences(text, word);
console.log(`The word "${word}" occurs ${occurrences} times in the text.`);
