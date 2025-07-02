function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];

    // Start with the first string as the initial prefix.
    let prefix = strs[0];

    // Compare the prefix with each string in the array.
    for (let i = 1; i < strs.length; i++) {
        // As long as the current prefix doesn't match the start of the current string,
        // we'll reduce the prefix.
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1); // Shorten the prefix by one character
            if (prefix === "") return ""; // If we've shortened it to nothing, return ""
        }
    }

    return prefix; // Return the longest common prefix found.
}

// Example usage:
const strings = ["flower", "flow", "flight"];
const commonPrefix = longestCommonPrefix(strings);
console.log(commonPrefix); // Output: "fl"
