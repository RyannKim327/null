function buildLPSArray(pattern) {
    let lps = [0];
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
    const lps = buildLPSArray(pattern);
    
    let i = 0;
    let j = 0;
    const indices = [];
    
    while (i < n) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }
        if (j === m) {
            indices.push(i - j);
            j = lps[j - 1];
        } else if (i < n && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }
    
    return indices;
}

// Example usage
const text = "ABCABCDABABCDABCDABDE";
const pattern = "ABCDABD";
const result = kmpSearch(text, pattern);
console.log(result); // [6, 12]
