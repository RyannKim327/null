function longestCommonSubstring(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;

  // Create a matrix to store the lengths of common substrings
  const matrix = Array(len1 + 1)
    .fill(0)
    .map(() => Array(len2 + 1).fill(0));

  let maxLength = 0; // Length of the longest common substring
  let endIndex = 0; // Index where the longest common substring ends in str1

  // Fill the matrix
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;

        // Check if the current length is longer than maxLength
        if (matrix[i][j] > maxLength) {
          maxLength = matrix[i][j];
          endIndex = i - 1;
        }
      }
    }
  }

  // Extract the longest common substring from str1
  const longestSubstring = str1.substring(
    endIndex - maxLength + 1,
    endIndex + 1
  );

  return longestSubstring;
}

// Example usage
const str1 = "javascript";
const str2 = "code";
const result = longestCommonSubstring(str1, str2);
console.log(result); // Output: "e"
