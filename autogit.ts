function longestCommonSubsequence(s1: string, s2: string): string {
    const m = s1.length;
    const n = s2.length;

    // dp[i][j] will hold the length of LCS of s1[0..i-1] and s2[0..j-1]
    const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Fill dp table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Build the LCS string by backtracking through dp
    let i = m, j = n;
    const lcsChars = [];
    while (i > 0 && j > 0) {
        if (s1[i - 1] === s2[j - 1]) {
            lcsChars.push(s1[i - 1]);
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }

    return lcsChars.reverse().join('');
}
