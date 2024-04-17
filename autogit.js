function countOccurrences(str, word) {
    // Create a regular expression to match the word globally
    const regex = new RegExp("\\b" + word + "\\b", "g");
    
    // Use the match() method with the regular expression on the input string
    const matches = str.match(regex);
    
    // If matches is null, return 0, otherwise, return the length of the matches array
    return matches ? matches.length : 0;
}

// Test the function
const inputString = "apple orange banana apple banana apple";
const wordToCount = "apple";
const occurrences = countOccurrences(inputString, wordToCount);
console.log(`The word "${wordToCount}" appears ${occurrences} times in the input string.`);
