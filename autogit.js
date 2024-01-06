function longestCommonSubstring(str1, str2) {
  let maxLength = 0; // length of longest common substring
  let endIndex = 0; // ending index of longest common substring in str1

  // Create a matrix to store the lengths of common substrings
  const matrix = Array(str1.length + 1).fill(0).map(() => Array(str2.length + 1).fill(0));

  // Iterate over each character of the strings
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1; // increment the length of common substring
        if (matrix[i][j] > maxLength) {
          maxLength = matrix[i][j];
          endIndex = i - 1;
        }
      } else {
        matrix[i][j] = 0; // no common substring, so reset the length to zero
      }
    }
  }

  // Extract the longest common substring from str1 using endIndex and maxLength
  const longestSubstring = str1.substr(endIndex - maxLength + 1, maxLength);

  return longestSubstring;
}

// Example usage
const string1 = "JavaScript is awesome!";
const string2 = "I love JavaScript.";

const commonSubstring = longestCommonSubstring(string1, string2);
console.log(commonSubstring); // Output: " JavaScript "
