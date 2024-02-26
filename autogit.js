function boyerMooreSearch(text, pattern) {
    const textSize = text.length;
    const patternSize = pattern.length;
    
    if (patternSize === 0) {
        return 0; // Empty pattern matches at the beginning
    }
    
    const badMatchTable = new Array(256).fill(patternSize); // Initialize bad character shift table
    const goodSuffixTable = new Array(patternSize).fill(0); // Initialize good suffix shift table
    
    calculateBadMatchTable(pattern, badMatchTable);
    calculateGoodSuffixTable(pattern, goodSuffixTable);
    
    let i = patternSize - 1; // Index in text
    let j = patternSize - 1; // Index in pattern
    
    while (i < textSize) {
        if (text[i] === pattern[j]) {
            if (j === 0) {
                return i; // Match found
            }
            i--;
            j--;
        } else {
            i += Math.max(badMatchTable[text.charCodeAt(i)], goodSuffixTable[j]);
            j = patternSize - 1;
        }
    }
    
    return -1; // No match found
}

function calculateBadMatchTable(pattern, badMatchTable) {
    const patternSize = pattern.length;
    for (let i = 0; i < patternSize - 1; i++) {
        badMatchTable[pattern.charCodeAt(i)] = patternSize - i - 1;
    }
}

function calculateGoodSuffixTable(pattern, goodSuffixTable) {
    const patternSize = pattern.length;
    const suffixes = new Array(patternSize).fill(0);
    
    for (let i = patternSize - 1; i >= 0; i--) {
        let j = i;
        while (j >= 0 && pattern[j] === pattern[patternSize - 1 - i + j]) {
            j--;
        }
        suffixes[i] = i - j;
    }
    
    for (let i = 0; i < patternSize - 1; i++) {
        goodSuffixTable[i] = patternSize;
    }
    
    for (let i = patternSize - 1; i >= 0; i--) {
        if (suffixes[i] === i + 1) {
            for (let j = 0; j < patternSize - 1 - i; j++) {
                if (goodSuffixTable[j] === patternSize) {
                    goodSuffixTable[j] = patternSize - 1 - i;
                }
            }
        }
    }
}

// Example
const text = "hello world";
const pattern = "world";
const index = boyerMooreSearch(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
