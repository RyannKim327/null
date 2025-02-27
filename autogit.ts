function longestCommonSubstring(s1: string, s2: string): string {
    const m = s1.length;
    const n = s2.length;
    let maxLength = 0;
    let endingIndex = 0;

    // Create a 2D array to hold lengths of common substrings
    const dp: number[][] = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

    // Build the dp array
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1; // Increment the length of common substring
                if (dp[i][j] > maxLength) {
                    maxLength = dp[i][j];
                    endingIndex = i; // Store the ending index of the longest common substring
                }
            }
        }
    }

    // Retrieve the longest common substring using the ending index and maxLength
    return maxLength > 0 ? s1.substring(endingIndex - maxLength, endingIndex) : "";
}

// Example usage
const s1 = "abcde";
const s2 = "abfcde";
const result = longestCommonSubstring(s1, s2);
console.log(result); // Output: "cde"
