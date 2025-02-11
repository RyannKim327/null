function longestCommonSubstring(s1: string, s2: string): string {
    const m = s1.length;
    const n = s2.length;
    let maxLength = 0;
    let endingIndex = 0;

    // Create a 2D array to store lengths of longest common suffixes
    const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Build the dp table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                
                // Update maxLength and endingIndex if we found a longer substring
                if (dp[i][j] > maxLength) {
                    maxLength = dp[i][j];
                    endingIndex = i; // store the ending index of the substring in s1
                }
            }
        }
    }

    // If no common substring found
    if (maxLength === 0) return "";

    // Return the longest common substring
    return s1.substring(endingIndex - maxLength, endingIndex);
}

// Example usage
const str1 = "abcdxyz";
const str2 = "xyzabcd";
const result = longestCommonSubstring(str1, str2);
console.log(result); // Output: "abcd"
