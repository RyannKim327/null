function buildPrefixTable(pattern) {
    const prefixTable = new Array(pattern.length);
    prefixTable[0] = 0;
    let prefixLength = 0;
    let i = 1;

    while (i < pattern.length) {
        if (pattern[i] === pattern[prefixLength]) {
            prefixLength++;
            prefixTable[i] = prefixLength;
            i++;
        } else {
            if (prefixLength !== 0) {
                prefixLength = prefixTable[prefixLength - 1];
            } else {
                prefixTable[i] = 0;
                i++;
            }
        }
    }

    return prefixTable;
}

function kmpSearch(text, pattern) {
    const prefixTable = buildPrefixTable(pattern);
    let textIndex = 0;
    let patternIndex = 0;

    while (textIndex < text.length) {
        if (pattern[patternIndex] === text[textIndex]) {
            patternIndex++;
            textIndex++;
        }

        if (patternIndex === pattern.length) {
            console.log('Pattern found at index ' + (textIndex - patternIndex));
            patternIndex = prefixTable[patternIndex - 1];
        } else if (textIndex < text.length && pattern[patternIndex] !== text[textIndex]) {
            if (patternIndex !== 0) {
                patternIndex = prefixTable[patternIndex - 1];
            } else {
                textIndex++;
            }
        }
    }
}

// Test the KMP algorithm
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
kmpSearch(text, pattern);
