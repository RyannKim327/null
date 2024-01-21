function findLongestCommonSubstring(str1, str2) {
  // Initialize a 2-dimensional array to store the lengths of common substrings
  const lengths = Array(str1.length + 1)
    .fill(0)
    .map(() => Array(str2.length + 1).fill(0));

  let maxLength = 0; // length of longest common substring
  let endIndex = 0; // end index of longest common substring in str1

  // Iterate through the strings to fill the lengths matrix
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        // If the characters match, increment the length of the common substring
        lengths[i][j] = lengths[i - 1][j - 1] + 1;
        if (lengths[i][j] > maxLength) {
          // If the new substring is longer, update the maxLength and endIndex
          maxLength = lengths[i][j];
          endIndex = i - 1;
        }
      }
    }
  }

  // Extract the longest common substring using the endIndex
  const longestCommonSubstring = str1.substr(endIndex - maxLength + 1, maxLength);
  return longestCommonSubstring;
}

// Example usage:
const str1 = "abcdefg";
const str2 = "defgxyz";
const longestCommonSubstring = findLongestCommonSubstring(str1, str2);
console.log(longestCommonSubstring); // Output: "defg"
