function boyerMooreSearch(text, pattern) {
    let m = pattern.length;
    let n = text.length;
    
    if (m === 0) return 0;

    let last = buildLastTable(pattern);

    let i = m - 1; // the index in the text
    let j = m - 1; // the index in the pattern

    while (i < n) {
        if (text[i] === pattern[j]) {
            if (j === 0) {
                return i; // match found
            }
            i--;
            j--;
        } else {
            let lastIdx = last[text[i]];
            i += m - Math.min(j, 1 + lastIdx);
            j = m - 1;
        }
    }

    return -1; // no match found
}

function buildLastTable(pattern) {
    let last = {};
    for (let i = 0; i < pattern.length; i++) {
        last[pattern[i]] = i;
    }
    return last;
}

// Example usage
let text = "Hello World";
let pattern = "World";
let index = boyerMooreSearch(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
