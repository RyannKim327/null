function longestCommonSubsequence(str1, str2) {
  // Create a 2D array of size (str1.length + 1) x (str2.length + 1)
  const matrix = Array(str1.length + 1)
    .fill(0)
    .map(() => Array(str2.length + 1).fill(0));

  // Fill the matrix
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
      } else {
        matrix[i][j] = Math.max(matrix[i][j - 1], matrix[i - 1][j]);
      }
    }
  }

  // Trace back the matrix to find the LCS
  let i = str1.length;
  let j = str2.length;
  const lcs = [];

  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      lcs.unshift(str1[i - 1]);
      i--;
      j--;
    } else if (matrix[i][j - 1] > matrix[i - 1][j]) {
      j--;
    } else {
      i--;
    }
  }

  return lcs.join('');
}

// Example usage
const str1 = 'ABCDGH';
const str2 = 'AEDFHR';
const result = longestCommonSubsequence(str1, str2);
console.log(result); // Output: ADH
