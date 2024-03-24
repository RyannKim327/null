function buildPatternTable(pattern) {
    const patternTable = [0];
    let prefixIndex = 0;
    let suffixIndex = 1;

    while (suffixIndex < pattern.length) {
        if (pattern[suffixIndex] === pattern[prefixIndex]) {
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
    const patternTable = buildPatternTable(pattern);
    const matches = [];

    let textIndex = 0;
    let patternIndex = 0;

    while (textIndex < text.length) {
        if (text[textIndex] === pattern[patternIndex]) {
            if (patternIndex === pattern.length - 1) {
                matches.push(textIndex - pattern.length + 1);
                patternIndex = 0;
                textIndex++;
            } else {
                textIndex++;
                patternIndex++;
            }
        } else if (patternIndex > 0) {
            patternIndex = patternTable[patternIndex - 1];
        } else {
            patternIndex = 0;
            textIndex++;
        }
    }

    return matches;
}

// Example usage
const text = 'ababcababcabc';
const pattern = 'ababc';
const result = kmpSearch(text, pattern);
console.log(result);
