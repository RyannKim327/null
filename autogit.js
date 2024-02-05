function longestCommonSubstring(str1, str2) {
  // Initialize a 2D matrix to store the lengths of the common substrings
  const matrix = Array(str1.length + 1)
    .fill(0)
    .map(() => Array(str2.length + 1).fill(0));

  let longestSubstringLength = 0; // Length of the longest common substring
  let longestSubstringEndIndex = 0; // End index of the longest common substring in str1

  // Iterate over each character of str1
  for (let i = 1; i <= str1.length; i++) {
    // Iterate over each character of str2
    for (let j = 1; j <= str2.length; j++) {
      // If characters match
      if (str1[i - 1] === str2[j - 1]) {
        // Add 1 to the length of the common substring
        matrix[i][j] = matrix[i - 1][j - 1] + 1;

        // If this is the longest substring so far, update the length and end index
        if (matrix[i][j] > longestSubstringLength) {
          longestSubstringLength = matrix[i][j];
          longestSubstringEndIndex = i - 1; // (or j - 1 as str1 and str2 are interchangeable)
        }
      }
    }
  }

  // Extract the longest common substring from str1
  const longestSubstring = str1.slice(
    longestSubstringEndIndex - longestSubstringLength + 1,
    longestSubstringEndIndex + 1
  );

  return longestSubstring;
}

// Example usage:
const str1 = "abcdefg";
const str2 = "xyzjklmnoabcdefgpqr";
const longestSubstring = longestCommonSubstring(str1, str2);
console.log(longestSubstring); // Output: "abcdefg"
