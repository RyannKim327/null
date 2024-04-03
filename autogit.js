function longestCommonSubstring(str1, str2) {
    let dp = Array(str1.length + 1).fill(0).map(() => Array(str2.length + 1).fill(0));
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

    return str1.substring(endIndex - maxLength + 1, endIndex + 1);
}

// Example
const str1 = "abcdefg";
const str2 = "bcdefgh";
const commonSubstring = longestCommonSubstring(str1, str2);
console.log(commonSubstring); // Output: "cdef"
