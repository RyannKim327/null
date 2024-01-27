function longestCommonPrefix(strings) {
    if (strings.length === 0) {
        return "";
    }
    
    let prefix = strings[0];
    
    for (let i = 1; i < strings.length; i++) {
        for (let j = 0; j < prefix.length; j++) {
            if (prefix[j] !== strings[i][j] || prefix === "") {
                return prefix;
            }
        }
    }
    
    return prefix;
}
const strings = ["apple", "application", "app"];
const commonPrefix = longestCommonPrefix(strings);
console.log(commonPrefix);  // Output: "app"
