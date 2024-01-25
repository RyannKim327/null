function longestCommonSubsequence(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  
  // Initialize the matrix
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  // Build the matrix
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1; // Increase the count by 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]); // Take the maximum of the previous counts
      }
    }
  }
  
  // Retrieve the longest common subsequence
  let i = m, j = n;
  const lcs = [];
  
  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      lcs.unshift(str1[i - 1]); // Add the character to the beginning of the array
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  return lcs.join('');
}

// Example usage
const str1 = "ABCDGH";
const str2 = "AEDFHR";
console.log(longestCommonSubsequence(str1, str2)); // Output: "ADH"
