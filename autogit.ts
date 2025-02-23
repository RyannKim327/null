function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];

    // Sort strings
    strs.sort();
    const first = strs[0];
    const last = strs[strs.length - 1];
    let i = 0;

    // Compare characters of first and last string
    while (i < first.length && first[i] === last[i]) {
        i++;
    }

    // Return the longest common prefix
    return first.slice(0, i);
}

// Example usage
const strings = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strings)); // Output: "fl"
