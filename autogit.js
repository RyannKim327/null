function longestCommonSubsequence(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  // Create a 2D array to store the lengths of LCS
  const dp = [...Array(m + 1)].map(() => Array(n + 1).fill(0));

  // Fill in the dp array
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }

  // Construct the LCS string
  const lcs = [];
  let i = m, j = n;
  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      lcs.unshift(str1[i - 1]);
      i--;
      j--;
    } else if (dp[i][j - 1] > dp[i - 1][j]) {
      j--;
    } else {
      i--;
    }
  }

  return lcs.join('');
}
const str1 = "ABCDGH";
const str2 = "AEDFHR";
const lcs = longestCommonSubsequence(str1, str2);
console.log(lcs); // Output: "ADH"
