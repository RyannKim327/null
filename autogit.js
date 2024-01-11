function findLongestCommonSubstring(string1, string2) {
  // Initialize a 2D matrix to store lengths of common substrings
  const matrix = Array(string1.length + 1)
    .fill(0)
    .map(() => Array(string2.length + 1).fill(0));

  let longestSubstringLength = 0; // Length of the longest common substring
  let endIndex = 0; // End index of the longest common substring in string1

  // Iterate over each character in string1
  for (let i = 1; i <= string1.length; i++) {
    // Iterate over each character in string2
    for (let j = 1; j <= string2.length; j++) {
      if (string1[i - 1] === string2[j - 1]) {
        // Characters match
        matrix[i][j] = matrix[i - 1][j - 1] + 1;

        if (matrix[i][j] > longestSubstringLength) {
          // New longest common substring found
          longestSubstringLength = matrix[i][j];
          endIndex = i - 1; // Update the end index accordingly
        }
      } else {
        matrix[i][j] = 0; // Reset length to 0 if characters don't match
      }
    }
  }

  // Extract the longest common substring using the end index
  const longestSubstring = string1.substring(
    endIndex - longestSubstringLength + 1,
    endIndex + 1
  );

  return longestSubstring;
}

// Example usage
const string1 = "abcde";
const string2 = "defgab";

console.log(findLongestCommonSubstring(string1, string2)); // Output: "a"
