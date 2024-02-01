function longestCommonSubstring(s1, s2) {
  // Initialize a matrix to store the lengths of common substrings
  const matrix = Array(s1.length + 1)
    .fill(0)
    .map(() => Array(s2.length + 1).fill(0));

  let longestSubstringLength = 0; // Length of the longest common substring
  let endIndex = 0; // Ending index of the longest common substring in s1

  // Traverse the strings and update the matrix
  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;

        if (matrix[i][j] > longestSubstringLength) {
          longestSubstringLength = matrix[i][j];
          endIndex = i - 1;
        }
      } else {
        matrix[i][j] = 0;
      }
    }
  }

  // Extract the longest common substring
  const longestSubstring = s1.substr(endIndex - longestSubstringLength + 1, longestSubstringLength);
  return longestSubstring;
}

// Example usage:
const s1 = "abcdef";
const s2 = "cde";
const longestSubstring = longestCommonSubstring(s1, s2);
console.log(longestSubstring); // Output: "cde"
