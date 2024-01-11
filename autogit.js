function findLCS(str1, str2) {
  const lcsMatrix = Array(str1.length + 1)
    .fill(0)
    .map(() => Array(str2.length + 1).fill(0));

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        lcsMatrix[i][j] = lcsMatrix[i - 1][j - 1] + 1;
      } else {
        lcsMatrix[i][j] = Math.max(lcsMatrix[i - 1][j], lcsMatrix[i][j - 1]);
      }
    }
  }

  let i = str1.length;
  let j = str2.length;
  let lcs = '';

  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      lcs = str1[i - 1] + lcs;
      i--;
      j--;
    } else if (lcsMatrix[i][j - 1] > lcsMatrix[i - 1][j]) {
      j--;
    } else {
      i--;
    }
  }

  return lcs;
}

// Example usage:
const str1 = 'ABCDGH';
const str2 = 'AEDFHR';
const lcs = findLCS(str1, str2);
console.log(lcs); // Output: ADH
