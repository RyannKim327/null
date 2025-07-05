function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";

    // Sort the array
    strs.sort();

    // Get the first and last string
    const first = strs[0];
    const last = strs[strs.length - 1];
    let i = 0;

    // Compare characters until they differ
    while (i < first.length && i < last.length && first[i] === last[i]) {
        i++;
    }

    // Return the common prefix
    return first.substring(0, i);
}

// Example usage:
const strings = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strings)); // Output: "fl"
