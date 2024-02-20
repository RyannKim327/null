function longestCommonSubstring(str1, str2) {
    const matrix = Array.from({ length: str1.length + 1 }, () => Array.from({ length: str2.length + 1 }, () => 0));
    let maxLength = 0;
    let endIndex = 0;

    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1] + 1;
                if (matrix[i][j] > maxLength) {
                    maxLength = matrix[i][j];
                    endIndex = i - 1;
                }
            } else {
                matrix[i][j] = 0;
            }
        }
    }

    if (maxLength === 0) {
        return '';
    }

    return str1.substring(endIndex - maxLength + 1, endIndex + 1);
}

const str1 = 'JavaScript is awesome';
const str2 = 'Python is awesome too';

console.log(longestCommonSubstring(str1, str2)); // Output: ' is awesome'
