function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return '';

    // Start with the first string as a reference
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        // Compare prefix with each string
        while (strs[i].indexOf(prefix) !== 0) {
            // Remove the last character of prefix until we find a match
            prefix = prefix.slice(0, prefix.length - 1);
            if (prefix === '') return '';
        }
    }
    return prefix;
}

// Example usage:
const strings = ['flower', 'flow', 'flight'];
console.log(longestCommonPrefix(strings)); // Output: "fl"
