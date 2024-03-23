function reverseWords(str) {
    // Split the string into an array of words
    let wordsArray = str.split(' ');

    // Reverse the order of the array
    let reversedWordsArray = wordsArray.reverse();

    // Join the array back into a string
    let reversedStr = reversedWordsArray.join(' ');

    return reversedStr;
}

// Test the function
let str = "Hello World";
let reversedStr = reverseWords(str);
console.log(reversedStr); // Output: "World Hello"
