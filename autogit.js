function longestCommonSubstring(s1, s2) {
    const m = s1.length;
    const n = s2.length;
    
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    
    let maxLen = 0;
    let endIndex = 0;
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > maxLen) {
                    maxLen = dp[i][j];
                    endIndex = i - 1;
                }
            }
        }
    }
    
    return s1.substring(endIndex - maxLen + 1, endIndex + 1);
}

// Example usage
const s1 = "abcdef";
const s2 = "bcdeft";
console.log(longestCommonSubstring(s1, s2)); // Output: "cdef"
