function buildPatternTable(pattern) {
    let table = [0];
    let prefix = 0;
    let suffix = 1;

    while (suffix < pattern.length) {
        if (pattern[prefix] === pattern[suffix]) {
            table[suffix] = prefix + 1;
            prefix++;
            suffix++;
        } else if (prefix === 0) {
            table[suffix] = 0;
            suffix++;
        } else {
            prefix = table[prefix - 1];
        }
    }

    return table;
}

function searchKMP(text, pattern) {
    const patternTable = buildPatternTable(pattern);
    let textIndex = 0;
    let patternIndex = 0;

    while (textIndex < text.length) {
        if (text[textIndex] === pattern[patternIndex]) {
            if (patternIndex === pattern.length - 1) {
                return textIndex - pattern.length + 1;
            }
            textIndex++;
            patternIndex++;
        } else if (patternIndex > 0) {
            patternIndex = patternTable[patternIndex - 1];
        } else {
            textIndex++;
        }
    }

    return -1; // Pattern not found
}

// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const patternIndex = searchKMP(text, pattern);

if (patternIndex !== -1) {
    console.log(`Pattern found at index ${patternIndex}`);
} else {
    console.log("Pattern not found in the text.");
}
