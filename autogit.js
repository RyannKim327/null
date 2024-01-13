function longestCommonSubstring(str1, str2) {
    let m = str1.length;
    let n = str2.length;
    let maxLength = 0; // Length of longest common substring
    let endIndex = 0; // End index of longest common substring in str1

    // Create a table to store the lengths of common suffixes of str1 and str2
    let table = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                table[i][j] = table[i - 1][j - 1] + 1;
                if (table[i][j] > maxLength) {
                    maxLength = table[i][j];
                    endIndex = i - 1;
                }
            } else {
                table[i][j] = 0;
            }
        }
    }

    // Extract the longest common substring from str1 based on the endIndex
    if (maxLength > 0) {
        return str1.substring(endIndex - maxLength + 1, endIndex + 1);
    } else {
        return "";
    }
}

// Example usage
console.log(longestCommonSubstring("abcdefg", "xyzefg")); // Output: "efg"
