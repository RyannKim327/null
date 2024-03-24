function boyerMooreSearch(text, pattern) {
    const last = buildLastTable(pattern);
    let n = text.length;
    let m = pattern.length;
    let i = m - 1;

    if (i > n - 1) {
        return -1; // pattern longer than text
    }

    let j = m - 1;
    while (i < n && j >= 0) {
        if (text[i] === pattern[j]) {
            i--;
            j--;
        } else {
            let lastIdx = last[text[i]] || -1;
            i = i + m - Math.min(j, 1 + lastIdx);
            j = m - 1;
        }
    }

    if (j === -1) {
        return i + 1;
    } else {
        return -1; // pattern not found
    }
}

function buildLastTable(pattern) {
    const last = {};
    for (let i = 0; i < pattern.length; i++) {
        last[pattern[i]] = i;
    }
    return last;
}

// Example usage
const text = "this is a test text";
const pattern = "test";
const index = boyerMooreSearch(text, pattern);
if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
