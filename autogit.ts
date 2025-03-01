function longestCommonSubstring(str1: string, str2: string): string {
    const len1 = str1.length;
    const len2 = str2.length;

    // Create a 2D array to store lengths of longest common suffixes
    const dp: number[][] = Array.from({ length: len1 + 1 }, () => Array(len2 + 1).fill(0));

    let maxLength = 0;
    let endIndexStr1 = 0; // To keep track of ending index of the substring in str1

    // Build the dp array
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > maxLength) {
                    maxLength = dp[i][j];
                    endIndexStr1 = i; // Update the ending index of the substring in str1
                }
            }
        }
    }

    // Return the longest common substring
    return str1.substring(endIndexStr1 - maxLength, endIndexStr1);
}

// Example usage:
const str1 = "helloabc";
const str2 = "abcxyz";
const result = longestCommonSubstring(str1, str2);
console.log("Longest common substring:", result);  // Output: "abc"
