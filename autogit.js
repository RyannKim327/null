function longestCommonSubstring(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  const dp = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(0));

  let maxLength = 0; // Length of longest common substring
  let endIndex = 0; // End index of longest common substring in str1

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
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

  if (maxLength === 0) {
    return ''; // No common substring exists
  }

  // Extract the longest common substring from str1 using the endIndex
  const longestSubstring = str1.substr(endIndex - maxLength + 1, maxLength);
  return longestSubstring;
}

// Example usage:
const str1 = 'abcdefg';
const str2 = 'xyzabcd';
const longestSubstring = longestCommonSubstring(str1, str2);
console.log(longestSubstring); // Output: 'abcd'
