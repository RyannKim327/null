function kmpSearch(text, pattern) {
    let m = pattern.length;
    let n = text.length;

    if (m === 0) return 0;

    let lps = computeLPSArray(pattern);
    let i = 0; // index for text[]
    let j = 0; // index for pattern[]

    while (i < n) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === m) {
            return i - j;
        } else if (i < n && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return -1; // pattern not found
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

// Example usage
let text = "ABABCABABCDABABCABAB";
let pattern = "ABABCABAB";
let index = kmpSearch(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log(`Pattern not found`);
}
