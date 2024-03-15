function buildPatternTable(pattern) {
    const table = Array(pattern.length).fill(0);
    let i = 1, j = 0;

    while (i < pattern.length) {
        if (pattern[i] === pattern[j]) {
            table[i] = j + 1;
            i++;
            j++;
        } else {
            if (j !== 0) {
                j = table[j - 1];
            } else {
                table[i] = 0;
                i++;
            }
        }
    }

    return table;
}

function kmpSearch(text, pattern) {
    if (pattern.length === 0) return 0;

    const patternTable = buildPatternTable(pattern);
    let i = 0, j = 0;

    while (i < text.length) {
        if (text[i] === pattern[j]) {
            if (j === pattern.length - 1) {
                return i - j;
            }
            i++;
            j++;
        } else {
            if (j !== 0) {
                j = patternTable[j - 1];
            } else {
                i++;
            }
        }
    }

    return -1;  // pattern not found in text
}

// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

const index = kmpSearch(text, pattern);
if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found in text");
}
