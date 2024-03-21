function buildLPS(pattern) {
    const lps = [0];
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

function kmpSearch(text, pattern) {
    const n = text.length;
    const m = pattern.length;

    if (m === 0) {
        return 0;
    }

    const lps = buildLPS(pattern);

    let i = 0; // index for text
    let j = 0; // index for pattern

    while (i < n) {
        if (text[i] === pattern[j]) {
            i++;
            j++;
        }

        if (j === m) {
            return i - j; // pattern found
        } else if (i < n && text[i] !== pattern[j]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return -1; // pattern not found
}

// Example usage
const text = "abcxabcdabcdabcy";
const pattern = "abcdabcy";

const index = kmpSearch(text, pattern);
if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
