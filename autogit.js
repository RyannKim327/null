function countOccurrences(str, word) {
    // Split the input string by spaces to get an array of words
    let wordsArr = str.split(' ');

    // Use the filter method to create a new array with only the occurrences of the word
    let filteredWords = wordsArr.filter(function (w) {
        return w.toLowerCase() === word.toLowerCase();
    });

    // Return the length of the filtered array, which is the number of occurrences of the word
    return filteredWords.length;
}

// Test the function
let str = "JavaScript is a powerful programming language. JavaScript is used for web development.";
let word = "JavaScript";
let occurrences = countOccurrences(str, word);
console.log(`The word "${word}" appears ${occurrences} times in the string.`);
