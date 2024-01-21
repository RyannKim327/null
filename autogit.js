function findLongestCommonSubstring(str1, str2) {
  // Initialize a 2D array with 0s
  const matrix = Array(str1.length + 1)
    .fill(0)
    .map(() => Array(str2.length + 1).fill(0));

  let longestCommonSubstringLength = 0;
  let longestCommonSubstringEndIndex = 0;

  // Fill the matrix and track the longest common substring
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;

        if (matrix[i][j] > longestCommonSubstringLength) {
          longestCommonSubstringLength = matrix[i][j];
          longestCommonSubstringEndIndex = i - 1;
        }
      } else {
        matrix[i][j] = 0;
      }
    }
  }

  // Extract the longest common substring from str1
  const longestCommonSubstring = str1.slice(
    longestCommonSubstringEndIndex - longestCommonSubstringLength + 1,
    longestCommonSubstringEndIndex + 1
  );

  return longestCommonSubstring;
}

// Example usage
const str1 = 'abcdef';
const str2 = 'cdefg';
console.log(findLongestCommonSubstring(str1, str2));  // Output: 'cdef'
