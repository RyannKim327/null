function kmpSearch(text, pattern) {
    const m = pattern.length;
    const n = text.length;
    const lps = computeLPSArray(pattern);
    
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

function computeLPSArray(pattern) {
    const m = pattern.length;
    const lps = new Array(m).fill(0);

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
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const indices = kmpSearch(text, pattern);
console.log(indices); // Output: [10]
