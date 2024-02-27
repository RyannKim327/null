function createBadCharacterTable(pattern) {
    const table = new Array(256).fill(pattern.length);

    for (let i = 0; i < pattern.length - 1; i++) {
        table[pattern.charCodeAt(i)] = pattern.length - 1 - i;
    }

    return table;
}

function boyerMooreHorspoolSearch(text, pattern) {
    const badCharacterTable = createBadCharacterTable(pattern);
    const n = text.length;
    const m = pattern.length;
    let i = m - 1;

    while (i < n) {
        let k = 0;

        while (k < m && pattern[m - 1 - k] === text[i - k]) {
            k++;
        }

        if (k === m) {
            return i - m + 1; // Match found
        } else {
            i += badCharacterTable[text.charCodeAt(i)];
        }
    }

    return -1; // Match not found
}

// Example usage
const text = "The quick brown fox jumps over the lazy dog";
const pattern = "brown";
const index = boyerMooreHorspoolSearch(text, pattern);

if (index !== -1) {
    console.log("Pattern found at index: " + index);
} else {
    console.log("Pattern not found");
}
