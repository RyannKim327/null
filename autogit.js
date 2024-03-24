function reverseWords(str) {
    // Split the string into an array of words
    let wordsArray = str.split(" ");
    
    // Reverse the order of the array
    wordsArray = wordsArray.reverse();
    
    // Join the array back into a string
    let reversedStr = wordsArray.join(" ");
    
    return reversedStr;
}

// Test the function
let originalStr = "Hello world, how are you?";
let reversedStr = reverseWords(originalStr);
console.log(reversedStr); // Output: "you? are how world, Hello"
