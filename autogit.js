function computeLPSArray(pattern) {
    let len = 0;
    let i = 1;
    const lps = [0];

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

function KMP(text, pattern) {
    const lps = computeLPSArray(pattern);
    const result = [];
    let i = 0;
    let j = 0;

    while (i < text.length) {
        if (text[i] === pattern[j]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            result.push(i - j);
            j = lps[j - 1];
        } else if (i < text.length && text[i] !== pattern[j]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return result;
}

// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const matches = KMP(text, pattern);
console.log(matches);  // Output: [10]
