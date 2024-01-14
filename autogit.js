function calculateLPS(pattern) {
    const lps = [0];
    let len = 0; // keeps track of the length of the previous longest prefix suffix

    for (let i = 1; i < pattern.length; ) {
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

function searchKMP(text, pattern) {
    const lps = calculateLPS(pattern);
    const result = [];

    let i = 0; // index for text
    let j = 0; // index for pattern

    while (i < text.length) {
        if (text[i] === pattern[j]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            result.push(i - j);
            j = lps[j - 1];
        } else if (i < text.length && text[i] !== pattern[j]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return result;
}

// Example usage:
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const matches = searchKMP(text, pattern);
console.log(matches); // Output: [10]
