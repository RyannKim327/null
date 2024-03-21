function buildPrefixTable(pattern) {
    let prefixTable = new Array(pattern.length).fill(0);
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
    let matches = [];
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
            matches.push(i - j + 1);
            j = prefixTable[j - 1];
        }
    }

    return matches;
}

// Example
let text = "ABABDABACDABABCABAB";
let pattern = "ABABCABAB";

let matches = kmpSearch(text, pattern);
console.log("Pattern found at indices:", matches);
