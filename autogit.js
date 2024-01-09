function longestCommonSubstring(str1, str2) {
  // Create a matrix to store lengths of longest common suffixes of substrings
  const matrix = Array(str1.length + 1)
    .fill(0)
    .map(() => Array(str2.length + 1).fill(0));

  let maxLength = 0; // Length of longest common substring
  let endIndex = 0; // Index of the last character of longest common substring

  // Fill the matrix and update max length and ending index
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
        if (matrix[i][j] > maxLength) {
          maxLength = matrix[i][j];
          endIndex = i - 1;
        }
      } else {
        matrix[i][j] = 0;
      }
    }
  }

  // Extract the longest common substring using the ending index
  const longestSubstring = str1.substring(endIndex - maxLength + 1, endIndex + 1);
  return longestSubstring;
}

// Example usage
const str1 = "javascript";
const str2 = "substring";
const longestSubStr = longestCommonSubstring(str1, str2);
console.log(longestSubStr); // Output: "string"
