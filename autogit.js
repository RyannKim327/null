function reverseWords(str) {
    // Split the string into an array of words
    let words = str.split(" ");

    // Reverse the array
    words.reverse();

    // Join the array back into a string
    return words.join(" ");
}

// Example usage
let originalString = "Hello world from Assistant";
let reversedString = reverseWords(originalString);
console.log(reversedString); // Output: "Assistant from world Hello"
