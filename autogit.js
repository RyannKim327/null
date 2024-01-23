function longestCommonSubstring(str1, str2) {
  // Initialize a 2D matrix to store the lengths of common substrings
  const matrix = Array(str1.length + 1).fill(Array(str2.length + 1).fill(0));
  
  // Variables to store the length and endpoint of the longest common substring
  let longestLength = 0;
  let endIndex = 0;
  
  // Loop through each character of the strings and fill the matrix
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
        
        // Update the length and endpoint of the longest common substring
        if (matrix[i][j] > longestLength) {
          longestLength = matrix[i][j];
          endIndex = i - 1;
        }
      }
    }
  }
  
  // Extract the longest common substring using the endpoint and length
  const longestSubstring = str1.substr(endIndex - longestLength + 1, longestLength);
  return longestSubstring;
}

// Example usage:
const str1 = 'abcdxyz';
const str2 = 'xyzabcd';
const longestSubstring = longestCommonSubstring(str1, str2);
console.log(longestSubstring);  // Output: "abcd"
