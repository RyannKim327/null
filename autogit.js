function findLCS(string1, string2) {
  const m = string1.length;
  const n = string2.length;
  const lcs = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (string1[i - 1] === string2[j - 1]) {
        lcs[i][j] = lcs[i - 1][j - 1] + 1;
      } else {
        lcs[i][j] = Math.max(lcs[i][j - 1], lcs[i - 1][j]);
      }
    }
  }

  return lcs[m][n];
}

const string1 = "ABCD";
const string2 = "ACDF";

const lcsLength = findLCS(string1, string2);
console.log("Length of LCS:", lcsLength);
