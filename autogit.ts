function longestCommonSubstring(str1: string, str2: string): string {
  const len1 = str1.length;
  const len2 = str2.length;
  
  // Initialize the DP table
  const dp: number[][] = Array.from({ length: len1 + 1 }, () => Array(len2 + 1).fill(0));
  
  let maxLength = 0;
  let endIndexStr1 = 0;
  
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        if (dp[i][j] > maxLength) {
          maxLength = dp[i][j];
          endIndexStr1 = i - 1; // track the end index in str1
        }
      } else {
        dp[i][j] = 0;
      }
    }
  }
  
  // Extract the substring
  return str1.substring(endIndexStr1 - maxLength + 1, endIndexStr1 + 1);
}
const strA = "abcdef";
const strB = "zabfce";

console.log(longestCommonSubstring(strA, strB)); // Output: "abc"
