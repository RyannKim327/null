function longestCommonSubsequence(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  // Create a 2D array with dimensions (m+1)x(n+1)
  const dp = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  // Fill the 2D array using dynamic programming
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1; // Increment the count
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); // Take the maximum of the previous counts
      }
    }
  }

  // Backtrack through the 2D array to find the longest common subsequence
  let i = m;
  let j = n;
  const subsequence = [];

  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      subsequence.unshift(str1[i - 1]); // Add the character to the beginning of the subsequence
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  return subsequence.join('');
}

// Example usage:
const str1 = 'ABCDGH';
const str2 = 'AEDFHR';
console.log(longestCommonSubsequence(str1, str2)); // Output: ADH
