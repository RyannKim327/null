function findLongestCommonSubsequence(string1, string2) {
  const m = string1.length;
  const n = string2.length;

  // Create a 2D array to store the lengths of longest
  // common subsequences of substrings from string1 and string2
  const lcsLengths = new Array(m + 1);
  for (let i = 0; i <= m; i++) {
    lcsLengths[i] = new Array(n + 1).fill(0);
  }

  // Compute the lengths of longest common subsequences
  // of substrings from string1 and string2
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (string1[i - 1] === string2[j - 1]) {
        lcsLengths[i][j] = lcsLengths[i - 1][j - 1] + 1;
      } else {
        lcsLengths[i][j] = Math.max(lcsLengths[i][j - 1], lcsLengths[i - 1][j]);
      }
    }
  }

  // Backtrack to find the longest common subsequence
  let i = m, j = n;
  const lcs = [];
  while (i > 0 && j > 0) {
    if (string1[i - 1] === string2[j - 1]) {
      lcs.unshift(string1[i - 1]);
      i--;
      j--;
    } else if (lcsLengths[i][j - 1] > lcsLengths[i - 1][j]) {
      j--;
    } else {
      i--;
    }
  }

  return lcs.join('');
}

// Example usage:
const string1 = 'ABCDGH';
const string2 = 'AEDFHR';
const longestCommonSubsequence = findLongestCommonSubsequence(string1, string2);
console.log(longestCommonSubsequence); // Output: ADH
