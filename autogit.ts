function longestCommonSubstring(s1: string, s2: string): string {
    // Create a 2D array to store lengths of longest common suffixes
    const m = s1.length;
    const n = s2.length;
    const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    let longestLength = 0;  // Length of LCS
    let endIndex = 0;       // End index of the LCS in s1

    // Build the dp array
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;

                // Update longestLength and endIndex if this is the longest found so far
                if (dp[i][j] > longestLength) {
                    longestLength = dp[i][j];
                    endIndex = i; // this is the end index of the substring in s1
                }
            }
        }
    }

    // If no common substring is found
    if (longestLength === 0) {
        return '';
    }
    
    // Extract the longest common substring
    return s1.substring(endIndex - longestLength, endIndex);
}

// Example usage:
const string1 = "abcdfgh";
const string2 = "abedfgh";
const lcs = longestCommonSubstring(string1, string2);
console.log(`Longest Common Substring: '${lcs}'`); // Output: 'dfg'
