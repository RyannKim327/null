function longestCommonSubstring(s1: string, s2: string): string {
  const m = s1.length;
  const n = s2.length;

  // Create a 2D array filled with zeros
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  let maxLength = 0;     // Max length of common substring found
  let maxEndIndex = 0;   // Ending index of the longest common substring in s1

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;

        if (dp[i][j] > maxLength) {
          maxLength = dp[i][j];
          maxEndIndex = i;  // Store the end index in s1
        }
      }
    }
  }

  // Extract the longest common substring from s1 using maxLength and maxEndIndex
  return s1.substring(maxEndIndex - maxLength, maxEndIndex);
}
console.log(longestCommonSubstring("abcde", "abfce"));  // Output: "bc"
console.log(longestCommonSubstring("abcdef", "zabcf")); // Output: "abc"
