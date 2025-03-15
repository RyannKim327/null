function longestCommonSubstring(str1: string, str2: string): string {
    const m = str1.length;
    const n = str2.length;
    let maxLength = 0;
    let endingIndex = 0;

    // Create a 2D array to store lengths of longest common suffixes
    const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Build the dp array
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > maxLength) {
                    maxLength = dp[i][j];
                    endingIndex = i; // Update the ending index of the substring
                }
            }
        }
    }

    // Extract the longest common substring
    return maxLength > 0 ? str1.substring(endingIndex - maxLength, endingIndex) : '';
}

// Example usage:
const str1 = "abcdef";
const str2 = "zcdemf";
const result = longestCommonSubstring(str1, str2);
console.log(result); // Output: "cd"
