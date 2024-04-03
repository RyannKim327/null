function longestCommonSubsequence(str1, str2) {
    let m = str1.length;
    let n = str2.length;
    
    let dp = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => 0));
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    let lcs = '';
    let i = m, j = n;
    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            lcs = str1[i - 1] + lcs;
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }
    
    return lcs;
}

let str1 = 'ABCDGH';
let str2 = 'AEDFHR';
console.log(longestCommonSubsequence(str1, str2));
