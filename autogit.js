function longestCommonSubsequence(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  // Create a 2D matrix with m+1 rows and n+1 columns
  const matrix = new Array(m + 1);
  for (let i = 0; i <= m; i++) {
    matrix[i] = new Array(n + 1).fill(0);
  }

  // Fill the matrix
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
      } else {
        matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
      }
    }
  }

  // Read the longest common subsequence from the matrix
  let lcs = '';
  let i = m, j = n;
  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      lcs = str1[i - 1] + lcs;
      i--;
      j--;
    } else if (matrix[i - 1][j] > matrix[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  return lcs;
}
const str1 = 'ABCDGH';
const str2 = 'AEDFHR';
const lcs = longestCommonSubsequence(str1, str2);
console.log(lcs); // Output: ADH
