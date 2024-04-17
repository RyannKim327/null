function createLPSArray(pattern) {
    let lps = new Array(pattern.length).fill(0);
    let len = 0;
    let i = 1;

    while (i < pattern.length) {
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

function KMP(text, pattern) {
    let lps = createLPSArray(pattern);
    let i = 0;
    let j = 0;
    let indices = [];

    while (i < text.length) {
        if (text[i] === pattern[j]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            indices.push(i - j);
            j = lps[j - 1];
        } else if (i < text.length && text[i] !== pattern[j]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return indices;
}

// Example Usage
let text = "ABABDABACDABABCABAB";
let pattern = "ABABCABAB";

let indices = KMP(text, pattern);
console.log("Pattern found at indices:", indices);
