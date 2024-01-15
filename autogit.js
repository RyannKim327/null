function longestCommonSubstring(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  // Create a matrix to store the lengths of the common substrings
  const dp = Array(m + 1);
  for (let i = 0; i <= m; i++) {
    dp[i] = Array(n + 1).fill(0);
  }

  let longestLength = 0; // length of longest common substring
  let endIndex = 0; // ending index of longest common substring

  // Fill the matrix in bottom-up manner
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        if (dp[i][j] > longestLength) {
          longestLength = dp[i][j];
          endIndex = i - 1; // update the ending index
        }
      } else {
        dp[i][j] = 0;
      }
    }
  }

  // Extract the longest common substring using the ending index
  const longestSubstring = str1.substr(endIndex - longestLength + 1, longestLength);
  return longestSubstring;
}

// Example usage
const str1 = 'ABAB';
const str2 = 'BABA';
const longestSubstring = longestCommonSubstring(str1, str2);
console.log(longestSubstring); // Output: 'ABA'
