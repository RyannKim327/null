function longestCommonSubstring(str1: string, str2: string): string {
    // Create a 2D matrix to store substring match lengths
    const matrix: number[][] = Array(str1.length + 1)
        .fill(null)
        .map(() => Array(str2.length + 1).fill(0));
    
    let maxLength = 0;
    let endIndex = 0;

    // Populate the matrix
    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1] + 1;
                
                // Track the maximum length and ending position
                if (matrix[i][j] > maxLength) {
                    maxLength = matrix[i][j];
                    endIndex = i - 1;
                }
            }
        }
    }

    // Extract the longest common substring
    return str1.substring(endIndex - maxLength + 1, endIndex + 1);
}

// Example usage
console.log(longestCommonSubstring("ABABC", "BABCA")); // Output: "BABC"
console.log(longestCommonSubstring("hello", "world")); // Output: ""
