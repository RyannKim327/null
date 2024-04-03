function reverseWords(str) {
    // Split the string into an array of words
    const words = str.split(/\s+/);
    
    // Reverse the array of words
    const reversedWords = words.reverse();
    
    // Join the array back into a string
    const reversedStr = reversedWords.join(' ');
    
    return reversedStr;
}

// Example usage
const originalStr = "Hello World!";
const reversedStr = reverseWords(originalStr);
console.log(reversedStr); // Output: "World! Hello"
