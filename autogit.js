function buildKMPTable(pattern) {
    let table = Array(pattern.length).fill(0);
    let i = 1, j = 0;

    while (i < pattern.length) {
        if (pattern[i] === pattern[j]) {
            table[i] = j + 1;
            i++;
            j++;
        } else {
            if (j !== 0) {
                j = table[j - 1];
            } else {
                table[i] = 0;
                i++;
            }
        }
    }

    return table;
}

function KMPSearch(text, pattern) {
    let table = buildKMPTable(pattern);
    let i = 0, j = 0;
    const indices = [];

    while (i < text.length) {
        if (text[i] === pattern[j]) {
            i++;
            j++;
            if (j === pattern.length) {
                indices.push(i - j);
                j = table[j - 1];
            }
        } else {
            if (j !== 0) {
                j = table[j - 1];
            } else {
                i++;
            }
        }
    }

    return indices;
}

// Example of using the KMP algorithm
let text = "ABABDABACDABABCABAB";
let pattern = "ABABCABAB";
let indices = KMPSearch(text, pattern);

if (indices.length === 0) {
    console.log("Pattern not found in the text.");
} else {
    console.log("Pattern found at index(es): " + indices.join(", "));
}
