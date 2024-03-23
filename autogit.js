function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";

    const shortest = strs.reduce((shortest, str) => str.length < shortest.length ? str : shortest, strs[0]);
    
    for (let i = 0; i < shortest.length; i++) {
        for (const str of strs) {
            if (str[i] !== shortest[i]) {
                return shortest.substring(0, i);
            }
        }
    }
    
    return shortest;
}

// Example usage
const strings = ["flower", "flow", "flight"];
const prefix = longestCommonPrefix(strings);
console.log(prefix); // Output: "fl"
