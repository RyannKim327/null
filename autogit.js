function createBadCharTable(pattern) {
    const table = {};
    const patternLength = pattern.length;
    
    for (let i = 0; i < patternLength - 1; i++) {
        table[pattern[i]] = patternLength - 1 - i;
    }
    
    return table;
}

function searchBMH(text, pattern) {
    const badCharTable = createBadCharTable(pattern);
    const textLength = text.length;
    const patternLength = pattern.length;
    let shift = 0;
    
    while (shift <= textLength - patternLength) {
        let j = patternLength - 1;
        
        while (j >= 0 && pattern[j] === text[shift + j]) {
            j -= 1;
        }
        
        if (j < 0) {
            return shift;
        } else {
            shift += badCharTable[text[shift + patternLength - 1]] || patternLength;
        }
    }
    
    return -1;
}

// Example usage
const text = "hello world";
const pattern = "world";
const index = searchBMH(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
