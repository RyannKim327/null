function longestCommonSubstring(s1, s2) {
  const m = s1.length;
  const n = s2.length;
  let result = 0; // Length of longest common substring
  let endIndex = 0; // Ending index of longest common substring

  // Create a matrix to store lengths of longest common suffixes
  const matrix = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  // Fill the matrix
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
        if (matrix[i][j] > result) {
          result = matrix[i][j];
          endIndex = i - 1;
        }
      } else {
        matrix[i][j] = 0;
      }
    }
  }

  // Extract the longest common substring
  const longestSubstring = s1.substring(endIndex - result + 1, endIndex + 1);
  return longestSubstring;
}

// Example usage
const string1 = "helloworld";
const string2 = "worldwide";
const longestSubstr = longestCommonSubstring(string1, string2);
console.log(longestSubstr); // Output: "world"
