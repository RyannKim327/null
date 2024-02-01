function longestCommonSubstring(str1, str2) {
  // Initialize a 2D array to store the lengths of the common substrings
  const matrix = Array(str1.length + 1)
    .fill(0)
    .map(() => Array(str2.length + 1).fill(0));

  let maxLength = 0; // Variable to store the length of the longest common substring
  let endIndex = 0; // Variable to store the end index of the longest common substring in str1

  // Iterate over the characters of str1
  for (let i = 1; i <= str1.length; i++) {
    // Iterate over the characters of str2
    for (let j = 1; j <= str2.length; j++) {
      // If the characters match
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1; // Increment the length of the common substring
        // If the length of the common substring is greater than the maxLength, update the maxLength and endIndex
        if (matrix[i][j] > maxLength) {
          maxLength = matrix[i][j];
          endIndex = i - 1;
        }
      } else {
        matrix[i][j] = 0; // Reset the length of the common substring
      }
    }
  }

  // Extract the longest common substring from str1 using the endIndex and maxLength
  const longestSubstring = str1.substr(endIndex - maxLength + 1, maxLength);

  return longestSubstring;
}

// Example usage
const str1 = "abcdefg";
const str2 = "defgabc";
const longestSubstring = longestCommonSubstring(str1, str2);
console.log(longestSubstring); // Output: "defg"
