function longestCommonSubstring(str1: string, str2: string): string {
  const m = str1.length;
  const n = str2.length;

  // Create a 2D array initialized with 0
  const dp: number[][] = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0));

  let maxLength = 0;
  let endIndex = 0;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;

        if (dp[i][j] > maxLength) {
          maxLength = dp[i][j];
          endIndex = i; // end of substring in str1
        }
      }
    }
  }

  // Return the substring from str1 using the endIndex and maxLength
  return str1.slice(endIndex - maxLength, endIndex);
}
const s1 = "helloWorld";
const s2 = "yellowLord";

console.log(longestCommonSubstring(s1, s2)); // Output: "ello"
