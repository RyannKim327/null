function buildPatternTable(pattern) {
    let prefixSuffixTable = new Array(pattern.length);
    prefixSuffixTable[0] = 0;
    let j = 0;
    for (let i = 1; i < pattern.length; i++) {
        while (j > 0 && pattern[i] !== pattern[j]) {
            j = prefixSuffixTable[j - 1];
        }
        if (pattern[i] === pattern[j]) {
            j++;
        }
        prefixSuffixTable[i] = j;
    }
    return prefixSuffixTable;
}

function kmpSearch(text, pattern) {
    let patternTable = buildPatternTable(pattern);
    let matches = [];
    let j = 0;

    for (let i = 0; i < text.length; i++) {
        while (j > 0 && text[i] !== pattern[j]) {
            j = patternTable[j - 1];
        }
        if (text[i] === pattern[j]) {
            j++;
        }
        if (j === pattern.length) {
            matches.push(i - j + 1);
            j = patternTable[j - 1];
        }
    }

    return matches;
}

// Example usage
let text = "ABABDABACDABABCABAB";
let pattern = "ABABCABAB";
let result = kmpSearch(text, pattern);
console.log(result); // Output: [10]
