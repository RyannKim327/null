function preprocessPattern(pattern) {
    const table = {};
    const patternLength = pattern.length - 1;
    
    for (let i = 0; i < patternLength; i++) {
        table[pattern[i]] = patternLength - i;
    }
    
    return table;
}
function search(text, pattern) {
    const patternLength = pattern.length;
    const textLength = text.length;
    const table = preprocessPattern(pattern);
    let i = patternLength - 1;
    
    while (i < textLength) {
        let k = 0;

        while (k < patternLength && pattern[patternLength - 1 - k] === text[i - k]) {
            k++;
        }
        
        if (k === patternLength) {
            return i - patternLength + 1; // Match found
        } else {
            i += table[text[i]] || patternLength; // Shift the pattern
        }
    }
    
    return -1; // Match not found
}
const text = 'This is a sample text for searching.';
const pattern = 'sample';

const result = search(text, pattern);
if (result !== -1) {
    console.log(`Pattern found at index ${result}`);
} else {
    console.log('Pattern not found');
}
