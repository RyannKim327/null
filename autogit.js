function reverseWords(str) {
    // Split the string into an array of words
    let words = str.split(' ');

    // Reverse the array of words
    let reversedWords = words.reverse();

    // Join the reversed array back into a string
    let reversedStr = reversedWords.join(' ');

    return reversedStr;
}

// Example usage
let originalStr = "Hello World";
let reversedStr = reverseWords(originalStr);
console.log(reversedStr); // Output: "World Hello"
