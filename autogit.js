function findLCS(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  // Create a matrix to store the lengths of LCS
  const matrix = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  // Fill the matrix in a bottom-up manner
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        // Characters match
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
      } else {
        // Characters don't match, take the maximum of the previous LCS lengths
        matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
      }
    }
  }

  // Read the LCS from the matrix
  let lcs = '';
  let i = m;
  let j = n;
  while (i > 0 && j > 0) {
    // If the characters match, it belongs to the LCS
    if (str1[i - 1] === str2[j - 1]) {
      lcs = str1[i - 1] + lcs;
      i--;
      j--;
    }
    // Move to the cell with the maximum LCS length
    else if (matrix[i - 1][j] > matrix[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  return lcs;
}

// Example usage:
const str1 = 'ABAZDC';
const str2 = 'BACBAD';
const longestCommonSubsequence = findLCS(str1, str2);
console.log(longestCommonSubsequence); // Output: "ABAD"
