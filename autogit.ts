function longestCommonSubstring(s1: string, s2: string): string {
  const m = s1.length;
  const n = s2.length;
  // dp[i][j] will store the length of longest common suffix of s1[0..i-1] and s2[0..j-1]
  const dp: number[][] = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
  
  let maxLength = 0;
  let endIndex = 0;  // end index of substring in s1

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        if (dp[i][j] > maxLength) {
          maxLength = dp[i][j];
          endIndex = i - 1;
        }
      }
      // else dp[i][j] stays 0 (initialized)
    }
  }

  // extract the longest common substring from s1 using endIndex and maxLength
  return s1.substring(endIndex - maxLength + 1, endIndex + 1);
}
const str1 = "abcdefg";
const str2 = "xyzabcde";
console.log(longestCommonSubstring(str1, str2));  // Output: "abcd"
