function firstNonRepeatingChar(str) {
    // Create an empty object to store characters and their counts
    var charCount = {};

    // Iterate through the string and count the occurrences of each character
    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }

    // Iterate through the string again and return the first character with count 1
    for (var j = 0; j < str.length; j++) {
        var char = str.charAt(j);

        // If the count of the character is 1, it is the first non-repeating character
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeating character is found, return null or any default value based on your requirement
    return null;
}

// Example usage
var str = "aabbcde";
var firstNonRepeating = firstNonRepeatingChar(str);
console.log(firstNonRepeating); // Output: "c"
