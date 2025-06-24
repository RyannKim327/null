class BoyerMoore {
    private pattern: string;
    private badCharTable: Map<string, number>;

    constructor(pattern: string) {
        this.pattern = pattern;
        this.badCharTable = this.buildBadCharTable(pattern);
    }

    /**
     * Builds the bad character table.
     * The table maps each character in the pattern to its last occurrence index.
     */
    private buildBadCharTable(pattern: string): Map<string, number> {
        const table = new Map<string, number>();
        for (let i = 0; i < pattern.length; i++) {
            table.set(pattern[i], i); // Store the last occurrence of each character
        }
        return table;
    }

    /**
     * Searches for the pattern in the given text.
     * Returns the starting index of the first occurrence of the pattern, or -1 if not found.
     */
    public search(text: string): number {
        const n = text.length;
        const m = this.pattern.length;

        let s = 0; // Shift of the pattern with respect to the text
        while (s <= n - m) {
            let j = m - 1;

            // Compare the pattern with the text from right to left
            while (j >= 0 && this.pattern[j] === text[s + j]) {
                j--;
            }

            if (j < 0) {
                // Pattern found at index `s`
                return s;
            } else {
                // Shift the pattern using the bad character rule
                const badCharShift = this.badCharTable.get(text[s + j]) ?? -1;
                s += Math.max(1, j - badCharShift);
            }
        }

        // Pattern not found
        return -1;
    }
}

// Example usage:
const pattern = "example";
const text = "This is an example text containing the word example.";
const bm = new BoyerMoore(pattern);
const result = bm.search(text);

if (result !== -1) {
    console.log(`Pattern found at index: ${result}`);
} else {
    console.log("Pattern not found.");
}
Pattern found at index: 11
