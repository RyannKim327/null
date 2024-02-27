function generatePrefixTable(pattern) {
    const prefixTable = [0];
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
    const prefixTable = generatePrefixTable(pattern);
    let j = 0;

    for (let i = 0; i < text.length; i++) {
        while (j > 0 && text[i] !== pattern[j]) {
            j = prefixTable[j - 1];
        }
        if (text[i] === pattern[j]) {
            j++;
        }
        if (j === pattern.length) {
            return i - j + 1; // Match found, return the index of the start of the match
        }
    }

    return -1; // Match not found
}

// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const index = kmpSearch(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
