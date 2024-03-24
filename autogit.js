function longestCommonSubstring(str1, str2) {
    const dp = Array.from({ length: str1.length + 1 }, () => Array(str2.length + 1).fill(0));
    let maxLength = 0;
    let endIndex = 0;

    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            if (str1.charAt(i - 1) === str2.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > maxLength) {
                    maxLength = dp[i][j];
                    endIndex = i - 1;
                }
            } else {
                dp[i][j] = 0;
            }
        }
    }

    if (maxLength === 0) {
        return '';
    }

    return str1.substring(endIndex - maxLength + 1, endIndex + 1);
}

// Example
const str1 = 'abcdef';
const str2 = 'bcdeft';
console.log(longestCommonSubstring(str1, str2)); // Output: 'cdef'
