function longestCommonSubstring(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  // Create a table to store lengths of longest common suffixes
  const table = [];
  for (let i = 0; i <= m; i++) {
    table.push(new Array(n + 1).fill(0));
  }

  let maxLength = 0; // length of the longest common substring
  let endIndex = 0; // end index of the longest common substring

  // Fill the table and track the length and end index of longest common substring
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

  // Extract the longest common substring using the end index and length
  return str1.substring(endIndex - maxLength + 1, endIndex + 1);
}

// Example usage:
const str1 = "ABCDXYZ";
const str2 = "XYZABCD";
const longestSubstring = longestCommonSubstring(str1, str2);
console.log(longestSubstring); // Output: "ABCD"
