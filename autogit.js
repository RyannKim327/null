function longestCommonSubsequence(str1, str2) {
  const dp = Array.from(Array(str1.length + 1), () => Array(str2.length + 1).fill(0));

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        dp[i + 1][j + 1] = dp[i][j] + 1;
      } else {
        dp[i + 1][j + 1] = Math.max(dp[i][j + 1], dp[i + 1][j]);
      }
    }
  }

  let lcs = '';
  let i = str1.length;
  let j = str2.length;

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

// Example usage:
console.log(longestCommonSubsequence('ABCD', 'ACDF')); // Output: 'ACD'
console.log(longestCommonSubsequence('AGGTAB', 'GXTXAYB')); // Output: 'GTAB'
