function longestCommonSubsequence(string1, string2) {
  const len1 = string1.length;
  const len2 = string2.length;

  const lcsArray = new Array(len1 + 1).fill(0).map(() => new Array(len2 + 1).fill(0));

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (string1[i - 1] === string2[j - 1]) {
        lcsArray[i][j] = lcsArray[i - 1][j - 1] + 1;
      } else {
        lcsArray[i][j] = Math.max(lcsArray[i - 1][j], lcsArray[i][j - 1]);
      }
    }
  }

  let result = '';
  let i = len1;
  let j = len2;

  while (i > 0 && j > 0) {
    if (string1[i - 1] === string2[j - 1]) {
      result = string1[i - 1] + result;
      i--;
      j--;
    } else if (lcsArray[i - 1][j] > lcsArray[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  return result;
}

// Example usage:
const string1 = 'ABCDGH';
const string2 = 'AEDFHR';
console.log(longestCommonSubsequence(string1, string2)); // Output: ADH
