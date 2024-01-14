function longestCommonSubstring(str1, str2) {
  // Create a 2D array to store the lengths of common substrings
  const commonLengths = Array(str1.length + 1)
    .fill(0)
    .map(() => Array(str2.length + 1).fill(0));

  let maxLength = 0; // Length of longest common substring
  let endIndex = 0; // Ending index of longest common substring

  // Iterate over each character of str1 and str2
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        // Characters match, extend the length of common substring
        commonLengths[i][j] = commonLengths[i - 1][j - 1] + 1;
        if (commonLengths[i][j] > maxLength) {
          maxLength = commonLengths[i][j];
          endIndex = i - 1; // Update ending index
        }
      } else {
        // Characters don't match, reset length of common substring
        commonLengths[i][j] = 0;
      }
    }
  }

  // Extract the longest common substring based on the ending index
  const longestSubstring = str1.substr(endIndex - maxLength + 1, maxLength);
  return longestSubstring;
}

// Example usage:
const str1 = "abcdxyz";
const str2 = "xyzabcd";
const longestSubstring = longestCommonSubstring(str1, str2);
console.log(longestSubstring); // Output: "abcd"
