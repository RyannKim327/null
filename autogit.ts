function longestCommonSubstring(s1: string, s2: string): string {
  const m = s1.length;
  const n = s2.length;
  const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));
  let maxLength = 0;
  let endIndex = 0;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        if (dp[i][j] > maxLength) {
          maxLength = dp[i][j];
          endIndex = i;
        }
      }
    }
  }

  return s1.substring(endIndex - maxLength, endIndex);
}

// Example usage:
const s1 = "banana";
const s2 = "anana";
const longestSubstr = longestCommonSubstring(s1, s2);
console.log(longestSubstr); // Output: "anana"
