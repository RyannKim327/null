function longestCommonSubstring(str1, str2) {
  const dp = Array(str1.length + 1).fill(0).map(() => Array(str2.length + 1).fill(0));
  let maxLen = 0;
  let endIndex = 0;

  for (let ch1 = 1; ch1 <= str1.length; ch1++) {
    for (let ch2 = 1; ch2 <= str2.length; ch2++) {
      if (str1[ch1 - 1] === str2[ch2 - 1]) {
        dp[ch1][ch2] = dp[ch1 - 1][ch2 - 1] + 1;
        if (dp[ch1][ch2] > maxLen) {
          maxLen = dp[ch1][ch2];
          endIndex = ch1;
        }
      }
    }
  }

  return str1.substring(endIndex - maxLen, endIndex);
}

// Example usage:
const str1 = "abcde";
const str2 = "bcdf";
const longestSubstring = longestCommonSubstring(str1, str2);
console.log(longestSubstring); // Output: "bcd"
