function longestCommonSubsequence(str1, str2) {
    // Initialize a matrix of size (str1.length + 1) x (str2.length + 1) with all values set to 0
    const matrix = new Array(str1.length + 1).fill(null).map(() => new Array(str2.length + 1).fill(0));

    // Build the matrix using dynamic programming
    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                matrix[i][j] = 1 + matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
            }
        }
    }

    // Reconstruct the longest common subsequence from the matrix
    let i = str1.length, j = str2.length;
    let lcs = '';
    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            lcs = str1[i - 1] + lcs;
            i--;
            j--;
        } else if (matrix[i - 1][j] >= matrix[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }

    return lcs;
}

// Test the function with two example strings
const str1 = "AGGTAB";
const str2 = "GXTXAYB";

console.log("Longest Common Subsequence: " + longestCommonSubsequence(str1, str2));
