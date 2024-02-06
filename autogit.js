function findLCS(str1, str2) {
  // Create a 2D array to store the lengths of LCS
  let dp = Array.from({ length: str1.length + 1 }, () => Array(str2.length + 1).fill(0));
  
  // Build the LCS array in bottom-up manner
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }
  
  // Find the longest common subsequence
  let lcs = '';
  let i = str1.length, j = str2.length;
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
let str1 = 'AGGTAB';
let str2 = 'GXTXAYB';
let lcs = findLCS(str1, str2);
console.log(lcs);  // Output: GTAB
