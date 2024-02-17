function firstNonRepeatingCharacter(str) {
    // Initialize an empty object to store character counts
    var charCount = {};

    // Iterate over the characters in the string and count how many times each character appears
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Find the first character that appears only once
    for (var j = 0; j < str.length; j++) {
        var char = str[j];
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeating character is found, return null
    return null;
}

// Test the function
var inputString = "hello";
var firstNonRepeatingChar = firstNonRepeatingCharacter(inputString);
console.log("First non-repeating character: " + firstNonRepeatingChar);
