function boyerMoore(text, pattern) {
    const last = buildLast(pattern);
    let n = text.length;
    let m = pattern.length;
    let i, j;

    if (m > n) {
        return -1; // Pattern is longer than text, no match possible
    }

    for (i = m - 1, j = m - 1; i < n;) {
        if (text[i] === pattern[j]) {
            if (j === 0) {
                return i; // Match found
            }
            i--;
            j--;
        } else {
            i += m - Math.min(j, 1 + last[text[i]]);
            j = m - 1;
        }
    }

    return -1; // No match
}

function buildLast(pattern) {
    const last = {};
    for (let i = 0; i < pattern.length; i++) {
        last[pattern[i]] = i;
    }
    return last;
}

// Example usage
const text = "hello world!";
const pattern = "world";
const index = boyerMoore(text, pattern);
if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
