function computeLPSArray(pattern) {
    const lps = new Array(pattern.length).fill(0);
    let len = 0; // Length of the previous longest prefix suffix

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

function KMP(text, pattern) {
    const m = pattern.length;
    const n = text.length;
    const lps = computeLPSArray(pattern);
    
    let i = 0; // Index for text[]
    let j = 0; // Index for pattern[]

    const matches = [];

    while (i < n) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === m) {
            matches.push(i - j);
            j = lps[j - 1];
        } else if (i < n && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i = i + 1;
            }
        }
    }

    return matches;
}

// Example Usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const indexes = KMP(text, pattern);

console.log("Pattern found at indexes:", indexes);
