function longestCommonSubstring(s1: string, s2: string): string {
  const len1 = s1.length;
  const len2 = s2.length;

  // Create a 2D array to store lengths of longest common suffixes
  const dp: number[][] = Array.from({ length: len1 + 1 }, () =>
    new Array(len2 + 1).fill(0)
  );

  let maxLength = 0;
  let endIndex = 0; // track where the max substring ends in s1

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        if (dp[i][j] > maxLength) {
          maxLength = dp[i][j];
          endIndex = i; // update the end index of the substring in s1
        }
      }
    }
  }

  // Extract the longest common substring from s1
  return s1.substring(endIndex - maxLength, endIndex);
}
const s1 = "abcde";
const s2 = "abfde";

console.log(longestCommonSubstring(s1, s2)); // Output: "de"
