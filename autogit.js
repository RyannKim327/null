function horspoolSearch(text, pattern) {
    const skipTable = createSkipTable(pattern);
    let i = 0;

    while (i <= text.length - pattern.length) {
        let j = pattern.length - 1;

        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }

        if (j < 0) {
            return i;
        } else {
            const skip = skipTable[text[i + pattern.length - 1]] || pattern.length;
            i += skip;
        }
    }

    return -1;
}

function createSkipTable(pattern) {
    const table = {};
    const patternLength = pattern.length;

    for (let i = 0; i < patternLength - 1; i++) {
        table[pattern[i]] = patternLength - 1 - i;
    }

    return table;
}

// Example usage
const text = "The quick brown fox jumps over the lazy dog";
const pattern = "fox";
const index = horspoolSearch(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
