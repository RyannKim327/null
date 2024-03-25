function buildPatternTable(pattern) {
    let prefixSuffixTable = [0];
    let j = 0;

    for (let i = 1; i < pattern.length; i++) {
        if (pattern[i] === pattern[j]) {
            j++;
            prefixSuffixTable[i] = j;
        } else {
            if (j !== 0) {
                j = prefixSuffixTable[j - 1];
                i--;
            } else {
                prefixSuffixTable[i] = 0;
            }
        }
    }

    return prefixSuffixTable;
}

function kmpSearch(text, pattern) {
    if (!text || !pattern) {
        return -1;
    }

    const lps = buildPatternTable(pattern);
    let i = 0;
    let j = 0;

    while (i < text.length) {
        if (text[i] === pattern[j]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            return i - j;
        } else if (i < text.length && text[i] !== pattern[j]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return -1;
}

// Usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

const pos = kmpSearch(text, pattern);

if (pos !== -1) {
    console.log(`Pattern found at index ${pos}`);
} else {
    console.log(`Pattern not found`);
}
