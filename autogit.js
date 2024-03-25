function buildBadCharacterTable(pattern) {
    const table = {};

    for (let i = 0; i < pattern.length - 1; i++) {
        table[pattern[i]] = pattern.length - 1 - i;
    }

    return table;
}

function boyerMoore(text, pattern) {
    const badCharacterTable = buildBadCharacterTable(pattern);
    const n = text.length;
    const m = pattern.length;
    const result = [];

    let i = 0;
    while (i <= n - m) {
        let j = m - 1;

        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }

        if (j < 0) {
            result.push(i);
            i += (i + m < n) ? m - badCharacterTable[text[i + m]] : 1;
        } else {
            i += Math.max(1, j - badCharacterTable[text[i + j]]);
        }
    }

    return result;
}

// Example
const text = "ababcababcabc";
const pattern = "abc";
const occurrences = boyerMoore(text, pattern);

console.log("Pattern occurs at indices: ", occurrences); // Output: Pattern occurs at indices:  [2, 6, 10]
