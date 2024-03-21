function reverseWords(str) {
    // Split the string into an array of words
    var wordsArr = str.split(" ");

    // Reverse the array of words
    var reversedWordsArr = wordsArr.reverse();

    // Join the array of words back into a string
    var reversedStr = reversedWordsArr.join(" ");

    return reversedStr;
}

// Test the function
var originalStr = "Hello world!";
var reversedStr = reverseWords(originalStr);
console.log(reversedStr); // Output: "world! Hello"
