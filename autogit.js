function calculateLPSArray(pattern) {
    let lps = Array(pattern.length).fill(0);
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
    const lps = calculateLPSArray(pattern);
    let i = 0; // pointer for text
    let j = 0; // pointer for pattern
    const matches = [];

    while (i < text.length) {
        if (text[i] === pattern[j]) {
            i++;
            j++;
        }
        
        if (j === pattern.length) {
            matches.push(i - j);
            j = lps[j - 1];
        } else if (i < text.length && text[i] !== pattern[j]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return matches;
}

// Example Usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const result = KMPSearch(text, pattern);
console.log(result); // Output: [10]
