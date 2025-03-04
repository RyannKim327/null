function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];

    // Start with the first string as the initial prefix
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        // Compare the current string with the prefix
        while (strs[i].indexOf(prefix) !== 0) {
            // Reduce the length of the prefix by one character
            prefix = prefix.substring(0, prefix.length - 1);
            // If the prefix is empty, there is no common prefix
            if (prefix === "") return "";
        }
    }

    return prefix;
}

// Example usage:
const strings = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strings)); // Output: "fl"
