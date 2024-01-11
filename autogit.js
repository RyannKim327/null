function longestCommonSubstring(str1, str2) {
  if (!str1 || !str2) return ''; // Handles empty strings
  const m = str1.length;
  const n = str2.length;
  
  // Create a 2D array to store the lengths of the common substrings
  const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));
  
  let maxLength = 0; // Length of the longest common substring
  let endIndex = 0; // End index of the longest common substring in str1
  
  // Iterate over the strings and fill the dp array
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 0; // No common substring
      } else if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        if (dp[i][j] > maxLength) {
          maxLength = dp[i][j];
          endIndex = i - 1;
        }
      } else {
        dp[i][j] = 0;
      }
    }
  }
  
  // Extract the longest common substring from str1 using the endIndex
  const longestSubstring = str1.substr(endIndex - maxLength + 1, maxLength);
  return longestSubstring;
}

// Example usage
const str1 = "HelloWorld";
const str2 = "HiWorld";
const result = longestCommonSubstring(str1, str2);
console.log(result); // Output: "World"
