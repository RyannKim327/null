function longestCommonSubsequence(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    
    const dp = [];
    for (let i = 0; i <= m; i++) {
        dp[i] = [];
        for (let j = 0; j <= n; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0;
            } else if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    let index = dp[m][n];
    let lcs = Array(index);
    let i = m, j = n;
    
    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            lcs[index - 1] = str1[i - 1];
            i--;
            j--;
            index--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }
    
    return lcs.join('');
}

const str1 = 'AGGTAB';
const str2 = 'GXTXAYB';

const result = longestCommonSubsequence(str1, str2);
console.log(result); // Output: GTAB
