function longestCommonSubstring(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  // Create a matrix to store the lengths of the longest common suffixes
  const matrix = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  let longestLength = 0; // Length of the longest common substring
  let endIndex = 0; // Ending index of the longest common substring in str1

  // Iterate over each character of str1 and str2
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        // Characters match
        matrix[i][j] = matrix[i - 1][j - 1] + 1;

        if (matrix[i][j] > longestLength) {
          longestLength = matrix[i][j];
          endIndex = i - 1;
        }
      } else {
        // Characters don't match
        matrix[i][j] = 0;
      }
    }
  }

  // Extract the longest common substring from str1
  const longestSubstring = str1.slice(endIndex - longestLength + 1, endIndex + 1);
  return longestSubstring;
}

// Example usage:
const str1 = "JavaScript is awesome";
const str2 = "Awesome is JavaScript";
const longestSubstring = longestCommonSubstring(str1, str2);
console.log(longestSubstring); // Output: "JavaScript"
