function longestCommonSubstring(s1: string, s2: string): string {
    const m = s1.length;
    const n = s2.length;
    let longest = 0;
    let endingIndex = 0;
    
    // Create a 2D array to store lengths of longest common suffixes
    const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Build the dp array
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > longest) {
                    longest = dp[i][j];
                    endingIndex = i; // Track the end index in the first string
                }
            }
        }
    }

    // If no common substring found
    if (longest === 0) return '';

    // Extract the longest common substring from the first string
    return s1.substring(endingIndex - longest, endingIndex);
}

// Example usage
const string1 = "abcde";
const string2 = "abfce";
console.log(longestCommonSubstring(string1, string2)); // Output: "ab"
