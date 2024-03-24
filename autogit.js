function reverseWords(str) {
    // Split the string into an array of words
    var wordsArray = str.split(" ");
    
    // Reverse the array
    wordsArray.reverse();
    
    // Join the array back into a string
    var reversedStr = wordsArray.join(" ");
    
    return reversedStr;
}

// Test the function
var originalStr = "Hello World";
var reversedStr = reverseWords(originalStr);
console.log(reversedStr); // Output: "World Hello"
