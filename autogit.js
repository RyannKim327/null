function longestCommonSubstring(str1, str2) {
    const m = str1.length;
    const n = str2.length;

    // Create a 2D array to store the substrings
    const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

    let maxLength = 0; // Length of the longest common substring
    let endIndex = 0; // Ending index of the longest common substring

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > maxLength) {
                    maxLength = dp[i][j];
                    endIndex = i - 1; // Update the ending index
                }
            }
        }
    }

    // Extract the longest common substring based on the ending index and maxLength
    const longestSubstring = str1.slice(endIndex - maxLength + 1, endIndex + 1);
    return longestSubstring;
}

// Example usage:
const str1 = "abcdefg";
const str2 = "defghij";
const result = longestCommonSubstring(str1, str2);
console.log(result); // Output: "def"
