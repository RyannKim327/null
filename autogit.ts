function createBadCharTable(pattern: string): Record<string, number> {
    const badCharTable: Record<string, number> = {};
    const m = pattern.length;

    for (let i = 0; i < m; i++) {
        badCharTable[pattern[i]] = i; // Store the last occurrence of each character
    }

    return badCharTable;
}

function createGoodSuffixTable(pattern: string): number[] {
    const m = pattern.length;
    const goodSuffixTable = new Array(m).fill(0);
    const z = new Array(m).fill(0);
    let j = 0;

    // Calculate Z values
    for (let i = 1; i < m; i++) {
        if (i + j < m && pattern[z[i + j]] === pattern[i]) {
            z[i] = z[i + j] + 1;
        } else {
            if (i + j >= m) {
                j = 0;
            }
            while (i + j < m && pattern[j] === pattern[i + j]) {
                j++;
            }
            z[i] = j;
        }
    }

    // Fill out good suffix table
    for (let i = 0; i < m; i++) {
        goodSuffixTable[m - 1 - z[i]] = i;
    }

    return goodSuffixTable;
}

function boyerMooreSearch(text: string, pattern: string): number[] {
    const badCharTable = createBadCharTable(pattern);
    const goodSuffixTable = createGoodSuffixTable(pattern);
    const n = text.length;
    const m = pattern.length;
    const occurrences: number[] = [];

    let s = 0; // Shift of the pattern against text

    while (s <= n - m) {
        let j = m - 1;

        while (j >= 0 && pattern[j] === text[s + j]) {
            j--;
        }

        if (j < 0) {
            occurrences.push(s);
            s += goodSuffixTable[0]; // Shift the pattern by the good suffix
        } else {
            const badCharShift = badCharTable[text[s + j]] !== undefined ? j - badCharTable[text[s + j]] : j + 1;
            const goodSuffixShift = goodSuffixTable[j];
            s += Math.max(badCharShift, goodSuffixShift);
        }
    }

    return occurrences;
}

// Example usage
const text = "ABAAABCDABABCAABABCABAB";
const pattern = "ABABCABAB";
const result = boyerMooreSearch(text, pattern);
console.log(result); // Output the starting indexes of occurrences
