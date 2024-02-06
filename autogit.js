function longestCommonSubstring(string1, string2) {
  const matrix = Array(string1.length + 1).fill(0).map(() => Array(string2.length + 1).fill(0));
  let maxLength = 0;
  let endIndex = 0;

  for (let i = 1; i <= string1.length; i++) {
    for (let j = 1; j <= string2.length; j++) {
      if (string1[i - 1] === string2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;

        if (matrix[i][j] > maxLength) {
          maxLength = matrix[i][j];
          endIndex = i - 1;
        }
      }
    }
  }

  return string1.substr(endIndex - maxLength + 1, maxLength);
}
const string1 = 'abcdxyz';
const string2 = 'xyzabcd';
const result = longestCommonSubstring(string1, string2);
console.log(result); // Output: "abcd"
