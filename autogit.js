function computePrefixTable(pattern) {
    let prefixTable = [];
    let j = 0;
    prefixTable[0] = 0;

    for (let i = 1; i < pattern.length; i++) {
        while (j > 0 && pattern.charAt(i) !== pattern.charAt(j)) {
            j = prefixTable[j - 1];
        }
        if (pattern.charAt(i) === pattern.charAt(j)) {
            j++;
        }
        prefixTable[i] = j;
    }

    return prefixTable;
}

function kmpSearch(text, pattern) {
    let prefixTable = computePrefixTable(pattern);
    let matches = [];

    let j = 0;
    for (let i = 0; i < text.length; i++) {
        while (j > 0 && text.charAt(i) !== pattern.charAt(j)) {
            j = prefixTable[j - 1];
        }
        if (text.charAt(i) === pattern.charAt(j)) {
            j++;
        }
        if (j === pattern.length) {
            matches.push(i - j + 1);
            j = prefixTable[j - 1];
        }
    }

    return matches;
}

// Example usage:
let text = "ABCABCDABABCDABCDABDE";
let pattern = "ABCDABD";
let matches = kmpSearch(text, pattern);
console.log(matches);
