function longestCommonSubstring(s1: string, s2: string): string {
    const m = s1.length;
    const n = s2.length;

    // Create a 2D array to store lengths of longest common suffixes
    const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    let longestLength = 0; // Length of longest common substring
    let endIndex = 0;      // End index of longest common substring in s1

    // Build the dp array
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1; // Extend the common substring
                if (dp[i][j] > longestLength) {
                    longestLength = dp[i][j];
                    endIndex = i; // Store the end index of the substring in s1
                }
            }
        }
    }

    // Extract the longest common substring
    return longestLength > 0 ? s1.substring(endIndex - longestLength, endIndex) : "";
}

// Example usage
const str1 = "abcxyz";
const str2 = "xyzabc";
const result = longestCommonSubstring(str1, str2);
console.log(result); // Output: "xyz"
