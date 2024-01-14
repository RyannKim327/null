function longestCommonSubsequence(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  // Create a 2D matrix and initialize it with zeros
  const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

  // Populate the matrix by comparing characters of the two strings
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1])
        dp[i][j] = dp[i - 1][j - 1] + 1;
      else
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
    }
  }

  // Retrieve the longest common subsequence
  let lcs = '';
  let i = m;
  let j = n;
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
const str1 = 'ABCDGH';
const str2 = 'AEDFHR';
const result = longestCommonSubsequence(str1, str2);
console.log(result); // Output: ADH
