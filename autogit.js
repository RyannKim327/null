function longestCommonPrefix(strs) {
    if (strs.length === 0) return '';
    
    let prefix = '';
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];
        if (strs.some(str => str[i] !== char)) {
            break;
        }
        prefix += char;
    }
    
    return prefix;
}
const strings = ["flower", "flour", "florida"];
const commonPrefix = longestCommonPrefix(strings);
console.log(commonPrefix); // Output: "flo"
