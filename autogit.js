function reverseWords(str) {
    // Split the string into words
    let words = str.split(' ');

    // Reverse the array of words
    let reversedWords = words.reverse();

    // Join the reversed array of words back into a string
    let reversedStr = reversedWords.join(' ');

    return reversedStr;
}

// Example usage
let originalStr = "Hello world!";
let reversedStr = reverseWords(originalStr);
console.log(reversedStr); // Output: "world! Hello"
