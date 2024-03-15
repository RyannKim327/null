function countOccurrences(str, word) {
    // Split the string by spaces to get an array of words
    const words = str.split(' ');

    // Initialize a variable to store the count
    let count = 0;

    // Loop through the words array and check if each word is equal to the target word
    words.forEach(function (w) {
        if (w.toLowerCase() === word.toLowerCase()) {
            count++;
        }
    });

    return count;
}

// Test the function
const sentence = "JavaScript is a popular programming language, and JavaScript is widely used.";
const word = "JavaScript";
const occurrences = countOccurrences(sentence, word);
console.log(`The word '${word}' appears ${occurrences} times in the sentence.`);
