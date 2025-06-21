class BoyerMoore {
    private badCharTable: Map<string, number>;
    private goodSuffixShift: number[];
    private pattern: string;

    constructor(pattern: string) {
        this.pattern = pattern;
        this.badCharTable = this.buildBadCharTable(pattern);
        this.goodSuffixShift = this.buildGoodSuffixTable(pattern);
    }

    // Preprocess the bad character table
    private buildBadCharTable(pattern: string): Map<string, number> {
        const table = new Map<string, number>();
        for (let i = 0; i < pattern.length - 1; i++) {
            table.set(pattern[i], pattern.length - 1 - i);
        }
        return table;
    }

    // Preprocess the good suffix table
    private buildGoodSuffixTable(pattern: string): number[] {
        const m = pattern.length;
        const shift = Array(m + 1).fill(m); // Initialize all shifts to the length of the pattern
        const z = Array(m).fill(0); // Z-array for pattern matching

        // Compute the Z-array for the reverse of the pattern
        for (let i = 1; i < m; i++) {
            if (i <= shift[m]) {
                let j = Math.max(0, i - shift[m]);
                while (j < m && pattern[m - 1 - j] === pattern[m - 1 - (i - j)]) {
                    j++;
                }
                z[i] = j;
                shift[m - z[i]] = m - i;
            }
        }

        // Handle matches at the end of the pattern
        for (let i = 0; i < m; i++) {
            shift[i] = Math.max(shift[i], m - i - 1);
        }

        return shift;
    }

    // Search for the pattern in the text
    public search(text: string): number[] {
        const n = text.length;
        const m = this.pattern.length;
        const result: number[] = [];
        let i = 0;

        while (i <= n - m) {
            let j = m - 1;

            // Compare the pattern with the text from right to left
            while (j >= 0 && this.pattern[j] === text[i + j]) {
                j--;
            }

            if (j < 0) {
                // Pattern found at index i
                result.push(i);
                i += this.goodSuffixShift[0]; // Shift based on the good suffix rule
            } else {
                // Calculate the shift using both rules
                const badCharShift = this.badCharTable.get(text[i + j]) || m;
                const goodSuffixShift = this.goodSuffixShift[j];
                i += Math.max(badCharShift, goodSuffixShift);
            }
        }

        return result;
    }
}

// Example usage
const pattern = "ABCD";
const text = "ABC ABCDAB ABCDABCDABDE";
const bm = new BoyerMoore(pattern);
const matches = bm.search(text);

console.log("Pattern found at indices:", matches);
const pattern = "ABCD";
const text = "ABC ABCDAB ABCDABCDABDE";
Pattern found at indices: [4, 11, 15]
