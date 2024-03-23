function buildPatternTable(pattern) {
    let prefixSuffixTable = new Array(pattern.length).fill(0);
    let j = 0;
    
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
    let j = 0;

    for (let i = 0; i < text.length; i++) {
        while (j > 0 && text.charAt(i) !== pattern.charAt(j)) {
            j = patternTable[j - 1];
        }
        if (text.charAt(i) === pattern.charAt(j)) {
            j++;
        }
        if (j === pattern.length) {
            return i - j + 1;  // match found, return the starting index
        }
    }

    return -1;  // no match found
}

// Example usage
let text = "ABCABCDABABCDABCDABDE";
let pattern = "ABCDABD";
let matchIndex = kmpSearch(text, pattern);

if (matchIndex === -1) {
    console.log("Pattern not found in text");
} else {
    console.log(`Pattern found at index ${matchIndex}`);
}
