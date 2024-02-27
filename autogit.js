function longestCommonSubstring(str1, str2) {
    const dp = Array.from({ length: str1.length + 1 }, () => Array.from({ length: str2.length + 1 }, () => 0));
    let maxLength = 0;
    let endIndex = 0;

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

    if (maxLength === 0) {
        return "";
    }

    return str1.slice(endIndex - maxLength + 1, endIndex + 1);
}

// Example usage
const str1 = "abcdxyz";
const str2 = "xyzabcd";
console.log(longestCommonSubstring(str1, str2)); // Output: "abcd"
