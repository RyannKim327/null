function buildPatternTable(pattern) {
    const table = [0];
    let prefix = 0;
    
    for (let i = 1; i < pattern.length; i++) {
        if (pattern[i] === pattern[prefix]) {
            prefix++;
            table[i] = prefix;
        } else {
            prefix = 0;
            table[i] = prefix;
        }
    }
    
    return table;
}

function KMP(text, pattern) {
    const patternTable = buildPatternTable(pattern);
    let textIndex = 0;
    let patternIndex = 0;
    
    while (textIndex < text.length) {
        if (text[textIndex] === pattern[patternIndex]) {
            if (patternIndex === pattern.length - 1) {
                return textIndex - pattern.length + 1;
            }
            patternIndex++;
            textIndex++;
        } else {
            if (patternIndex !== 0) {
                patternIndex = patternTable[patternIndex - 1];
            } else {
                textIndex++;
            }
        }
    }

    return -1;
}

// Example
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const index = KMP(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
