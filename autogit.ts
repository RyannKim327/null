function buildPrefixTable(pattern: string): number[] {
    const prefixTable = new Array(pattern.length).fill(0);
    let j = 0;  // length of previous longest prefix suffix

    for (let i = 1; i < pattern.length; i++) {
        while (j > 0 && pattern[i] !== pattern[j]) {
            j = prefixTable[j - 1];
        }
        if (pattern[i] === pattern[j]) {
            j++;
            prefixTable[i] = j;
        }
    }
    return prefixTable;
}

function kmpSearch(text: string, pattern: string): number[] {
    const prefixTable = buildPrefixTable(pattern);
    const result: number[] = [];
    let j = 0; // index for pattern

    for (let i = 0; i < text.length; i++) {
        while (j > 0 && text[i] !== pattern[j]) {
            j = prefixTable[j - 1];
        }
        if (text[i] === pattern[j]) {
            j++;
        }
        if (j === pattern.length) {
            result.push(i - j + 1);  // match found at this index
            j = prefixTable[j - 1];
        }
    }
    return result;
}

// Example use:
const text = "ababcabcabababd";
const pattern = "ababd";
const matches = kmpSearch(text, pattern);
console.log(matches);  // Output: [10]
