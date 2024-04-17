function longestCommonPrefix(strings) {
    if (strings.length === 0) return "";
    
    let prefix = "";
    for (let i = 0; i < strings[0].length; i++) {
        for (let j = 1; j < strings.length; j++) {
            if (strings[j][i] !== strings[0][i]) {
                return prefix;
            }
        }
        prefix += strings[0][i];
    }
  
    return prefix;
}

// Example usage
const strings = ["leetcode", "leet", "lee", "le"];
const result = longestCommonPrefix(strings);
console.log(result); // Output: "le"
