function longestCommonSubstring(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;

  // Initialize a matrix to store the lengths of longest common suffixes
  const matrix = Array.from({ length: len1 + 1 }, () =>
    Array(len2 + 1).fill(0)
  );

  let longestSubstringLength = 0;
  let endIndex = 0;

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (str1[i - 1] === str2[j - 1]) {
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

  // If no common substring found
  if (longestSubstringLength === 0) {
    return "";
  }

  // Extract the longest common substring from str1
  const longestSubstring = str1.slice(endIndex - longestSubstringLength + 1, endIndex + 1);

  return longestSubstring;
}

// Example usage:
const str1 = "abcdefg";
const str2 = "xyzdefg";
const result = longestCommonSubstring(str1, str2);
console.log(result); // Output: "defg"
