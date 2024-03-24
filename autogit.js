function computeLPSArray(pattern) {
    let lps = [];
    let len = 0;
    lps[0] = 0;
    
    for (let i = 1; i < pattern.length; i++) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
        } else {
            if (len !== 0) {
                len = lps[len - 1];
                i--;
            } else {
                lps[i] = 0;
            }
        }
    }
    return lps;
}

function KMP(text, pattern) {
    let lps = computeLPSArray(pattern);
    let j = 0;
    
    for (let i = 0; i < text.length; i++) {
        if (text[i] === pattern[j]) {
            j++;
        } else {
            if (j !== 0) {
                j = lps[j - 1];
                i--;
            }
        }
        
        if (j === pattern.length) {
            return i - j + 1;
        }
    }
    
    return -1;
}

// Example usage
let text = "ABABDABACDABABCABAB";
let pattern = "ABABCABAB";
let index = KMP(text, pattern);

if (index !== -1) {
    console.log("Pattern found at index " + index);
} else {
    console.log("Pattern not found");
}
