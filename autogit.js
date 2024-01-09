function findLCS(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  // Create a 2D matrix with (m+1) rows and (n+1) columns
  const matrix = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

  // Build the matrix using bottom-up dynamic programming approach
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
      } else {
        matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
      }
    }
  }

  // Reconstruct the longest common subsequence
  let lcs = "";
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

// Example usage:
const str1 = "ABCDGH";
const str2 = "AEDFHR";
const lcs = findLCS(str1, str2);
console.log(lcs);  // Output: "ADH"
