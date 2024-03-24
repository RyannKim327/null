function longestCommonSubstring(str1, str2) {
    const dp = Array(str1.length + 1).fill().map(() => Array(str2.length + 1).fill(0));
    let maxLen = 0;
    let endIndex = 0;

    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > maxLen) {
                    maxLen = dp[i][j];
                    endIndex = i - 1;
                }
            } else {
                dp[i][j] = 0;
            }
        }
    }

    if (maxLen === 0) {
        return "";
    }

    return str1.slice(endIndex - maxLen + 1, endIndex + 1);
}

const str1 = "abcdef";
const str2 = "xbcdeft";

console.log(longestCommonSubstring(str1, str2)); // Output: "bcd"
