function longestCommonPrefix(strings) {
    if (strings.length === 0) return "";

    for (let i = 0; i < strings[0].length; i++) {
        for (let j = 1; j < strings.length; j++) {
            if (strings[j][i] !== strings[0][i]) {
                return strings[0].substring(0, i);
            }
        }
    }

    return strings[0];
}

// Example usage
const strings = ["flower", "flight", "flour"];
console.log(longestCommonPrefix(strings)); // Output: "fl"
