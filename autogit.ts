function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";

    // Assume the first string is the common prefix initially
    let prefix = strs[0];

    // Compare the prefix with each string in the array
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            // Shorten the prefix by removing the last character
            prefix = prefix.substring(0, prefix.length - 1);
            // If there's no common prefix, return an empty string
            if (prefix === "") return "";
        }
    }

    return prefix;
}

// Example usage:
const strings = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strings)); // Output: "fl"
