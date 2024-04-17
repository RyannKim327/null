function buildPatternTable(pattern) {
    const patternTable = [0];
    let prefix = 0;
    let suffix = 1;

    while (suffix < pattern.length) {
        if (pattern[prefix] === pattern[suffix]) {
            patternTable[suffix] = prefix + 1;
            prefix++;
            suffix++;
        } else if (prefix === 0) {
            patternTable[suffix] = 0;
            suffix++;
        } else {
            prefix = patternTable[prefix - 1];
        }
    }

    return patternTable;
}

function kmpSearch(text, pattern) {
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

    return -1;
}

// Example usage
const text = "ababcababcabc";
const pattern = "ababc";
const matchIndex = kmpSearch(text, pattern);

if (matchIndex !== -1) {
    console.log(`Pattern found at index ${matchIndex}`);
} else {
    console.log("Pattern not found");
}
