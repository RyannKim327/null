function longestCommonSubstring(s1: string, s2: string): string {
    const len1 = s1.length;
    const len2 = s2.length;
    let maxLength = 0;
    let endIndex = 0;

    // Create a matrix to store lengths of longest common suffixes
    const dp: number[][] = Array.from({ length: len1 + 1 }, () => Array(len2 + 1).fill(0));

    // Build the matrix
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > maxLength) {
                    maxLength = dp[i][j];
                    endIndex = i;  // endIndex of the longest common substring in s1
                }
            }
        }
    }

    // Extract the longest common substring
    if (maxLength === 0) {
        return ''; // No common substring
    }

    return s1.substring(endIndex - maxLength, endIndex);
}

// Example usage:
const string1 = "abcde";
const string2 = "abfce";
console.log(longestCommonSubstring(string1, string2)); // Output: "ab"
