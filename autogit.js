function findLongestCommonSubstring(string1, string2) {
  let maxLength = 0;
  let endIndex = 0;
  const dp = [];

  for (let i = 0; i <= string1.length; i++) {
    dp[i] = new Array(string2.length + 1).fill(0);
    for (let j = 0; j <= string2.length; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 0;
      } else if (string1[i - 1] === string2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        if (dp[i][j] > maxLength) {
          maxLength = dp[i][j];
          endIndex = i;
        }
      } else {
        dp[i][j] = 0;
      }
    }
  }

  return string1.slice(endIndex - maxLength, endIndex);
}

// Example usage
const string1 = "abcdef";
const string2 = "abdf";

console.log(findLongestCommonSubstring(string1, string2)); // Output: "ab"
