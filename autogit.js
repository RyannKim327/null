function longestCommonSubstring(str1, str2) {
    let matrix = Array(str1.length + 1).fill(0).map(() => Array(str2.length + 1).fill(0));
    let longest = 0;
    let longestIndex = 0;

    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1] + 1;
                if (matrix[i][j] > longest) {
                    longest = matrix[i][j];
                    longestIndex = i;
                }
            } else {
                matrix[i][j] = 0;
            }
        }
    }

    if (longest === 0) {
        return '';
    }

    return str1.slice(longestIndex - longest, longestIndex);
}

// Example usage
let str1 = "abcdefg";
let str2 = "zbcdf";
let result = longestCommonSubstring(str1, str2);
console.log(result); // Output: "bcd"
