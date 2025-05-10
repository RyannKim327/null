function longestCommonSubstring(s1: string, s2: string): string {
  const len1 = s1.length;
  const len2 = s2.length;
  let maxLength = 0;
  let endingIndexS1 = 0;

  // Create a 2D array to store lengths of longest common suffixes of substrings
  const dp: number[][] = Array.from({ length: len1 + 1 }, () =>
    new Array(len2 + 1).fill(0)
  );

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        if (dp[i][j] > maxLength) {
          maxLength = dp[i][j];
          endingIndexS1 = i - 1;
        }
      }
    }
  }

  // If no common substring found
  if (maxLength === 0) return '';

  return s1.slice(endingIndexS1 - maxLength + 1, endingIndexS1 + 1);
}
console.log(longestCommonSubstring("blueprint", "printable")); // Output: "print"
