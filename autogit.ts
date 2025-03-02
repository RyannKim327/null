function longestCommonSubstring(str1: string, str2: string): string {
    const len1 = str1.length;
    const len2 = str2.length;
    let maxLength = 0;
    let endingIndex = 0;

    // Create a 2D array to store lengths of longest common suffixes
    const dp: number[][] = Array.from({ length: len1 + 1 }, () => Array(len2 + 1).fill(0));

    // Build the DP matrix
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > maxLength) {
                    maxLength = dp[i][j];
                    endingIndex = i; // Ending index of longest common substring in str1
                }
            }
        }
    }

    // Extract the longest common substring
    if (maxLength === 0) {
        return ""; // No common substring found
    }
    
    return str1.substring(endingIndex - maxLength, endingIndex);
}

// Example usage
const string1 = "abcdef";
const string2 = "zabcfxy";
const result = longestCommonSubstring(string1, string2);
console.log(result); // Output: "abc"
