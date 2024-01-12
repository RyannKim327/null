function longestCommonSubstring(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  let maxLength = 0; // length of the longest common substring
  let endIndex = 0; // ending index of the longest common substring

  // Create a 2D table to store the lengths of common substrings
  const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

  // Calculate the lengths of common substrings
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        if (dp[i][j] > maxLength) {
          maxLength = dp[i][j];
          endIndex = i - 1; // update the ending index
        }
      }
    }
  }

  // Extract the longest common substring using the ending index
  return str1.substr(endIndex - maxLength + 1, maxLength);
}

// Example usage
const str1 = "abcdef";
const str2 = "defghijkl";
const longestSubstring = longestCommonSubstring(str1, str2);
console.log(longestSubstring); // Output: "def"
