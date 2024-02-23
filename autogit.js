function reverseWords(str) {
    // Split the string into an array of words
    let words = str.split(' ');

    // Reverse the array of words
    words.reverse();

    // Join the array of words back into a string
    let reversedStr = words.join(' ');

    return reversedStr;
}

// Usage
let originalStr = "Hello World";
let reversedStr = reverseWords(originalStr);
console.log(reversedStr); // Output: "World Hello"
