function computeLPSArray(pattern) {
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

function KMPSearch(text, pattern) {
    let n = text.length;
    let m = pattern.length;
    let lps = computeLPSArray(pattern);
    
    let i = 0; // index for text
    let j = 0; // index for pattern
    
    while (i < n) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }
        
        if (j === m) {
            console.log("Pattern found at index " + (i - j));
            j = lps[j - 1];
        } else if (i < n && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }
}

let text = "ABABDABACDABABCABAB";
let pattern = "ABABCABAB";

KMPSearch(text, pattern);
