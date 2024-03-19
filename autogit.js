function reverseWords(str) {
    // Split the string into an array of words
    let wordsArray = str.split(" ");

    // Reverse the array of words
    let reversedWordsArray = wordsArray.reverse();

    // Join the array back into a string
    let reversedString = reversedWordsArray.join(" ");

    return reversedString;
}

// Test the function
let originalString = "Hello World!";
let reversedString = reverseWords(originalString);
console.log(reversedString); // Output: "World! Hello"
