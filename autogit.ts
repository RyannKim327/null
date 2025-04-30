function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            // Reduce the prefix by one character until it matches
            prefix = prefix.slice(0, prefix.length - 1);
            if (prefix === "") return ""; // No common prefix
        }
    }
    return prefix;
}

// Example usage:
const strings = ["flower", "flow", "flight"];
const result = longestCommonPrefix(strings);
console.log(result); // Output: "fl"
