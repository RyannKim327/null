function boyerMoore(text, pattern) {
    let last = buildLast(pattern);
    let n = text.length;
    let m = pattern.length;
    let i = m - 1; // text index
    let j = m - 1; // pattern index

    while (i < n) {
        if (text[i] === pattern[j]) {
            if (j === 0) {
                return i; // pattern found
            }
            i--;
            j--;
        } else {
            i += m - Math.min(j, 1 + last[text.charCodeAt(i)]);
            j = m - 1;
        }
    }

    return -1; // pattern not found
}

function buildLast(pattern) {
    const last = {};
    const m = pattern.length;

    for (let i = 0; i < 256; i++) {
        last[i] = -1; // initialize all characters to -1
    }

    for (let i = 0; i < m; i++) {
        last[pattern.charCodeAt(i)] = i;
    }

    return last;
}

// Test the implementation
let text = "ABAAABCD";
let pattern = "ABC";
let index = boyerMoore(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found in the text");
}
