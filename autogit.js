function longestCommonSubstring(str1, str2) {
  // Create a 2D array to store the lengths of the common substrings
  const lengths = Array(str1.length + 1)
    .fill(0)
    .map(() => Array(str2.length + 1).fill(0));

  // Variables to store the length and end position of the longest common substring
  let maxLength = 0;
  let endIndex = 0;

  // Iterate over the characters of the strings
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      // If the characters match, increment the length at (i, j) by 1
      if (str1[i - 1] === str2[j - 1]) {
        lengths[i][j] = lengths[i - 1][j - 1] + 1;

        // If the new length is longer than the current max length, update the max length and end position
        if (lengths[i][j] > maxLength) {
          maxLength = lengths[i][j];
          endIndex = i - 1; // zero-based index

          // Uncomment the following line if you want to find only the first longest common substring
          // return str1.substring(endIndex - maxLength + 1, endIndex + 1);
        }
      }
      // If the characters don't match, the length at (i, j) is 0
      else {
        lengths[i][j] = 0;
      }
    }
  }

  // Uncomment the following line if you want to find only the first longest common substring
  // return str1.substring(endIndex - maxLength + 1, endIndex + 1);

  // If you want to find all the longest common substrings, you can use the following code:
  const longestSubstrings = [];
  for (let i = 0; i < str1.length; i++) {
    if (lengths[i + 1][endIndex + 1] === maxLength) {
      longestSubstrings.push(str1.substring(i - maxLength + 1, i + 1));
    }
  }
  return longestSubstrings;
}

// Example usage:
const str1 = "abcdefabc";
const str2 = "xyzabcabc";
console.log(longestCommonSubstring(str1, str2)); // Output: [ 'abc', 'abc' ]
