function buildPatternTable(pattern) {
    let prefixSuffixTable = [0];
    let len = 0;
    let i = 1;

    while (i < pattern.length) {
        if (pattern[i] === pattern[len]) {
            len++;
            prefixSuffixTable[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = prefixSuffixTable[len - 1];
            } else {
                prefixSuffixTable[i] = 0;
                i++;
            }
        }
    }

    return prefixSuffixTable;
}

function KMPSearch(text, pattern) {
    let patternTable = buildPatternTable(pattern);
    let textIndex = 0;
    let patternIndex = 0;

    while (textIndex < text.length) {
        if (pattern[patternIndex] === text[textIndex]) {
            patternIndex++;
            textIndex++;
        }

        if (patternIndex === pattern.length) {
            return textIndex - patternIndex;
        } else if (textIndex < text.length && pattern[patternIndex] !== text[textIndex]) {
            if (patternIndex !== 0) {
                patternIndex = patternTable[patternIndex - 1];
            } else {
                textIndex++;
            }
        }
    }

    return -1;
}

// Example Usage
let text = "ababcababcabcab";
let pattern = "abcab";
let result = KMPSearch(text, pattern);

if (result !== -1) {
    console.log(`Pattern found at index ${result}`);
} else {
    console.log("Pattern not found in the text");
}
