function reverseWords(str) {
    // Split the string into an array of words
    let words = str.split(" ");
    
    // Reverse the array
    let reversedWords = words.reverse();
    
    // Join the reversed array back into a string
    let reversedStr = reversedWords.join(" ");
    
    return reversedStr;
}

// Test the function
let originalStr = "Hello World How Are You";
let reversedStr = reverseWords(originalStr);

console.log(reversedStr); // Output: "You Are How World Hello"
