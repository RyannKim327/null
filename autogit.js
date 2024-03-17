function reverseWords(str) {
    // Split the string into an array of words
    let wordsArray = str.split(' ');

    // Reverse the array
    let reversedArray = wordsArray.reverse();

    // Join the words back together into a single string
    let reversedString = reversedArray.join(' ');

    return reversedString;
}

// Example usage
let originalString = "Hello World How Are You";
let reversedString = reverseWords(originalString);

console.log(reversedString); // Output: "You Are How World Hello"
