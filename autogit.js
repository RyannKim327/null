function buildLPSArray(pattern) {
    const lps = new Array(pattern.length).fill(0);
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

    const lps = buildLPSArray(pattern);
    
    let i = 0;
    let j = 0;

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

    return -1;
}

// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const result = kmpSearch(text, pattern);

if (result === -1) {
    console.log("Pattern not found in the text");
} else {
    console.log(`Pattern found at index ${result}`);
}
