function countOccurrences(inputString, word) {
    // Using a regular expression to match the word globally (g) and case insensitive (i)
    const regex = new RegExp('\\b' + word + '\\b', 'gi');
    
    // Using match() method to get an array of all matches
    const matches = inputString.match(regex);
    
    // Counting the number of matches
    const count = matches ? matches.length : 0;

    return count;
}

const inputString = 'Hello, hello, HELLO, World!';
const word = 'hello';
const occurrences = countOccurrences(inputString, word);

console.log(`The word "${word}" occurs ${occurrences} times in the string.`);
