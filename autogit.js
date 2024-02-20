function reverseWords(str) {
    // Split the string into an array of words
    let words = str.split(" ");

    // Reverse the order of the array
    words = words.reverse();

    // Join the array back into a string
    let reversedString = words.join(" ");

    return reversedString;
}

// Test the function
let originalString = "Hello world!";
let reversedString = reverseWords(originalString);
console.log(reversedString); // Output: "world! Hello"
