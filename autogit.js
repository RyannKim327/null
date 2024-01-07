function reverseWords(string) {
    var wordsArray = string.split(' ');  // Step 1
    var reversedArray = wordsArray.reverse();  // Step 2
    var reversedString = reversedArray.join(' ');  // Step 3
    return reversedString;
}

// Example usage
var originalString = "Hello, world!";
var reversedString = reverseWords(originalString);
console.log(reversedString);  // Output: "world! Hello,"
