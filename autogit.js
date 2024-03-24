function countOccurrences(str, word) {
    // Split the string by the word
    var words = str.split(word);
    
    // Calculate the number of occurrences
    var count = words.length - 1;
    
    return count;
}

// Test the function
var str = "apple banana orange apple kiwi apple";
var word = "apple";
var occurrences = countOccurrences(str, word);
console.log("Number of occurrences of '" + word + "': " + occurrences);
