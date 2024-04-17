function reverseWords(str) {
    // split the string into an array of words
    let words = str.split(' ');
    
    // reverse the array
    let reversedWords = words.reverse();
    
    // join the array back into a string
    let reversedStr = reversedWords.join(' ');
    
    return reversedStr;
}

// Test the function
let str = "Hello World!";
let reversedStr = reverseWords(str);
console.log(reversedStr); // Output: "World! Hello"
