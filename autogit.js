function longestCommonPrefix(strings) {
    if (strings.length === 0) return "";

    let prefix = strings[0];

    for (let i = 1; i < strings.length; i++) {
        let j = 0;
        while (j < prefix.length && j < strings[i].length && prefix[j] === strings[i][j]) {
            j++;
        }
        prefix = prefix.slice(0, j);
        if (prefix === "") break;
    }

    return prefix;
}

// Example usage
const strings = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strings)); // Output: "fl"
