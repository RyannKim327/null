function longestCommonPrefix(strings) {
    if (strings.length === 0) {
        return '';
    }

    // Sort the array of strings so that the shortest string is first
    strings.sort((a, b) => a.length - b.length);

    // Get the first string as the reference for comparison
    const reference = strings[0];

    // Iterate over the characters of the reference string
    for (let i = 0; i < reference.length; i++) {
        // Check if the character at the current position matches in all strings
        for (let j = 1; j < strings.length; j++) {
            if (reference[i] !== strings[j][i]) {
                // Return the prefix up to the current position if no match is found
                return reference.slice(0, i);
            }
        }
    }

    // Return the full reference string if all characters match
    return reference;
}

// Example usage
const strings = ['flower', 'flour', 'flow'];
const prefix = longestCommonPrefix(strings);
console.log(prefix); // Output: 'fl'
