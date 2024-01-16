function countOccurrences(string, word) {
    // Split the string by spaces and store the resulting words in an array
    const wordsArray = string.split(' ');
  
    // Variable to store the count of occurrences
    let count = 0;
  
    // Loop through each word in the array and check if it matches the desired word
    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i].toLowerCase() === word.toLowerCase()) {
            count++;
        }
    }
  
    return count;
}

// Example usage
const sentence = 'JavaScript is a programming language. JavaScript is widely used.';
const wordToCount = 'JavaScript';
const occurrences = countOccurrences(sentence, wordToCount);
console.log(`The word "${wordToCount}" occurs ${occurrences} time(s) in the sentence.`);
