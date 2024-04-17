function longestCommonPrefix(strs) {
    if (strs.length === 0) return '';

    let prefix = '';

    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];

        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== char) {
                return prefix;
            }
        }

        prefix += char;
    }

    return prefix;
}

// Example usage
const strings = ['flower', 'flow', 'flight'];
console.log(longestCommonPrefix(strings)); // Output: 'fl'
