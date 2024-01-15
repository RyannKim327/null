function longestCommonSubstring(str1, str2) {
  const matrix = Array(str1.length + 1);

  let longestSubstring = '';
  let maxLength = 0;

  for (let i = 0; i <= str1.length; i++) {
    matrix[i] = Array(str2.length + 1);

    for (let j = 0; j <= str2.length; j++) {
      if (i === 0 || j === 0) {
        matrix[i][j] = 0;
      } else if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
        if (matrix[i][j] > maxLength) {
          maxLength = matrix[i][j];
          longestSubstring = str1.substring(i - maxLength, i);
        }
      } else {
        matrix[i][j] = 0;
      }
    }
  }

  return longestSubstring;
}

// Example usage:
const str1 = 'javascript';
const str2 = 'typescript';
const longestSubstr = longestCommonSubstring(str1, str2);
console.log(longestSubstr); // Output: "script"
