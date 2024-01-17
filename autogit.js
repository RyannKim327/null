function findFirstRepeatedChar(str) {
    // Create an empty Set to keep track of seen characters
    var charsSet = new Set();

    // Iterate through each character in the string
    for (var i = 0; i < str.length; i++) {
        var char = str[i];

        // Check if the character has already been seen
        if (charsSet.has(char)) {
            return char; // Return the first repeated character
        }

        // Add the character to the set
        charsSet.add(char);
    }

    return null; // Return null if no repeated character is found
}

// Example usage
var inputString = "Hello World!";
var repeatedChar = findFirstRepeatedChar(inputString);
console.log("First repeated character: " + repeatedChar);
