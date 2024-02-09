function findLongestCommonSubstring(str1, str2) {
  // Initialize matrix to store lengths of common substrings
  const matrix = Array(str1.length + 1).fill(0).map(() => Array(str2.length + 1).fill(0));
  
  let maxLength = 0;  // Length of longest common substring
  let endIndex = 0;   // Index of the end of longest common substring
  
  // Iterate over each character of str1
  for (let i = 1; i <= str1.length; i++) {
    // Iterate over each character of str2
    for (let j = 1; j <= str2.length; j++) {
      // If characters match
      if (str1[i - 1] === str2[j - 1]) {
        // Add 1 to the length of the common substring ending at (i, j)
        matrix[i][j] = matrix[i - 1][j - 1] + 1;

        // Check if length exceeds maxLength
        if (matrix[i][j] > maxLength) {
          maxLength = matrix[i][j];
          endIndex = i - 1;  // Update endIndex
        }
      } else {
        matrix[i][j] = 0; // No common substring
      }
    }
  }
  
  // Extract the longest common substring
  const longestCommonSubstring = str1.substring(endIndex - maxLength + 1, endIndex + 1);
  
  return longestCommonSubstring;
}

// Example usage:
const str1 = "abcdxyz";
const str2 = "xyzabcd";

const longestSubstring = findLongestCommonSubstring(str1, str2);
console.log("Longest common substring:", longestSubstring); // Output: "abcd"
