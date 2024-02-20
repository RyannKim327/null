function longestCommonPrefix(strs) {
    if (strs.length === 0) return '';
    
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== strs[0][i]) {
                return strs[0].slice(0, i);
            }
        }
    }
    
    return strs[0];
}

// Example
let strings = ['flower', 'flow', 'flight'];
console.log(longestCommonPrefix(strings)); // Output: "fl"
