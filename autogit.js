function longestCommonSubstring(str1, str2) {
  // Create a 2D matrix to store the lengths of common substrings
  const matrix = Array(str1.length + 1)
    .fill(0)
    .map(() => Array(str2.length + 1).fill(0));

  let maxLength = 0; // Length of the longest common substring
  let endIndex = 0; // Index where the longest common substring ends

  // Traverse through the strings and fill in the matrix
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

  // Extract the longest common substring
  let longestSubstring = '';
  if (maxLength > 0) {
    longestSubstring = str1.substr(endIndex - maxLength + 1, maxLength);
  }

  return longestSubstring;
}

// Usage example:
const str1 = 'abcde';
const str2 = 'cdeab';
const longestSubstring = longestCommonSubstring(str1, str2);
console.log(longestSubstring); // Output: 'cde'
