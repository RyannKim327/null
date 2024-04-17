function computeLPSArray(pattern, lps) {
    let len = 0;
    lps[0] = 0;
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
}

function KMPSearch(text, pattern) {
    const lps = new Array(pattern.length).fill(0);
    computeLPSArray(pattern, lps);

    let i = 0; // index for text[]
    let j = 0; // index for pattern[]
    
    while (i < text.length) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }
        if (j === pattern.length) {
            console.log("Pattern found at index " + (i - j));
            j = lps[j - 1];
        } else if (i < text.length && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i = i + 1;
            }
        }
    }
}

let text = "ABABDABACDABABCABAB";
let pattern = "ABABCABAB";
KMPSearch(text, pattern);
