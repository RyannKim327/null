function longestCommonPrefix(strings) {
    if (strings.length === 0) return "";
    
    let prefix = "";
    let firstStr = strings[0];
    
    for (let i = 0; i < firstStr.length; i++) {
        let char = firstStr[i];
        for (let j = 1; j < strings.length; j++) {
            if (strings[j][i] !== char) {
                return prefix;
            }
        }
        prefix += char;
    }
    
    return prefix;
}

// Example usage
let strings = ["flower", "flour", "flight"];
console.log(longestCommonPrefix(strings)); // Output: "fl"
