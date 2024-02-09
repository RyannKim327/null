function longestCommonSubsequence(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  
  // Create a 2D array of size (m+1)x(n+1) and initialize it with zeros
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  
  // Fill the dp array
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }
  
  // Backtrack to find the longest common subsequence
  let lcs = '';
  let i = m, j = n;
  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      lcs = str1[i - 1] + lcs;
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

// Example usage:
const str1 = 'ABCDGH';
const str2 = 'AEDFHR';

console.log(longestCommonSubsequence(str1, str2)); // Output: ADH
