function computeLPSArray(pattern) {
    const patternLength = pattern.length;
    let lps = [0];
    let len = 0;
    let i = 1;

    while (i < patternLength) {
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
    const textLength = text.length;
    const patternLength = pattern.length;
    const lps = computeLPSArray(pattern);
    let i = 0;
    let j = 0;
    let indices = [];

    while (i < textLength) {
        if (text[i] === pattern[j]) {
            i++;
            j++;
        }

        if (j === patternLength) {
            indices.push(i - j);
            j = lps[j - 1];
        } else if (i < textLength && text[i] !== pattern[j]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return indices;
}

// Test the KMP algorithm
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const indices = KMP(text, pattern);
console.log("Pattern found at indices:", indices);
