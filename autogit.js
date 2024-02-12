function findLCS(str1, str2) {
  // Create a 2D matrix to store the lengths of common subsequences
  const matrix = Array(str1.length + 1)
    .fill(0)
    .map(() => Array(str2.length + 1).fill(0));

  // Iterate through each character in the strings
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        // If the characters match, extend the LCS length by 1
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
      } else {
        // If the characters don't match, take the maximum LCS length
        // from either skipping a character in str1 or skipping a character in str2
        matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
      }
    }
  }

  // Reconstruct the LCS from the matrix
  let lcs = "";
  let i = str1.length;
  let j = str2.length;

  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      // If the characters match, add it to the LCS and move diagonally up-left
      lcs = str1[i - 1] + lcs;
      i--;
      j--;
    } else if (matrix[i - 1][j] > matrix[i][j - 1]) {
      // If the lengths differ, move to the left
      i--;
    } else {
      // If the lengths are the same, move up
      j--;
    }
  }

  return lcs;
}

// Example usage
const str1 = "ABCDGH";
const str2 = "AEDFHR";
const lcs = findLCS(str1, str2);
console.log(lcs); // Output: ADH
