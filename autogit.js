function firstNonRepeatingCharacter(str) {
    // Create an object to store the count of each character
    var charCount = {};

    // Count the occurrences of each character in the string
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Loop through the string to find the first non-repeating character
    for (var j = 0; j < str.length; j++) {
        var char = str[j];
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // If no non-repeating character is found
}

// Test the function
var str = "hello world";
console.log(firstNonRepeatingCharacter(str)); // Output: "h"
