function longestCommonSubstring(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;
    
    const dp = Array(len1 + 1).fill(0).map(() => Array(len2 + 1).fill(0));
    let longestLength = 0;
    let endIndex = 0;
    
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > longestLength) {
                    longestLength = dp[i][j];
                    endIndex = i - 1;
                }
            }
        }
    }
    
    if (longestLength === 0) {
        return '';
    }
    
    return str1.substring(endIndex - longestLength + 1, endIndex + 1);
}

// Example usage
const str1 = 'abcdef';
const str2 = 'bcdeft';
console.log(longestCommonSubstring(str1, str2)); // Output: 'bcde'
