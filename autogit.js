function longestCommonSubstring(str1, str2) {
    const matrix = Array(str1.length + 1).fill(null).map(() => Array(str2.length + 1).fill(0));
    let longestSubstring = 0;
    let longestSubstringEndIndex = 0;

    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1] + 1;

                if (matrix[i][j] > longestSubstring) {
                    longestSubstring = matrix[i][j];
                    longestSubstringEndIndex = i - 1;
                }
            }
        }
    }

    if (longestSubstring === 0) {
        return '';
    }

    return str1.slice(longestSubstringEndIndex - longestSubstring + 1, longestSubstringEndIndex + 1);
}

// Example usage
const str1 = 'abcdef';
const str2 = 'bcdeft';
console.log(longestCommonSubstring(str1, str2));  // Output: 'cdef'
