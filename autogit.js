function buildPatternTable(pattern) {
    let patternTable = [0];
    let prefixIndex = 0;
    let suffixIndex = 1;

    while (suffixIndex < pattern.length) {
        if (pattern[prefixIndex] === pattern[suffixIndex]) {
            patternTable[suffixIndex] = prefixIndex + 1;
            prefixIndex++;
            suffixIndex++;
        } else if (prefixIndex === 0) {
            patternTable[suffixIndex] = 0;
            suffixIndex++;
        } else {
            prefixIndex = patternTable[prefixIndex - 1];
        }
    }

    return patternTable;
}

function kmpSearch(text, pattern) {
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
let text = 'ABABDABACDABABCABAB';
let pattern = 'ABABCABAB';

let index = kmpSearch(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log('Pattern not found');
}
