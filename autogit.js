function longestCommonSubstring(str1, str2) {
    let dp = Array.from({ length: str1.length + 1 }, () => Array(str2.length + 1).fill(0));
    let maxLength = 0;
    let endIdx = 0;

    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                if (dp[i][j] > maxLength) {
                    maxLength = dp[i][j];
                    endIdx = i - 1;
                }
            }
        }
    }

    if (maxLength === 0) {
        return null;
    }

    return str1.substr(endIdx - maxLength + 1, maxLength);
}

let str1 = "abcdef";
let str2 = "bcdeft";
console.log(longestCommonSubstring(str1, str2));  // Output: "cdef"
