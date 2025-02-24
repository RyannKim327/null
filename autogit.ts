function longestCommonSubstring(str1: string, str2: string): string {
    const m = str1.length, n = str2.length;
    let maxLength = 0;
    let endingIndex = 0;

    // Create a 2D array to store lengths of common substrings
    const dp: number[][] = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

    // Build the dp array
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > maxLength) {
                    maxLength = dp[i][j];
                    endingIndex = i; // track the ending index of the substring
                }
            }
        }
    }

    // Return the longest common substring using the ending index and max length
    return str1.substring(endingIndex - maxLength, endingIndex);
}

// Example usage
const str1 = "abcdxyz";
const str2 = "xyzabcd";
console.log(longestCommonSubstring(str1, str2)); // Output: "abcd"
