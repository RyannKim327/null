function boyerMoore(text, pattern) {
    let textLength = text.length;
    let patternLength = pattern.length;
    
    if (patternLength === 0) {
        return -1;
    }

    let badMatchTable = {};
    for(let i = 0; i < patternLength - 1; i++) {
        badMatchTable[pattern[i]] = patternLength - i - 1;
    }
    
    let index = patternLength - 1; // Start index at end of pattern
    while (index < textLength) {
        let patternIndex = patternLength - 1;
        let textIndex = index;
        
        while (patternIndex >= 0 && text[textIndex] === pattern[patternIndex]) {
            patternIndex--;
            textIndex--;
        }
        
        if (patternIndex === -1) {
            return textIndex + 1; // Pattern found
        }
        
        let badMatchSkip = badMatchTable[text[index]] || patternLength;
        index += badMatchSkip;
    }

    return -1; // Pattern not found
}

// Test the Boyer-Moore algorithm
let text = "Hello, this is a test string for searching.";
let pattern = "test";
let result = boyerMoore(text, pattern);

if (result !== -1) {
    console.log(`Pattern found at index ${result}`);
} else {
    console.log(`Pattern not found`);
}
