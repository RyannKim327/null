function buildPatternTable(pattern) {
    let patternTable = [0];
    let prefixIndex = 0;
    let suffixIndex = 1;

    while (suffixIndex < pattern.length) {
        if (pattern[suffixIndex] === pattern[prefixIndex]) {
            patternTable[suffixIndex] = prefixIndex + 1;
            suffixIndex++;
            prefixIndex++;
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
    if (pattern.length === 0) {
        return 0;
    }

    let textIndex = 0;
    let patternIndex = 0;
    let patternTable = buildPatternTable(pattern);

    while (textIndex < text.length) {
        if (text[textIndex] === pattern[patternIndex]) {
            if (patternIndex === pattern.length - 1) {
                return textIndex - pattern.length + 1;
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
let text = "ababcababcabc";
let pattern = "abc";
let index = kmpSearch(text, pattern);
console.log(index); // Output: 2
