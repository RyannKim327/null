function buildPatternTable(pattern) {
    let prefixSuffixTable = new Array(pattern.length);
    let j = 0;
    prefixSuffixTable[0] = 0;

    for (let i = 1; i < pattern.length; i++) {
        while (j > 0 && pattern.charAt(i) !== pattern.charAt(j)) {
            j = prefixSuffixTable[j - 1];
        }
        if (pattern.charAt(i) === pattern.charAt(j)) {
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
        while (j > 0 && text.charAt(i) !== pattern.charAt(j)) {
            j = patternTable[j - 1];
        }
        if (text.charAt(i) === pattern.charAt(j)) {
            if (j === pattern.length - 1) {
                matches.push(i - j);
                j = patternTable[j];
            } else {
                j++;
            }
        }
    }

    return matches;
}

// Example usage
let text = "ABABDABACDABABCABAB";
let pattern = "ABABCABAB";
let matches = kmpSearch(text, pattern);

console.log("Pattern found at index:", matches); // Output: Pattern found at index: [10]
