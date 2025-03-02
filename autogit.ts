function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";

    // Start with the first string as the initial prefix
    let prefix = strs[0];

    // Iterate through the other strings
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            // Reduce prefix by removing the last character
            prefix = prefix.substring(0, prefix.length - 1);
            // If there is no prefix left, return an empty string
            if (prefix === "") return "";
        }
    }

    return prefix;
}

// Example usage
const strings = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strings)); // Output: "fl"
