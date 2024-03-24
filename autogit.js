function boyerMooreSearch(text, pattern) {
    const last = buildLastTable(pattern);
    let n = text.length;
    let m = pattern.length;
    let i = m - 1;
    let j = m - 1;

    while (i < n) {
        if (text[i] === pattern[j]) {
            if (j === 0) {
                return i;
            }
            i--;
            j--;
        } else {
            i += m - Math.min(j, 1 + last[text[i]]);
            j = m - 1;
        }
    }

    return -1; // Pattern not found
}

function buildLastTable(pattern) {
    const last = {};
    for (let i = 0; i < 256; i++) {
        last[String.fromCharCode(i)] = -1;
    }
    for (let i = 0; i < pattern.length; i++) {
        last[pattern[i]] = i;
    }
    return last;
}

// Example Usage
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
const pattern = "consectetur";
const index = boyerMooreSearch(text, pattern);
if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
