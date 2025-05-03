function longestCommonSubsequence(text1: string, text2: string): string {
  const m = text1.length;
  const n = text2.length;

  // dp[i][j] will hold the length of LCS of text1[0..i-1] and text2[0..j-1]
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  // Fill dp array
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Reconstruct LCS from dp array
  let i = m, j = n;
  const lcsChars: string[] = [];

  while (i > 0 && j > 0) {
    if (text1[i - 1] === text2[j - 1]) {
      lcsChars.push(text1[i - 1]);
      i--;
      j--;
    } else if (dp[i - 1][j] >= dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  // Since we collected the characters backwards, reverse them before joining
  return lcsChars.reverse().join('');
}
const str1 = "ABCBDAB";
const str2 = "BDCAB";
console.log(longestCommonSubsequence(str1, str2)); // Output: "BCAB"
