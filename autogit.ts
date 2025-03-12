class BoyerMoore {
    private pattern: string;
    private badCharTable: Map<string, number>;

    constructor(pattern: string) {
        this.pattern = pattern;
        this.badCharTable = this.buildBadCharTable(pattern);
    }

    private buildBadCharTable(pattern: string): Map<string, number> {
        const table = new Map<string, number>();
        const patternLength = pattern.length;

        for (let i = 0; i < patternLength; i++) {
            // Store the last occurrence of each character in the pattern
            table.set(pattern[i], i);
        }

        return table;
    }

    public search(text: string): number {
        const patternLength = this.pattern.length;
        const textLength = text.length;
        let skip: number;

        for (let i = 0; i <= textLength - patternLength; i += skip) {
            skip = 0;

            for (let j = patternLength - 1; j >= 0; j--) {
                if (this.pattern[j] !== text[i + j]) {
                    // If there's a mismatch, use the bad character rule
                    const lastOccurrence = this.badCharTable.get(text[i + j]) || -1;
                    skip = Math.max(1, j - lastOccurrence);
                    break;
                }
            }

            if (skip === 0) {
                // Match found
                return i; // Return the starting index of the match
            }
        }

        return -1; // No match found
    }
}

// Example usage:
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const bm = new BoyerMoore(pattern);
const result = bm.search(text);

if (result !== -1) {
    console.log(`Pattern found at index: ${result}`);
} else {
    console.log("Pattern not found");
}
