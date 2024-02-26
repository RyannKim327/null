function computeLPSArray(pattern) {
    const lps = Array(pattern.length).fill(0);
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

function KMPSearch(text, pattern) {
    const n = text.length;
    const m = pattern.length;
    const lps = computeLPSArray(pattern);

    let i = 0;
    let j = 0;
    const indices = [];

    while (i < n) {
        if (text[i] === pattern[j]) {
            i++;
            j++;
        }

        if (j === m) {
            indices.push(i - j);
            j = lps[j - 1];
        } else if (i < n && text[i] !== pattern[j]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return indices;
}

const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const indices = KMPSearch(text, pattern);

if (indices.length > 0) {
    console.log(`Pattern found at index: ${indices}`);
} else {
    console.log("Pattern not found");
}
