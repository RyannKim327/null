function longestCommonSubstring(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  let maxLength = 0; // Length of the longest common substring
  let endIndex = 0; // End index of the longest common substring

  // Create a 2D array to store the lengths of common substrings
  const lengths = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  // Iterate over the strings and fill in the lengths array
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        lengths[i][j] = lengths[i - 1][j - 1] + 1;
        if (lengths[i][j] > maxLength) {
          maxLength = lengths[i][j];
          endIndex = i - 1;
        }
      } else {
        lengths[i][j] = 0;
      }
    }
  }

  // Extract the longest common substring using the endIndex
  const longestSubstring = str1.substr(endIndex - maxLength + 1, maxLength);
  return longestSubstring;
}

// Example usage
const str1 = "abcdefg";
const str2 = "xyzabcd";
const result = longestCommonSubstring(str1, str2);
console.log(result); // Output: "abcd"
