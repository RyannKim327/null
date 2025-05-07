function longestCommonSubsequence(text1: string, text2: string): string {
  const m = text1.length;
  const n = text2.length;

  // dp[i][j] will store the length of LCS of text1[0..i-1] and text2[0..j-1]
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  // Build the dp array
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Reconstruct LCS from dp array
  let i = m, j = n;
  let lcs = '';

  while (i > 0 && j > 0) {
    if (text1[i - 1] === text2[j - 1]) {
      lcs = text1[i - 1] + lcs;
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

// Example usage:
const s1 = "ABCBDAB";
const s2 = "BDCABA";
console.log(longestCommonSubsequence(s1, s2)); // Output: "BCBA" or "BDAB"
