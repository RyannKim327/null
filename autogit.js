function longestCommonSubsequence(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  // Create a matrix to store the lengths of the common subsequences
  const matrix = [];
  for (let i = 0; i <= m; i++) {
    matrix[i] = new Array(n + 1).fill(0);
  }

  // Fill the matrix by comparing characters of both strings
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
      } else {
        matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
      }
    }
  }

  // Trace back the matrix to find the longest common subsequence
  let i = m, j = n;
  const lcs = [];
  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      lcs.unshift(str1[i - 1]);
      i--;
      j--;
    } else if (matrix[i - 1][j] > matrix[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  return lcs.join('');
}

// Example usage:
const str1 = 'ABCDGH';
const str2 = 'AEDFHR';
const result = longestCommonSubsequence(str1, str2);
console.log(result); // Output: ADH
