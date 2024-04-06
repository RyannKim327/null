function longestCommonSubstring(str1, str2) {
    let maxLength = 0;
    let endIndex = 0;

    const dp = Array(str1.length + 1).fill(0).map(() => Array(str2.length + 1).fill(0));

    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > maxLength) {
                    maxLength = dp[i][j];
                    endIndex = i - 1;
                }
            } else {
                dp[i][j] = 0;
            }
        }
    }

    return str1.substr(endIndex - maxLength + 1, maxLength);
}

// Example usage
const str1 = 'abcdef';
const str2 = 'bcdeft';
const longestSubstring = longestCommonSubstring(str1, str2);
console.log(longestSubstring); // Output: "cde"
