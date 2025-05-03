function longestCommonSubstring(s1: string, s2: string): string {
    const len1 = s1.length;
    const len2 = s2.length;
    // DP table where dp[i][j] represents length of longest common suffix of s1[i-1] and s2[j-1]
    const dp: number[][] = Array.from({ length: len1 + 1 }, () => Array(len2 + 1).fill(0));

    let maxLength = 0;
    let maxEndIndexS1 = 0;

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > maxLength) {
                    maxLength = dp[i][j];
                    maxEndIndexS1 = i - 1;  // store the ending index of substring in s1
                }
            }
        }
    }

    // Extract the longest common substring from s1 using the max length and index
    return s1.slice(maxEndIndexS1 - maxLength + 1, maxEndIndexS1 + 1);
}
const s1 = "abcdefg";
const s2 = "xyzabcde";
console.log(longestCommonSubstring(s1, s2));  // Output: "abcde"
