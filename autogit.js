function longestCommonSubsequence(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  // Create a matrix to store the lengths of common subsequences
  const dp = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  // Fill the matrix based on the lengths of common subsequences
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Read the longest common subsequence from the matrix
  let lcs = '';
  let i = m;
  let j = n;
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

// Example usage
const str1 = 'ABCDGH';
const str2 = 'AEDFHR';
console.log(longestCommonSubsequence(str1, str2)); // Output: ADH
