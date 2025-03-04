function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) {
        return '';
    }
    
    // Take the first string as the reference
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        // Keep shortening the prefix until it matches the start of strs[i]
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === '') {
                return '';
            }
        }
    }

    return prefix;
}

// Example usage
const strings = ["flower", "flow", "flight"];
const result = longestCommonPrefix(strings);
console.log(result); // Output: "fl"
