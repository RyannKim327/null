function countOccurrences(str, word) {
    // Use a regular expression to match the word globally in the string
    let regex = new RegExp(word, 'g');
    // Use the match() method to find all occurrences of the word in the string
    let matches = str.match(regex);
    // If matches is null, return 0, otherwise return the length of the matches array
    return matches ? matches.length : 0;
}

// Test the function with an example string and word
let str = "The quick brown fox jumps over the lazy dog. The quick brown fox is quick.";
let word = "quick";
let count = countOccurrences(str, word);
console.log(`The word "${word}" occurs ${count} time(s) in the string.`);
