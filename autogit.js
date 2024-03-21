function reverseWords(str) {
    // Split the string into an array of words
    var words = str.split(' ');
    
    // Reverse the array of words
    var reversedWords = words.reverse();
    
    // Join the array back into a string
    var reversedString = reversedWords.join(' ');

    return reversedString;
}

// Example usage
var originalString = "Hello World";
var reversedString = reverseWords(originalString);
console.log(reversedString);  // Output: "World Hello"
