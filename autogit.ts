function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";

    // Start with the first string as the prefix
    let prefix = strs[0];

    // Compare the prefix with each string in the array
    for (let i = 1; i < strs.length; i++) {
        // While the current string does not start with the prefix
        while (strs[i].indexOf(prefix) !== 0) {
            // Reduce the prefix by one character from the end
            prefix = prefix.substring(0, prefix.length - 1);
            // If the prefix is empty, return it
            if (prefix === "") return "";
        }
    }

    return prefix;
}

// Example usage:
const strings = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strings)); // Output: "fl"
