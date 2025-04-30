function longestCommonSubstring(s1: string, s2: string): string {
  const len1 = s1.length;
  const len2 = s2.length;
  let maxLen = 0;
  let endIndex = 0;

  // Create a 2D array filled with 0
  const dp: number[][] = Array(len1 + 1)
    .fill(null)
    .map(() => Array(len2 + 1).fill(0));

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        if (dp[i][j] > maxLen) {
          maxLen = dp[i][j];
          endIndex = i; // track the end index of the substring in s1
        }
      }
    }
  }

  return s1.substring(endIndex - maxLen, endIndex);
}
