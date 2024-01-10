function longestCommonSubstring(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  
  // Create a 2D array to store the lengths of common substrings
  const dp = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  let result = 0; // Length of the longest common substring
  let endIndex = 0; // End index of the longest common substring in str1

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        if (dp[i][j] > result) {
          result = dp[i][j];
          endIndex = i - 1; // Update the end index of the longest common substring
        }
      } else {
        dp[i][j] = 0;
      }
    }
  }

  // Extract the longest common substring from str1 using the endIndex
  const longestSubstring = str1.slice(endIndex - result + 1, endIndex + 1);
  return longestSubstring;
}

// Example usage:
const str1 = "abcdefg";
const str2 = "xyzcdef";
const longestSubstring = longestCommonSubstring(str1, str2);
console.log(longestSubstring); // Output: "cdef"
