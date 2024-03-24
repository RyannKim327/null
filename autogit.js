function longestCommonPrefix(strings) {
    if (strings.length === 0) {
        return "";
    }

    let prefix = "";
    let firstStr = strings[0];

    for (let i = 0; i < firstStr.length; i++) {
        for (let j = 1; j < strings.length; j++) {
            if (strings[j][i] !== firstStr[i]) {
                return prefix;
            }
        }
        prefix += firstStr[i];
    }

    return prefix;
}

const strings = ["apple", "appetizer", "application"];
console.log(longestCommonPrefix(strings)); // Output: "app"
