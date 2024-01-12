function longestCommonSubsequence(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  // Create a matrix to store the lengths of longest common subsequences
  const dp = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  // Compute the lengths of longest common subsequences
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Construct the longest common subsequence
  let subsequence = '';
  let i = m;
  let j = n;
  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      subsequence = str1[i - 1] + subsequence;
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  return subsequence;
}

// Example usage:
const str1 = 'AGGTAB';
const str2 = 'GXTXAYB';

console.log(longestCommonSubsequence(str1, str2)); // Output: GTAB
