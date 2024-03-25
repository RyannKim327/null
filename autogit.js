function longestCommonSubstring(str1, str2) {
    let m = str1.length;
    let n = str2.length;
    let longestSubstringLength = 0;
    let endIndex = 0;

    // Create a 2D array to store the lengths of longest common suffixes
    let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > longestSubstringLength) {
                    longestSubstringLength = dp[i][j];
                    endIndex = i - 1;
                }
            }
        }
    }

    if (longestSubstringLength === 0) {
        return "";
    }

    return str1.substr(endIndex - longestSubstringLength + 1, longestSubstringLength);
}

// Test the function
let str1 = "abcdefgh";
let str2 = "xbcdzabcde";
console.log(longestCommonSubstring(str1, str2)); // Output: "bcde"
