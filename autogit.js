function buildPatternTable(pattern) {
    let patternTable = [0];
    let prefixIndex = 0;
    let suffixIndex = 1;

    while (suffixIndex < pattern.length) {
        if (pattern[suffixIndex] === pattern[prefixIndex]) {
            prefixIndex++;
            patternTable[suffixIndex] = prefixIndex;
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
        } else if (patternIndex === 0) {
            textIndex++;
        } else {
            patternIndex = patternTable[patternIndex - 1];
        }
    }

    return -1;
}

// Example usage
let text = "ababcabab";
let pattern = "abab";
let index = kmpSearch(text, pattern);
console.log(index); // Output: 4
