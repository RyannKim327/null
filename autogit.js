function longestCommonSubstring(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  // Create a 2D array filled with 0
  const dp = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  let maxLength = 0; // Length of the longest common substring
  let endIndex = 0; // Last index of the longest common substring

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;

        if (dp[i][j] > maxLength) {
          maxLength = dp[i][j];
          endIndex = i - 1;
        }
      }
    }
  }

  // Extract the longest common substring from str1
  const longestSubstring = str1.slice(endIndex - maxLength + 1, endIndex + 1);

  return longestSubstring;
}

// Example usage:
const str1 = "abcdefg";
const str2 = "xyzdefg";
const longestSubstring = longestCommonSubstring(str1, str2);
console.log(longestSubstring); // Output: "defg"
