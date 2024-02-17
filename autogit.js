function reverseWords(str) {
    // Split the string into an array of words
    let wordsArray = str.split(" ");

    // Reverse the array of words
    let reversedArray = wordsArray.reverse();

    // Join the array back into a string
    let reversedString = reversedArray.join(" ");

    return reversedString;
}

// Test the function
let inputString = "Hello World!";
let reversedString = reverseWords(inputString);
console.log(reversedString); // Output: "World! Hello"
