function longestCommonSubstring(str1, str2) {
    // Initialize a 2D array to store the length of common substrings
    const dp = Array(str1.length + 1).fill(0).map(() => Array(str2.length + 1).fill(0));
    let maxLength = 0;
    let endIndex = 0;

    // Populate the 2D array with the length of common substrings
    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > maxLength) {
                    maxLength = dp[i][j];
                    endIndex = i - 1;
                }
            }
        }
    }

    // Extract the longest common substring using the end index
    const longestCommonSubstr = str1.substring(endIndex - maxLength + 1, endIndex + 1);

    return longestCommonSubstr;
}

// Test the function with two strings
const str1 = "abcdefg";
const str2 = "bcde";
console.log(longestCommonSubstring(str1, str2)); // Output: "cde"
