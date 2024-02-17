function longestCommonSubstring(str1, str2) {
    let longest = 0;
    let result = '';

    const matrix = Array(str1.length + 1).fill(null).map(() => Array(str2.length + 1).fill(null));

    for (let i = 0; i <= str1.length; i++) {
        for (let j = 0; j <= str2.length; j++) {
            if (i === 0 || j === 0) {
                matrix[i][j] = 0;
            } else if (str1[i - 1] === str2[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1] + 1;
                if (matrix[i][j] > longest) {
                    longest = matrix[i][j];
                    result = str1.slice(i - longest, i);
                }
            } else {
                matrix[i][j] = 0;
            }
        }
    }

    return result;
}

// Test the function
const str1 = "abcdefg";
const str2 = "xyzabcdedfg";
console.log(longestCommonSubstring(str1, str2)); // Output: "abcd"
