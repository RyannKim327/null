function countOccurrences(string, word) {
    // Create a regular expression with word boundaries
    var regex = new RegExp("\\b" + word + "\\b", "gi");
    
    // Use the match() function to find all occurrences
    var matches = string.match(regex);
    
    // Return the count of occurrences
    return matches ? matches.length : 0;
}

// Example usage
var myString = "Hello world, hello universe!";
var wordToCount = "hello";
var count = countOccurrences(myString, wordToCount);
console.log(count);  // Output: 2
