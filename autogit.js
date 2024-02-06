function findLongestCommonSubstring(str1, str2) {
  // Initialize a 2D array with 0s to store the lengths of common substrings
  const commonSubstrLengths = Array(str1.length + 1)
    .fill(0)
    .map(() => Array(str2.length + 1).fill(0));

  // Variables to keep track of the maximum substring length and its ending position
  let maxLength = 0;
  let endIndex = 0;

  // Compute the lengths of common substrings
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        commonSubstrLengths[i][j] = commonSubstrLengths[i - 1][j - 1] + 1;

        if (commonSubstrLengths[i][j] > maxLength) {
          maxLength = commonSubstrLengths[i][j];
          endIndex = i - 1; // Update the ending position of the longest common substring
        }
      }
    }
  }

  // Extract the longest common substring using the ending position and length
  const longestCommonSubstr = str1.substr(endIndex - maxLength + 1, maxLength);
  return longestCommonSubstr;
}

// Example usage
const str1 = "abcdef";
const str2 = "defgabc";
const longestSubstring = findLongestCommonSubstring(str1, str2);
console.log(longestSubstring); // Output: "def"
