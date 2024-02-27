function buildPatternTable(pattern) {
    let prefixSuffixTable = new Array(pattern.length).fill(0);
    let j = 0;
    
    for (let i = 1; i < pattern.length; i++) {
        while (j > 0 && pattern.charAt(i) !== pattern.charAt(j)) {
            j = prefixSuffixTable[j - 1];
        }
        if (pattern.charAt(i) === pattern.charAt(j)) {
            prefixSuffixTable[i] = j + 1;
            j++;
        }
    }
    
    return prefixSuffixTable;
}

function kmpSearch(text, pattern) {
    let patternTable = buildPatternTable(pattern);
    let j = 0;

    for (let i = 0; i < text.length; i++) {
        while (j > 0 && text.charAt(i) !== pattern.charAt(j)) {
            j = patternTable[j - 1];
        }
        if (text.charAt(i) === pattern.charAt(j)) {
            if (j === pattern.length - 1) {
                return i - j; // match found
            }
            j++;
        }
    }
    
    return -1; // match not found
}

// Example usage
let text = 'ABABDABACDABABCABAB';
let pattern = 'ABABCABAB';
let index = kmpSearch(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log(`Pattern not found in the text`);
}
