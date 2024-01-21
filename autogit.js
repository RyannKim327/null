function countOccurrences(str, char) {
    // Initialize a counter variable
    let count = 0;

    // Iterate over each character in the string
    for (let i = 0; i < str.length; i++) {
        // Check if the current character matches the given character
        if (str.charAt(i) === char) {
            // If it does, increment the counter
            count++;
        }
    }

    // Return the total count
    return count;
}

// Example usage
const string = "Hello, world!";
const character = 'o';
const occurrenceCount = countOccurrences(string, character);
console.log(`The character '${character}' occurs ${occurrenceCount} times in the string '${string}'.`);
