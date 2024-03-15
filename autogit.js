function longestCommonSubstring(str1, str2) {
    const table = Array(str1.length + 1).fill(0).map(() => Array(str2.length + 1).fill(0));
    let longest = 0;
    let endIndex = 0;

    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                table[i][j] = table[i - 1][j - 1] + 1;
                if (table[i][j] > longest) {
                    longest = table[i][j];
                    endIndex = i - 1;
                }
            } else {
                table[i][j] = 0;
            }
        }
    }

    return str1.substring(endIndex - longest + 1, endIndex + 1);
}

const str1 = "abcdefg";
const str2 = "xbcde";
console.log(longestCommonSubstring(str1, str2)); // Output: "bcde"
