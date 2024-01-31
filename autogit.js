function findLCS(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  // Create a matrix to store the lengths of LCS
  const lcsMatrix = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  // Build the lcsMatrix in a bottom-up manner
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        lcsMatrix[i][j] = 1 + lcsMatrix[i - 1][j - 1];
      } else {
        lcsMatrix[i][j] = Math.max(lcsMatrix[i - 1][j], lcsMatrix[i][j - 1]);
      }
    }
  }

  // Find the longest common subsequence by backtracking the lcsMatrix
  let lcs = "";
  let i = m;
  let j = n;
  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      lcs = str1[i - 1] + lcs;
      i--;
      j--;
    } else if (lcsMatrix[i - 1][j] > lcsMatrix[i][j - 1]) {
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
console.log(findLCS(str1, str2)); // Output: ADH
