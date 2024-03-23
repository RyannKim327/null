function boyerMooreHorspool(text, pattern) {
    const m = pattern.length;
    const n = text.length;

    if (m === 0) return 0;

    const skipTable = new Map();
    const lastOccurrence = {};

    // Initialize skip table
    for (let i = 0; i < m - 1; i++) {
        skipTable.set(pattern[i], m - i - 1);
    }

    // Initialize last occurrence table
    for (let i = 0; i < m; i++) {
        lastOccurrence[pattern[i]] = i;
    }

    let i = m - 1;
    while (i < n) {
        let k = 0;
        while (k < m && pattern[m - 1 - k] === text[i - k]) {
            k++;
        }
        if (k === m) return i - m + 1;

        const skip = skipTable.get(text[i]) || m;
        i += skip;
    }

    return -1;
}

// Example usage
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const pattern = "consectetur";

const index = boyerMooreHorspool(text, pattern);
if (index !== -1) {
    console.log(`Pattern found at index: ${index}`);
} else {
    console.log("Pattern not found.");
}
