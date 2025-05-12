function longestCommonSubstring(s1: string, s2: string): string {
  const m = s1.length;
  const n = s2.length;
  let maxLength = 0;
  let endIndex = 0;

  // Create a 2D array to store lengths of longest common suffixes
  const dp: number[][] = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        if (dp[i][j] > maxLength) {
          maxLength = dp[i][j];
          endIndex = i - 1;
        }
      } else {
        dp[i][j] = 0;
      }
    }
  }

  return s1.slice(endIndex - maxLength + 1, endIndex + 1);
}

// Example usage:
const str1 = "ababc";
const str2 = "babca";
console.log(longestCommonSubstring(str1, str2)); // Output: "abca" would be incorrect; actual longest common substring is "babc" or "abca"?

// Actually the longest common substring in this example is "babc" or "abca"?
// Let's test it:

console.log(longestCommonSubstring("ababc", "babca")); // Outputs: "babc"
