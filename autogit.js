function longestCommonSubstring(str1, str2) {
  let matrix = Array(str1.length + 1).fill(null).map(() => Array(str2.length + 1).fill(0));
  let maxLength = 0;
  let endPos = 0;

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
        if (matrix[i][j] > maxLength) {
          maxLength = matrix[i][j];
          endPos = i - 1;
        }
      } else {
        matrix[i][j] = 0;
      }
    }
  }

  if (maxLength === 0) {
    return '';
  }

  return str1.substring(endPos - maxLength + 1, endPos + 1);
}

// Test the function
let str1 = 'abcdef';
let str2 = 'zabcde';
console.log(longestCommonSubstring(str1, str2)); // Output: 'abc'
