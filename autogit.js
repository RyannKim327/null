function longestCommonSubstring(str1, str2) {
  // Create the matrix to store lengths of the common substrings
  const matrix = Array(str1.length + 1)
    .fill(0)
    .map(() => Array(str2.length + 1).fill(0));

  // Variable to store the length of the longest common substring
  let longestLength = 0;

  // Variable to store the ending index of the longest common substring
  let endIndex = -1;

  // Loop to fill in the matrix
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;

        // Check if the current length is the longest
        if (matrix[i][j] > longestLength) {
          longestLength = matrix[i][j];
          endIndex = i - 1; // Update the ending index
        }
      } else {
        matrix[i][j] = 0;
      }
    }
  }

  // Extract the longest common substring
  const longestSubstring = str1.substring(endIndex - longestLength + 1, endIndex + 1);
  return longestSubstring;
}

// Example usage
const str1 = "abcdefg";
const str2 = "cdefhij";
const result = longestCommonSubstring(str1, str2);
console.log(result); // Output: "cdef"
