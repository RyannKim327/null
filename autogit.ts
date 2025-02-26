function longestCommonSubstring(str1: string, str2: string): string {
    const m = str1.length;
    const n = str2.length;
    let maxLength = 0;
    let endIndex = -1;

    // Create a 2D array to store lengths of longest common suffixes
    const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // If characters match
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                // Update maxLength and endIndex
                if (dp[i][j] > maxLength) {
                    maxLength = dp[i][j];
                    endIndex = i - 1; // End index of LCS in str1
                }
            } else {
                dp[i][j] = 0; // No common suffix
            }
        }
    }

    // If we found a common substring
    if (maxLength > 0) {
        return str1.substring(endIndex - maxLength + 1, endIndex + 1);
    }
    
    return ""; // No common substring found
}

// Example usage:
const string1 = "abcde";
const string2 = "abfce";
const result = longestCommonSubstring(string1, string2);
console.log(result); // Output: "ab"
