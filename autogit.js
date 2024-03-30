function buildLPS(pattern) {
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
    let m = pattern.length;
    let n = text.length;
    let lps = buildLPS(pattern);
    let i = 0;
    let j = 0;
    let indices = [];

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
let text = "ABABDABACDABABCABAB";
let pattern = "ABABCABAB";
let indices = kmpSearch(text, pattern);
console.log(indices);  // Output: [10]
