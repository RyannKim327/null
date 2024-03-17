function longestCommonSubsequence(str1, str2) {
    let m = str1.length;
    let n = str2.length;
    
    let lcs = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

     for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0 || j === 0) {
                lcs[i][j] = 0;
            } else if (str1[i - 1] === str2[j - 1]) {
                lcs[i][j] = lcs[i - 1][j - 1] + 1;
            } else {
                lcs[i][j] = Math.max(lcs[i - 1][j], lcs[i][j - 1]);
            }
        }
    }

    let index = lcs[m][n];
    let lcsString = '';

    let i = m, j = n;
    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            lcsString = str1[i - 1] + lcsString;
            i--;
            j--;
            index--;
        } else if (lcs[i - 1][j] > lcs[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }

    return lcsString;
}

let str1 = "AGGTAB";
let str2 = "GXTXAYB";
console.log(longestCommonSubsequence(str1, str2)); // Output: GTAB
