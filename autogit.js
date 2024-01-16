function findLongestCommonSubsequence(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  const dp = [];

  // Initialize dp array with zeros
  for (let i = 0; i <= m; i++) {
    dp[i] = [];
    for (let j = 0; j <= n; j++) {
      dp[i][j] = 0;
    }
  }

  // Fill the dp array
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Find the longest common subsequence
  let i = m;
  let j = n;
  const lcs = [];
  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      lcs.unshift(str1[i - 1]);
      i--;
      j--;
    } else if (dp[i - 1][j] >= dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  return lcs.join('');
}

// Example usage
const str1 = 'ABCDGH';
const str2 = 'AEDFHR';
console.log(findLongestCommonSubsequence(str1, str2)); // Output: ADH
