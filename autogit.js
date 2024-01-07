function findLongestCommonSubstring(str1, str2) {
  let longestSubstring = '';

  for (let i = 0; i < str1.length; i++) {
    for (let j = i + 1; j <= str1.length; j++) {
      let substring = str1.slice(i, j);

      if (str2.includes(substring) && substring.length > longestSubstring.length) {
        longestSubstring = substring;
      }
    }
  }

  return longestSubstring;
}
function findLongestCommonSubstring(str1, str2) {
  let maxLength = 0; // length of the longest common substring
  let endIndex = 0; // end index of the longest common substring in str1
  const matrix = Array.from({ length: str1.length + 1 }, () =>
    Array.from({ length: str2.length + 1 }, () => 0)
  );

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;

        if (matrix[i][j] > maxLength) {
          maxLength = matrix[i][j];
          endIndex = i - 1;
        }
      } else {
        matrix[i][j] = 0;
      }
    }
  }

  return str1.slice(endIndex - maxLength + 1, endIndex + 1);
}
