function countOccurrences(str, word) {
    let count = 0;
    let words = str.split(' ');
    
    for (let i = 0; i < words.length; i++) {
        if (words[i].toLowerCase() === word.toLowerCase()) {
            count++;
        }
    }
    
    return count;
}

// Example usage
let sentence = "JavaScript is a powerful and flexible programming language. JavaScript is widely used in web development.";
let wordToCount = "JavaScript";
let occurrences = countOccurrences(sentence, wordToCount);

console.log("Number of occurrences of '" + wordToCount + "': " + occurrences);
