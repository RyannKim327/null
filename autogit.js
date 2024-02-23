function longestCommonPrefix(strings) {
    if (strings.length === 0) {
        return "";
    }
    
    const sortedStrings = strings.slice().sort();
    const firstString = sortedStrings[0];
    const lastString = sortedStrings[sortedStrings.length - 1];
    let i = 0;
    
    while (i < firstString.length && firstString[i] === lastString[i]) {
        i++;
    }
    
    return firstString.substring(0, i);
}

// Example
const strings = ["flower", "flow", "flight"];
const result = longestCommonPrefix(strings);
console.log(result); // Output: "fl"
