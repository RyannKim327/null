function kmpSearch(text, pattern) {
    // Step 1: Initialize variables
    let n = text.length;
    let m = pattern.length;
    let lps = computeLPSArray(pattern);
    let i = 0; // Index for text
    let j = 0; // Index for pattern
    let positions = [];

    // Step 2: Perform the search
    while (i < n) {
        if (pattern[j] === text[i]) {
            j++;
            i++;
        }

        if (j === m) {
            // Pattern found at index i - j
            positions.push(i - j);
            j = lps[j - 1];
        } else if (i < n && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return positions;
}
function computeLPSArray(pattern) {
    let m = pattern.length;
    let lps = new Array(m).fill(0);
    let len = 0;
    let i = 1;

    while (i < m) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
}
let text = "ABABDABACDABABCABAB";
let pattern = "ABABCABAB";
let positions = kmpSearch(text, pattern);

console.log("Pattern found at positions: ", positions);
