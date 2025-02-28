function computePrefixTable(pattern: string): number[] {
    const prefixTable = new Array(pattern.length).fill(0);
    let j = 0;

    for (let i = 1; i < pattern.length; i++) {
        while (j > 0 && pattern[i] !== pattern[j]) {
            j = prefixTable[j - 1];
        }
        if (pattern[i] === pattern[j]) {
            j++;
            prefixTable[i] = j;
        } else {
            prefixTable[i] = 0;
        }
    }

    return prefixTable;
}
function KMPSearch(text: string, pattern: string): number[] {
    const prefixTable = computePrefixTable(pattern);
    const result: number[] = [];
    let j = 0;

    for (let i = 0; i < text.length; i++) {
        while (j > 0 && text[i] !== pattern[j]) {
            j = prefixTable[j - 1];
        }
        if (text[i] === pattern[j]) {
            j++;
            if (j === pattern.length) {
                result.push(i - j + 1); // Found a match
                j = prefixTable[j - 1]; // Continue searching for the next match
            }
        }
    }

    return result; // Return the starting indices of all matches
}
const text = "ababcabcabababd";
const pattern = "ababd";

const matches = KMPSearch(text, pattern);
console.log("Pattern found at indices:", matches);
