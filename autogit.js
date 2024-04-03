function reverseWords(str) {
    // Split the string into an array of words
    let wordsArray = str.split(' ');

    // Reverse the array
    wordsArray.reverse();

    // Join the array back into a string
    let reversedString = wordsArray.join(' ');

    return reversedString;
}

// Example usage
let originalString = "Hello World JavaScript";
let reversedString = reverseWords(originalString);
console.log(reversedString); // Output: "JavaScript World Hello"
