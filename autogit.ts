function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return ""; // Handle empty array case
    if (strs.length === 1) return strs[0]; // Handle single string case

    let prefix = strs[0]; // Start with the first string as the prefix

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) { // While the prefix is not found at start of strs[i]
            prefix = prefix.slice(0, prefix.length - 1); // Reduce the prefix by one character
            if (prefix === "") return ""; // If the prefix becomes empty, no common prefix exists
        }
    }
    return prefix; // Return the longest common prefix found
}

// Example usage:
const strings = ["flower", "flow", "flight"];
const result = longestCommonPrefix(strings);
console.log(result); // Outputs: "fl"
