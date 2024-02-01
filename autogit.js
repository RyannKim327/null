function findLongestCommonSubstring(string1, string2) {
  const m = string1.length;
  const n = string2.length;
  let maxLength = 0;
  let endIndex = 0;

  // Create a 2D array to store the lengths of common substrings
  const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

  // Iterate over the strings and update the dp array
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (string1[i - 1] === string2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        if (dp[i][j] > maxLength) {
          maxLength = dp[i][j];
          endIndex = i - 1; // Update the ending index of the common substring
        }
      }
    }
  }

  // Extract the longest common substring from string1
  const longestSubstring = string1.substring(endIndex - maxLength + 1, endIndex + 1);
  return longestSubstring;
}

// Example usage:
const string1 = 'abcdefg';
const string2 = 'cdefgh';

const longestSubstring = findLongestCommonSubstring(string1, string2);
console.log(longestSubstring); // Output: "cdef"
