function longestCommonSubstring(str1, str2) {
    let longest = 0;
    let result = '';

    const dp = Array.from(Array(str1.length + 1), () => Array(str2.length + 1).fill(0));

    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;

                if (dp[i][j] > longest) {
                    longest = dp[i][j];
                    result = str1.substring(i - longest, i);
                }
            }
        }
    }

    return result;
}

// Example
const str1 = "abcdef";
const str2 = "zxbcdf";
console.log(longestCommonSubstring(str1, str2)); // Output: "bcdf"
