function longestCommonPrefix(strings) {
    if (!strings || strings.length === 0) {
        return "";
    }

    // Find the minimum length string in the array
    const minLength = Math.min(...strings.map(str => str.length));

    let prefix = "";
    for (let i = 0; i < minLength; i++) {
        const char = strings[0][i]; // Get the character at the current position

        // Check if all strings have the same character at the current position
        if (strings.every(str => str[i] === char)) {
            prefix += char;
        } else {
            break; // Exit the loop if there is a mismatch
        }
    }

    return prefix;
}

const strings = ["flower", "flour", "fleet"];
console.log(longestCommonPrefix(strings)); // Output: "fl"
