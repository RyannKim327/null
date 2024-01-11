function longestCommonSubsequence(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  
  // Create a matrix to store the lengths of the common subsequences
  const dp = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }
  
  // Perform dynamic programming to fill in the matrix
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        // If the characters match, add 1 to the previous length
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // If the characters don't match, take the maximum of the previous lengths
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Retrieve the longest common subsequence by backtracking the matrix
  let i = m, j = n;
  const subsequence = [];
  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      // If the characters match, it belongs to the subsequence
      subsequence.unshift(str1[i - 1]);
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      // If the length comes from the top, move upward
      i--;
    } else {
      // If the length comes from the left, move to the left
      j--;
    }
  }

  return subsequence.join('');
}

// Example usage
const str1 = 'ABCDGH';
const str2 = 'AEDFHR';
const lcs = longestCommonSubsequence(str1, str2);
console.log(lcs); // Output: ADH
