function buildPatternTable(pattern) {
    let patternTable = [0];
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

function KMP(text, pattern) {
    let patternTable = buildPatternTable(pattern);
    let textIndex = 0;
    let patternIndex = 0;

    while (textIndex < text.length) {
        if (text[textIndex] === pattern[patternIndex]) {
            if (patternIndex === pattern.length - 1) {
                return textIndex - patternIndex;
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
let text = "ABCABDABCAB";
let pattern = "ABCAB";
let result = KMP(text, pattern);

if (result === -1) {
    console.log("Pattern not found in text");
} else {
    console.log(`Pattern found at index ${result}`);
}
