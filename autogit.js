function longestCommonSubsequence(string1, string2) {
  const dp = Array(string1.length + 1)
    .fill(0)
    .map(() => Array(string2.length + 1).fill(0));

  for (let i = 1; i <= string1.length; i++) {
    for (let j = 1; j <= string2.length; j++) {
      if (string1[i - 1] === string2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  let lcs = '';
  let i = string1.length;
  let j = string2.length;

  while (i > 0 && j > 0) {
    if (string1[i - 1] === string2[j - 1]) {
      lcs = string1[i - 1] + lcs;
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
const string1 = 'AGGTAB';
const string2 = 'GXTXAYB';
const result = longestCommonSubsequence(string1, string2);
console.log(result); // Output: GTAB
