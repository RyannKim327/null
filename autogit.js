function longestCommonPrefix(strs) {
    if (strs.length === 0) return '';

    // Find the minimum length string in the array
    let minLen = Math.min(...strs.map(str => str.length));
    
    // Iterate through all characters of the first string
    for (let i = 0; i < minLen; i++) {
        const char = strs[0][i];
        
        // Check if the character is the same in all strings
        if (strs.some(str => str[i] !== char)) {
            return strs[0].substring(0, i);
        }
    }
    
    return strs[0].substring(0, minLen);
}

// Test the function
const strings = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strings)); // Output: "fl"
