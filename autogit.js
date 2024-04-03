function computeLPSArray(pattern) {
    const lps = [0];
    let len = 0;
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

function KMPSearch(text, pattern) {
    const n = text.length;
    const m = pattern.length;

    const lps = computeLPSArray(pattern);

    let i = 0; // index for text
    let j = 0; // index for pattern

    while (i < n) {
        if (text[i] === pattern[j]) {
            i++;
            j++;
        }

        if (j === m) {
            console.log("Found pattern at index " + (i - j));
            j = lps[j - 1];
        } else if (i < n && text[i] !== pattern[j]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i = i + 1;
            }
        }
    }
}

// Test the algorithm
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

KMPSearch(text, pattern);
