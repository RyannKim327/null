function longestCommonSubstring(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  let maxLength = 0; // length of the longest common substring
  let endIndex = 0; // ending index of the longest common substring
  
  // Create a matrix to store the lengths of common substrings
  const matrix = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));
  
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
        if (matrix[i][j] > maxLength) {
          maxLength = matrix[i][j];
          endIndex = i - 1; // Update the ending index of the longest common substring
        }
      } else {
        matrix[i][j] = 0; // Reset the length of common substring if characters don't match
      }
    }
  }
  
  // Extract the longest common substring using the ending index and length
  const longestCommon = str1.substr(endIndex - maxLength + 1, maxLength);
  
  return longestCommon;
}

// Example usage:
const str1 = "abcdefg";
const str2 = "xyzdefg";
const longestSubstring = longestCommonSubstring(str1, str2);
console.log(longestSubstring); // Output: "defg"
