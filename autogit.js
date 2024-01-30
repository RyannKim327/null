function longestCommonSubstring(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  let maxLength = 0; // Length of longest common substring
  let endIndex = 0; // End index of longest common substring in str1

  // Create a 2D array to store the lengths of common substrings
  const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

  // Fill the dp array and track the maximum length and ending index
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

  // Return the longest common substring
  return str1.substr(endIndex - maxLength + 1, maxLength);
}

// Example usage
const str1 = "ABABC";
const str2 = "BABCA";
const result = longestCommonSubstring(str1, str2);
console.log(result); // Output: "BABC"
