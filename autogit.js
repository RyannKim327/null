function findLongestCommonSubsequence(string1, string2) {
  const m = string1.length;
  const n = string2.length;
  const dp = [];

  // Initialize the dp matrix
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }

  // Compute the length of the longest common subsequence
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (string1[i - 1] === string2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Backtrack to find the actual subsequence
  let i = m;
  let j = n;
  const subsequence = [];
  while (i > 0 && j > 0) {
    if (string1[i - 1] === string2[j - 1]) {
      subsequence.push(string1[i - 1]);
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  // Reverse and return the subsequence
  return subsequence.reverse().join('');
}

// Usage example
const string1 = 'ABCDGH';
const string2 = 'AEDFHR';
const longestCommonSubsequence = findLongestCommonSubsequence(string1, string2);
console.log(longestCommonSubsequence); // Output: ADH
