function longestCommonSubstring(str1, str2) {
  // Initialize dynamic programming matrix
  const dp = Array(str1.length + 1)
    .fill(0)
    .map(() => Array(str2.length + 1).fill(0));

  let longestLength = 0; // Length of longest common substring
  let endIndex = 0; // Index where longest common substring ends in str1

  // Iterate over each character of str1
  for (let i = 1; i <= str1.length; i++) {
    // Iterate over each character of str2
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        // If characters match, update dp matrix
        dp[i][j] = dp[i - 1][j - 1] + 1;

        // Check if current length is the longest
        if (dp[i][j] > longestLength) {
          longestLength = dp[i][j];
          endIndex = i - 1;
        }
      }
    }
  }

  // Extract the longest common substring from str1
  const longestSubstring = str1.substr(endIndex - longestLength + 1, longestLength);
  return longestSubstring;
}

// Example usage
const str1 = "abcdefg";
const str2 = "xyzabcd";
const commonSubstring = longestCommonSubstring(str1, str2);
console.log(commonSubstring); // Output: "abcd"
