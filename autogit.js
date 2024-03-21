function reverseWords(str) {
    // Split the string into an array of words
    let words = str.split(" ");

    // Reverse the array of words
    words = words.reverse();

    // Join the array back into a string
    let reversedStr = words.join(" ");

    return reversedStr;
}

// Test the function
let originalStr = "Hello world!";
let reversedStr = reverseWords(originalStr);
console.log(reversedStr); // Output: "world! Hello"
