function countOccurrences(sentence, word) {
    // Split the sentence into an array of words
    var words = sentence.split(" ");
    
    // Initialize a counter to keep track of the occurrences
    var count = 0;
    
    // Iterate over the array of words
    for (var i = 0; i < words.length; i++) {
        // Check if the word matches the current word in the array
        if (words[i].toLowerCase() === word.toLowerCase()) {
            count++;
        }
    }
    
    // Return the count of occurrences
    return count;
}

// Test the function
var sentence = "How much wood would a woodchuck chuck if a woodchuck could chuck wood";
var word = "wood";
var occurrences = countOccurrences(sentence, word);
console.log("The word '" + word + "' occurs " + occurrences + " times in the sentence.");
