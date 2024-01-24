function findLongestCommonSubsequence(str1, str2) {
  const grid = Array(str1.length + 1)
    .fill(null)
    .map(() => Array(str2.length + 1).fill(0));

  // Fill the grid using the LCS algorithm
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        grid[i][j] = grid[i - 1][j - 1] + 1;
      } else {
        grid[i][j] = Math.max(grid[i - 1][j], grid[i][j - 1]);
      }
    }
  }

  // Traverse the grid to get the longest common subsequence
  let lcs = '';
  let i = str1.length;
  let j = str2.length;

  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      lcs = str1[i - 1] + lcs;
      i--;
      j--;
    } else if (grid[i - 1][j] > grid[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  return lcs;
}

// Example usage:
const str1 = 'ABCDGH';
const str2 = 'AEDFHR';
const longestSubsequence = findLongestCommonSubsequence(str1, str2);
console.log(longestSubsequence); // Output: ADH
