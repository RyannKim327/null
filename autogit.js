function longestCommonSubsequence(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  // Create a 2D array to store the lengths of LCS
  const dp = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  // Building the LCS matrix
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1.charAt(i - 1) === str2.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }

  // Reconstructing the LCS from the matrix
  let lcs = "";
  let i = m;
  let j = n;
  while (i > 0 && j > 0) {
    if (str1.charAt(i - 1) === str2.charAt(j - 1)) {
      lcs = str1.charAt(i - 1) + lcs;
      i--;
      j--;
    } else if (dp[i][j - 1] > dp[i - 1][j]) {
      j--;
    } else {
      i--;
    }
  }

  return lcs;
}

// Example usage
const str1 = "ABCDGH";
const str2 = "AEDFHR";
const result = longestCommonSubsequence(str1, str2);
console.log(result); // Output: ADH
