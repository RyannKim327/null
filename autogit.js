function buildPrefixTable(pattern) {
    let prefixTable = Array(pattern.length).fill(0);
    let j = 0;

    for (let i = 1; i < pattern.length; i++) {
        while (j > 0 && pattern[i] !== pattern[j]) {
            j = prefixTable[j - 1];
        }
        if (pattern[i] === pattern[j]) {
            j++;
        }
        prefixTable[i] = j;
    }

    return prefixTable;
}

function kmpSearch(text, pattern) {
    let prefixTable = buildPrefixTable(pattern);
    let j = 0;

    for (let i = 0; i < text.length; i++) {
        while (j > 0 && text[i] !== pattern[j]) {
            j = prefixTable[j - 1];
        }
        if (text[i] === pattern[j]) {
            j++;
        }
        if (j === pattern.length) {
            return i - j + 1; // pattern found at index i - j + 1 in text
        }
    }

    return -1; // pattern not found in text
}

// Example Usage
let text = "ABABDABACDABABCABAB";
let pattern = "ABABCABAB";

let index = kmpSearch(text, pattern);
if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found in text");
}
