function longestCommonSubstring(str1, str2) {
  // Initialize a 2D array to store the lengths of common substrings
  const matrix = Array(str1.length + 1)
    .fill(0)
    .map(() => Array(str2.length + 1).fill(0));

  // Variables to track the longest common substring length and ending position
  let longestLength = 0;
  let endIndex = 0;

  // Iterate over each character of the first string
  for (let i = 1; i <= str1.length; i++) {
    // Iterate over each character of the second string
    for (let j = 1; j <= str2.length; j++) {
      // If characters match, increment the length of the common substring
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;

        // Update the longest length and ending position if necessary
        if (matrix[i][j] > longestLength) {
          longestLength = matrix[i][j];
          endIndex = i - 1;
        }
      }
    }
  }

  // Extract the longest common substring using the ending position and length
  const longestSubstring = str1.substr(endIndex - longestLength + 1, longestLength);
  return longestSubstring;
}

// Example usage
const str1 = "abcdefg";
const str2 = "xyzabcde";
const longestSubstring = longestCommonSubstring(str1, str2);
console.log(longestSubstring); // Output: "abc"
