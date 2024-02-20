function reverseWords(str) {
    // Split the string into an array of words
    var words = str.split(" ");
    
    // Reverse the array
    var reversedWords = words.reverse();
    
    // Join the array back into a string
    var reversedStr = reversedWords.join(" ");
    
    return reversedStr;
}

// Example usage
var originalStr = "Hello World!";
var reversedStr = reverseWords(originalStr);

console.log(reversedStr); // Output: "World! Hello"
