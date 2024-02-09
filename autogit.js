function findLongestCommonSubstring(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  // Create a 2D array to store the lengths of common substrings
  const dp = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  let maxLength = 0; // Length of the longest common substring
  let endIndex = 0; // Index where the longest common substring ends

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        if (dp[i][j] > maxLength) {
          maxLength = dp[i][j];
          endIndex = i - 1; // Update the index
        }
      }
    }
  }

  // Extract the longest common substring using the endIndex
  const longestCommonSubstring = str1.substr(endIndex - maxLength + 1, maxLength);

  return longestCommonSubstring;
}

// Example usage
const str1 = "abcdefg";
const str2 = "xyzcdefg";

console.log(findLongestCommonSubstring(str1, str2)); // Output: "cdefg"
