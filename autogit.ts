function buildBadCharacterTable(pattern: string): { [key: string]: number } {
    const table: { [key: string]: number } = {};
    for (let i = 0; i < pattern.length; i++) {
        table[pattern[i]] = i;
    }
    return table;
}
function boyerMooreSearch(text: string, pattern: string): number[] {
    const badCharTable = buildBadCharacterTable(pattern);
    const matches: number[] = [];
    const m = pattern.length;
    const n = text.length;
    let s = 0; // shift of the pattern with respect to text

    while (s <= n - m) {
        let j = m - 1;

        // Decrease j while characters match
        while (j >= 0 && pattern[j] === text[s + j]) {
            j--;
        }

        if (j < 0) {
            // Pattern found at position s
            matches.push(s);
            s += s + m < n ? m - (badCharTable[text[s + m]] ?? -1) : 1; // shift pattern
        } else {
            const badCharShift = badCharTable[text[s + j]] ?? -1;
            s += Math.max(1, j - badCharShift);
        }
    }
    return matches;
}
const text = "HERE IS A SIMPLE EXAMPLE";
const pattern = "EXAMPLE";

const positions = boyerMooreSearch(text, pattern);
console.log(positions); // Outputs: [17]
