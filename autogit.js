function longestCommonSubstring(str1, str2) {
  const matrix = Array(str1.length + 1)
    .fill(0)
    .map(() => Array(str2.length + 1).fill(0));

  let maxLength = 0;
  let endIndex = 0;

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
        if (matrix[i][j] > maxLength) {
          maxLength = matrix[i][j];
          endIndex = i - 1; // or j - 1
        }
      }
    }
  }

  return str1.substr(endIndex - maxLength + 1, maxLength);
}
const str1 = "abcdef";
const str2 = "xyzdef";
const commonSubstring = longestCommonSubstring(str1, str2);
console.log(commonSubstring); // Output: "def"
