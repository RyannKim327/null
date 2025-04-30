function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";

    // Start with the first string as the initial prefix
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        // Compare the prefix with the next string
        while (strs[i].indexOf(prefix) !== 0) {
            // If the prefix is not found at the start,
            // shorten the prefix by one character from the end
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return ""; // No common prefix found
        }
    }

    return prefix; // Return the longest common prefix
}

// Example usage
const strings = ["flower", "flow", "flight"];
const commonPrefix = longestCommonPrefix(strings);
console.log(commonPrefix); // Output: "fl"
