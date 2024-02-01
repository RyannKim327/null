function countOccurrences(string, word) {
    // Use regular expression with 'g' flag to perform a global search
    var regex = new RegExp(word, 'g');
    
    // Use the `match()` method to find all matches
    var matches = string.match(regex);

    // Return the count of matches
    return matches ? matches.length : 0;
}

// Example usage:
var str = 'How much wood would a woodchuck chuck if a woodchuck could chuck wood?';
var word = 'wood';

console.log(countOccurrences(str, word)); // Output: 2
