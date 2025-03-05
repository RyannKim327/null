function longestCommonPrefix(strs: string[]): string {
    // If the array is empty, return an empty string
    if (strs.length === 0) {
        return "";
    }

    // Assume the first string is the longest common prefix initially
    let prefix = strs[0];

    // Loop through all strings in the array starting from the second string
    for (let i = 1; i < strs.length; i++) {
        // Update the prefix until it matches the start of the current string
        while (strs[i].indexOf(prefix) !== 0) {
            // Reduce the prefix by removing the last character
            prefix = prefix.slice(0, -1);
            // If there is no common prefix
            if (prefix === "") {
                return "";
            }
        }
    }

    return prefix;
}

// Example usage:
const strings = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strings)); // Output: "fl"
