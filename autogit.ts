function longestCommonSubsequence(a: string, b: string): string {
  const m = a.length;
  const n = b.length;

  // Create a 2D array (m+1) x (n+1) filled with zeros
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  // Fill the dp table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Reconstruct the LCS from the dp table
  let i = m, j = n;
  const lcs: string[] = [];

  while (i > 0 && j > 0) {
    if (a[i - 1] === b[j - 1]) {
      lcs.push(a[i - 1]);
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  // The sequence was built backwards, reverse it
  return lcs.reverse().join('');
}

// Example usage:
const str1 = "AGGTAB";
const str2 = "GXTXAYB";
console.log(longestCommonSubsequence(str1, str2));  // Output: "GTAB"
