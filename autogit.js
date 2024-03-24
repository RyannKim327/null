function boyerMooreHorspool(text, pattern) {
    const MAX_CHAR = 256;
    const textLength = text.length;
    const patternLength = pattern.length;
    
    // Create bad character skip table
    const badChar = new Array(MAX_CHAR).fill(-1);
    
    for (let i = 0; i < patternLength - 1; i++) {
        badChar[pattern[i].charCodeAt(0)] = i;
    }
    
    // Search for pattern in text
    let startPos = 0;
    
    while (startPos <= textLength - patternLength) {
        let i = patternLength - 1;
        
        while (i >= 0 && pattern[i] === text[startPos + i]) {
            i--;
        }
        
        if (i < 0) {
            // Pattern found
            console.log(`Pattern found at position ${startPos}`);
            
            // Move start position
            startPos += (startPos + patternLength < textLength) ? patternLength - badChar[text[startPos + patternLength].charCodeAt(0)] : 1;
        } else {
            // Shift start position
            startPos += Math.max(1, i - badChar[text[startPos + i].charCodeAt(0)]);
        }
    }
}

// Test the algorithm
const text = "ABAAABCD";
const pattern = "ABC";
boyerMooreHorspool(text, pattern);
