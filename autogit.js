function longestCommonSubstring(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  // Create a matrix to store the lengths of the common substrings
  const dp = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  let maxLength = 0; // Length of longest common substring
  let endIndex = 0; // End index of longest common substring

  // Loop through each character of the two strings
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;

        // Update the maxLength and endIndex if a longer common substring is found
        if (dp[i][j] > maxLength) {
          maxLength = dp[i][j];
          endIndex = i - 1;
        }
      }
    }
  }

  // Extract the longest common substring using the endIndex
  const longestCommonSubstr = str1.substring(endIndex - maxLength + 1, endIndex + 1);

  return longestCommonSubstr;
}

// Example usage
const str1 = "ABCDXYZ";
const str2 = "XYZABCD";
console.log(longestCommonSubstring(str1, str2));
