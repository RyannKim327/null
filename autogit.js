function longestCommonSubstring(str1, str2) {
    const dp = Array(str1.length + 1).fill(0).map(() => Array(str2.length + 1).fill(0));
    let maxLength = 0;
    let endPosStr1 = 0;

    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;

                if (dp[i][j] > maxLength) {
                    maxLength = dp[i][j];
                    endPosStr1 = i - 1;
                }
            } else {
                dp[i][j] = 0;
            }
        }
    }

    if (maxLength === 0) {
        return "";
    }

    return str1.substring(endPosStr1 - maxLength + 1, endPosStr1 + 1);
}

// Example usage
const str1 = "programming";
const str2 = "programmer";

const result = longestCommonSubstring(str1, str2);
console.log(result); // Output: "program"
