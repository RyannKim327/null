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
    const results = [];

    let i = 0;
    let j = 0;

    while (i < n) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === m) {
            results.push(i - j);
            j = lps[j - 1];
        } else if (i < n && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return results;
}

// Test the KMP algorithm
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const matches = KMPSearch(text, pattern);

if (matches.length > 0) {
    console.log("Pattern found at index: " + matches[0]);
} else {
    console.log("Pattern not found in the text.");
}
