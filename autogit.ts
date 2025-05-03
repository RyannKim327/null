function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) {
        return '';
    }

    // Start with the first string as a potential prefix
    let prefix = strs[0];

    // Compare it with the other strings
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            // Reduce the prefix length by one until it matches
            prefix = prefix.substring(0, prefix.length - 1);
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
