function longestCommonSubstring(str1, str2) {
  // Create a matrix to store the lengths of common substrings
  const matrix = Array(str1.length + 1).fill(0).map(() => Array(str2.length + 1).fill(0));
  
  let longestLength = 0; // length of longest common substring
  let longestEndIndex = 0; // ending index of longest common substring
  
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
        if (matrix[i][j] > longestLength) {
          longestLength = matrix[i][j];
          longestEndIndex = i - 1;
        }
      } else {
        matrix[i][j] = 0;
      }
    }
  }
  
  // Extract the longest common substring
  const longestSubstring = str1.substr(longestEndIndex - longestLength + 1, longestLength);
  
  return longestSubstring;
}

// Example usage:
const str1 = "abcdxyz";
const str2 = "xyzabcd";
console.log(longestCommonSubstring(str1, str2)); // Output: "abcd"
