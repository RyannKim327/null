function longestCommonPrefix(strs: string[]): string {
    // Check if the array is empty
    if (strs.length === 0) {
        return '';
    }

    // Start with the first string as the longest common prefix
    let prefix = strs[0];

    // Iterate through the strings
    for (let i = 1; i < strs.length; i++) {
        // While the current string does not start with the prefix
        while (strs[i].indexOf(prefix) !== 0) {
            // Reduce the prefix by one character
            prefix = prefix.substring(0, prefix.length - 1);
            // If prefix is empty, return early
            if (prefix === '') {
                return '';
            }
        }
    }

    return prefix;
}

// Example usage:
const strings = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strings)); // Output: "fl"
