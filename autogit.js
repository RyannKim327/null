function longestCommonPrefix(strs) {
    if (strs.length === 0) return '';

    // Find the shortest string in the array
    let minLen = Math.min(...strs.map(str => str.length));
    
    // Iterate through each character of the shortest string
    for (let i = 0; i < minLen; i++) {
        // Check if all strings have the same character at index i
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== strs[0][i]) {
               return strs[0].substring(0, i);
            }
        }
    }
    
    // If all characters match up to the length of the shortest string, return the shortest string
    return strs[0].substring(0, minLen);
}

// Example
const strings = ['flower', 'flow', 'flight'];
const result = longestCommonPrefix(strings);
console.log(result); // Output: 'fl'
