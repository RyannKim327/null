function findLCS(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  const table = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        table[i][j] = table[i - 1][j - 1] + 1;
      } else {
        table[i][j] = Math.max(table[i][j - 1], table[i - 1][j]);
      }
    }
  }

  let lcsLength = table[m][n];
  let lcs = '';

  while (m > 0 && n > 0) {
    if (str1[m - 1] === str2[n - 1]) {
      lcs = str1[m - 1] + lcs;
      m--;
      n--;
    } else if (table[m][n - 1] > table[m - 1][n]) {
      n--;
    } else {
      m--;
    }
  }

  return lcs;
}

// Example usage
const str1 = 'ABCDGH';
const str2 = 'AEDFHR';
const longestSubsequence = findLCS(str1, str2);
console.log(longestSubsequence); // Output: ADH
