function longestCommonSubstring(str1, str2) {
  // Create a 2D array to store the lengths of longest common suffixes
  const matrix = Array(str1.length + 1).fill(0).map(() => Array(str2.length + 1).fill(0));

  let maxLength = 0; // Length of longest common substring
  let endIndex = 0; // End index of longest common substring in str1

  // Traverse each character of the strings
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

  // Extract the longest common substring using the endIndex and maxLength
  const longestSubstring = str1.substr(endIndex - maxLength + 1, maxLength);
  return longestSubstring;
}

// Example usage:
const str1 = "abcdef";
const str2 = "xyzdef";
console.log(longestCommonSubstring(str1, str2)); // Output: "def"
