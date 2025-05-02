function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";

    // Find the shortest string
    let shortest = strs.reduce((a, b) => a.length <= b.length ? a : b);

    for (let i = 0; i < shortest.length; i++) {
        const char = shortest[i];
        for (let str of strs) {
            if (str[i] !== char) {
                // Mismatch found, return prefix up to this point
                return shortest.substring(0, i);
            }
        }
    }

    // If no mismatch, the entire shortest string is the prefix
    return shortest;
}

// Example usage:
const input = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(input));  // Output: "fl"
