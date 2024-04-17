function buildFailureArray(pattern) {
    const failure = new Array(pattern.length).fill(0);
    let j = 0;
    
    for (let i = 1; i < pattern.length; i++) {
        if (pattern[i] === pattern[j]) {
            j++;
            failure[i] = j;
        } else {
            if (j !== 0) {
                j = failure[j - 1];
                i--;
            }
        }
    }
    
    return failure;
}

function kmpSearch(text, pattern) {
    const failure = buildFailureArray(pattern);
    let i = 0;
    let j = 0;
    
    while (i < text.length) {
        if (text[i] === pattern[j]) {
            if (j === pattern.length - 1) {
                return i - j;
            }
            i++;
            j++;
        } else {
            if (j !== 0) {
                j = failure[j - 1];
            } else {
                i++;
            }
        }
    }
    
    return -1;
}

// Test the KMP algorithm
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const index = kmpSearch(text, pattern);
if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found in text");
}
