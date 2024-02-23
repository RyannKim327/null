function generatePrefixTable(pattern) {
    const prefix = Array(pattern.length).fill(0);
    let j = 0;

    for (let i = 1; i < pattern.length; i++) {
        while (j > 0 && pattern[i] !== pattern[j]) {
            j = prefix[j - 1];
        }
        if (pattern[i] === pattern[j]) {
            j++;
        }
        prefix[i] = j;
    }

    return prefix;
}
function kmpSearch(text, pattern) {
    const prefixTable = generatePrefixTable(pattern);
    const result = [];

    let j = 0;
    for (let i = 0; i < text.length; i++) {
        while (j > 0 && text[i] !== pattern[j]) {
            j = prefixTable[j - 1];
        }
        if (text[i] === pattern[j]) {
            j++;
        }
        if (j === pattern.length) {
            result.push(i - j + 1);
            j = prefixTable[j - 1];
        }
    }

    return result;
}
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

const result = kmpSearch(text, pattern);

console.log("Pattern found at positions:", result);
