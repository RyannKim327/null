function longestCommonSubstring(str1, str2) {
  // Initialize a 2D array to store the lengths of common substrings
  const matrix = Array(str1.length + 1).fill(0).map(() => Array(str2.length + 1).fill(0));

  let maxLength = 0; // Length of the longest common substring
  let endIndex = 0; // End index of the longest common substring in str1

  // Iterate over the characters of str1 and str2
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        // If the characters match, increment the length of the common substring
        matrix[i][j] = matrix[i - 1][j - 1] + 1;

        if (matrix[i][j] > maxLength) {
          maxLength = matrix[i][j];
          endIndex = i - 1;
        }
      } else {
        // If the characters don't match, reset the length of the common substring
        matrix[i][j] = 0;
      }
    }
  }

  // Extract the longest common substring from str1
  const longestSubstring = str1.substring(endIndex - maxLength + 1, endIndex + 1);

  return longestSubstring;
}

// Example usage:
const str1 = 'abcdefg';
const str2 = 'xyzdefg';
const longestSubstring = longestCommonSubstring(str1, str2);
console.log(longestSubstring); // Output: 'defg'
