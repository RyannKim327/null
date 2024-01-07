function longestCommonSubstring(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  let maxLength = 0;
  let endIndex = 0;

  // Create a 2D table to store the lengths of common substrings
  const table = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  // Fill the table based on the LCS algorithm
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        table[i][j] = table[i - 1][j - 1] + 1;
        if (table[i][j] > maxLength) {
          maxLength = table[i][j];
          endIndex = i - 1;
        }
      } else {
        table[i][j] = 0;
      }
    }
  }

  // Extract the longest common substring by its endIndex and maxLength
  const longestSubstring = str1.substr(endIndex - maxLength + 1, maxLength);
  return longestSubstring;
}

// Example usage:
const str1 = "abcdxyze";
const str2 = "xyzabcde";
const longestSubstring = longestCommonSubstring(str1, str2);
console.log(longestSubstring); // Output: "abc"
