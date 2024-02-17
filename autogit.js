function buildKMPTable(pattern) {
    const table = Array(pattern.length).fill(0);
    let i = 0;
    let j = 1;

    while (j < pattern.length) {
        if (pattern[i] === pattern[j]) {
            table[j] = i + 1;
            i++;
            j++;
        } else {
            if (i !== 0) {
                i = table[i - 1];
            } else {
                table[j] = 0;
                j++;
            }
        }
    }

    return table;
}

function kmpSearch(text, pattern) {
    const table = buildKMPTable(pattern);
    let i = 0;
    let j = 0;

    while (i < text.length) {
        if (text[i] === pattern[j]) {
            i++;
            j++;
            if (j === pattern.length) {
                return i - j; // Match found
            }
        } else {
            if (j !== 0) {
                j = table[j - 1];
            } else {
                i++;
            }
        }
    }

    return -1; // No match found
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
