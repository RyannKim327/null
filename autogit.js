function longestCommonSubstring(str1, str2) {
  let maxLength = 0; // stores the length of longest common substring
  let endIndex = 0; // stores the index where the longest common substring ends
  const matrix = Array.from({ length: str1.length + 1 }, () =>
    Array.from({ length: str2.length + 1 }, () => 0)
  ); // initialize the matrix with zeros

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

  return str1.substr(endIndex - maxLength + 1, maxLength);
}

// Example usage:
const str1 = "abcdefg";
const str2 = "defgxyz";
const longestSubstring = longestCommonSubstring(str1, str2);
console.log(longestSubstring); // Output: "defg"
