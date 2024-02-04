function longestCommonSubsequence(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  
  // Create a 2D array to store the lengths of LCS
  const dp = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0));
  
  // Calculate the lengths of LCS for all substrings
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  
  // Backtrack to construct the LCS
  let lcs = '';
  let i = m, j = n;
  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      lcs = str1[i - 1] + lcs;
      i--;
      j--;
    } else if (dp[i - 1][j] >= dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }
  
  return lcs;
}
const str1 = 'ABCD';
const str2 = 'AEBD';

const lcs = longestCommonSubsequence(str1, str2);
console.log(lcs); // Output: ABD
