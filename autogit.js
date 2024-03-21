function longestCommonPrefix(strs) {
    if (!strs || strs.length === 0) {
        return "";
    }

    const prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) { // Continue until the prefix is the start of each string
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") {
                return "";
            }
        }
    }

    return prefix;
}

// Test the function
const strings = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strings)); // Output: "fl"
