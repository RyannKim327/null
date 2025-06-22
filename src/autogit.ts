class BoyerMoore {
    private badCharTable: Map<string, number>;
    private goodSuffixTable: number[];
    private pattern: string;

    constructor(pattern: string) {
        this.pattern = pattern;
        this.badCharTable = this.buildBadCharTable(pattern);
        this.goodSuffixTable = this.buildGoodSuffixTable(pattern);
    }

    /**
     * Builds the Bad Character Table.
     * This table determines how far to shift the pattern when a mismatch occurs.
     */
    private buildBadCharTable(pattern: string): Map<string, number> {
        const table = new Map<string, number>();
        for (let i = 0; i < pattern.length - 1; i++) {
            table.set(pattern[i], pattern.length - 1 - i);
        }
        return table;
    }

    /**
     * Builds the Good Suffix Table.
     * This table determines how far to shift the pattern based on matched suffixes.
     */
    private buildGoodSuffixTable(pattern: string): number[] {
        const m = pattern.length;
        const table = Array(m).fill(0);
        const border = Array(m + 1).fill(0);

        let i = m;
        let j = m + 1;
        border[i] = j;

        while (i > 0) {
            while (j <= m && pattern[i - 1] !== pattern[j - 1]) {
                if (table[j] === 0) {
                    table[j] = j - i;
                }
                j = border[j];
            }
            i--;
            j--;
            border[i] = j;
        }

        j = border[0];
        for (i = 0; i <= m; i++) {
            if (table[i] === 0) {
                table[i] = j;
            }
            if (i === j) {
                j = border[j];
            }
        }

        return table;
    }

    /**
     * Searches for the pattern in the given text.
     * Returns the starting index of the first occurrence or -1 if not found.
     */
    public search(text: string): number {
        const n = text.length;
        const m = this.pattern.length;

        let s = 0; // Shift of the pattern with respect to the text
        while (s <= n - m) {
            let j = m - 1;

            // Compare the pattern from right to left
            while (j >= 0 && this.pattern[j] === text[s + j]) {
                j--;
            }

            if (j < 0) {
                // Match found
                return s;
            } else {
                // Compute the shift using the Bad Character Rule and Good Suffix Rule
                const badCharShift = this.badCharTable.get(text[s + j]) || m;
                const goodSuffixShift = this.goodSuffixTable[j + 1];
                s += Math.max(badCharShift, goodSuffixShift);
            }
        }

        // No match found
        return -1;
    }
}

// Example usage:
const pattern = "example";
const text = "This is an example of the Boyer-Moore algorithm.";
const bm = new BoyerMoore(pattern);
const result = bm.search(text);

if (result !== -1) {
    console.log(`Pattern found at index ${result}`);
} else {
    console.log("Pattern not found.");
}
Pattern: "example"
Text: "This is an example of the Boyer-Moore algorithm."
Output: Pattern found at index 11
