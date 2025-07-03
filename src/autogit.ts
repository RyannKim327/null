function longestCommonSubstring(str1: string, str2: string): string {
  const len1 = str1.length;
  const len2 = str2.length;
  
  // Create a 2D array initialized with zeros
  const dp: number[][] = new Array(len1 + 1).fill(0).map(() => new Array(len2 + 1).fill(0));
  
  let maxLength = 0;
  let endIndexStr1 = 0; // To track the end index of the LCS in str1
  
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        // Update maximum length and position
        if (dp[i][j] > maxLength) {
          maxLength = dp[i][j];
          endIndexStr1 = i; // end index in str1 (exclusive)
        }
      } else {
        dp[i][j] = 0;
      }
    }
  }
  
  // Extract the longest common substring
  if (maxLength === 0) {
    return ""; // No common substring found
  }
  const startIndex = endIndexStr1 - maxLength;
  return str1.substring(startIndex, endIndexStr1);
}

// Example usage:
const strA = "abcde12345";
const strB = "123xyzabc";

console.log(longestCommonSubstring(strA, strB)); // Output: "123"
