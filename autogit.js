function findLongestCommonSubstring(str1, str2) {
  // Initialize a 2-dimensional array to store the lengths of common substrings
  const matrix = Array(str1.length + 1);

  for (let i = 0; i <= str1.length; i++) {
    matrix[i] = Array(str2.length + 1).fill(0);
  }

  let maxLength = 0; // Length of the longest common substring
  let endIndex = 0; // Ending index of the longest common substring

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;

        if (matrix[i][j] > maxLength) {
          maxLength = matrix[i][j];
          endIndex = i - 1; // Update the ending index
        }
      } else {
        matrix[i][j] = 0;
      }
    }
  }

  // Extract the longest common substring using the ending index and maximum length
  const longestCommonSubstring = str1.substr(endIndex - maxLength + 1, maxLength);
  return longestCommonSubstring;
}

// Example usage:
const str1 = "abcdefg";
const str2 = "xyzcdef";

const longestSubstring = findLongestCommonSubstring(str1, str2);
console.log(longestSubstring); // Output: "cdef"
