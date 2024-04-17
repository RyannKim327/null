function reverseWords(str) {
    // Split the string into an array of words
    let wordsArray = str.split(" ");
    
    // Reverse the array
    let reversedArray = wordsArray.reverse();
    
    // Join the reversed array back into a string
    let reversedStr = reversedArray.join(" ");
    
    return reversedStr;
}

// Example usage
let originalStr = "Hello world how are you";
let reversedStr = reverseWords(originalStr);
console.log(reversedStr); // Output: "you are how world Hello"
