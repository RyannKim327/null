function longestCommonSubstring(str1: string, str2: string): string {
    const len1 = str1.length;
    const len2 = str2.length;
    let maxLen = 0;
    let endIndexStr1 = 0;

    // Create a 2D array initialized with zeros
    const dp: number[][] = Array.from({ length: len1 + 1 }, () => Array(len2 + 1).fill(0));

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > maxLen) {
                    maxLen = dp[i][j];
                    endIndexStr1 = i - 1; // last character index of the substring in str1
                }
            }
        }
    }

    return maxLen > 0 ? str1.slice(endIndexStr1 - maxLen + 1, endIndexStr1 + 1) : '';
}

// Example usage:
const s1 = "ABABC";
const s2 = "BABCA";
console.log(longestCommonSubstring(s1, s2)); // Output: "BABC"
