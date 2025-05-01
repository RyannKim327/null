function longestCommonSubstring(s1: string, s2: string): string {
  const len1 = s1.length;
  const len2 = s2.length;
  // dp[i][j] will hold length of longest common suffix of
  // s1[0..i-1] and s2[0..j-1]
  const dp: number[][] = Array.from({ length: len1 + 1 }, () =>
    Array(len2 + 1).fill(0)
  );

  let maxLength = 0;
  let endIndex = 0; // To track end index of the longest substring in s1

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        if (dp[i][j] > maxLength) {
          maxLength = dp[i][j];
          endIndex = i; // end index in s1
        }
      }
    }
  }

  return s1.substring(endIndex - maxLength, endIndex);
}
const str1 = "xabxac";
const str2 = "abcabxabcd";

console.log(longestCommonSubstring(str1, str2));  // Output: "abxa"
