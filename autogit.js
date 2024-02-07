function findLongestCommonSubstring(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  
  // Create a 2D table to store the lengths of common substrings
  const table = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));
  
  let maxLength = 0;  // Length of the longest common substring
  let endIndex = 0;   // Index of the last character of the common substring
  
  // Filling the table
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
  
  // Extract the longest common substring from the original strings
  const longestSubstr = str1.substr(endIndex - maxLength + 1, maxLength);
  
  return longestSubstr;
}

// Example usage
const str1 = "abcdefg";
const str2 = "abdfg";
const longestSubstring = findLongestCommonSubstring(str1, str2);
console.log(longestSubstring);  // Output: "dfg"
