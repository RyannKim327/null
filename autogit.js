function reverseWords(str) {
    // Split the string into an array of words
    let words = str.split(' ');

    // Reverse the array
    let reversedWords = words.reverse();

    // Join the array back into a string
    let reversedStr = reversedWords.join(' ');

    return reversedStr;
}

// Example usage
let originalString = "Hello World!";
let reversedString = reverseWords(originalString);
console.log(reversedString); // Output: "World! Hello"
