function longestCommonSubstring(str1, str2) {
  // Create a 2D matrix to store lengths of the common substrings
  const matrix = Array(str1.length + 1)
    .fill(0)
    .map(() => Array(str2.length + 1).fill(0));

  let maxLength = 0; // Length of the longest common substring
  let endIndex = 0; // Ending index of the longest common substring

  // Fill the matrix by checking each character of the strings
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;

        if (matrix[i][j] > maxLength) {
          maxLength = matrix[i][j];
          endIndex = i - 1; // Update the ending index of the longest common substring
        }
      } else {
        matrix[i][j] = 0;
      }
    }
  }

  // Extract the longest common substring using the ending index and maxLength
  const longestSubstring = str1.slice(endIndex - maxLength + 1, endIndex + 1);
  return longestSubstring;
}

// Example usage
const string1 = "abcdefgh";
const string2 = "xyzabcd";

console.log(longestCommonSubstring(string1, string2));
