class BoyerMoore {
    private pattern: string;
    private badCharTable: Map<string, number>;

    constructor(pattern: string) {
        this.pattern = pattern;
        this.badCharTable = this.buildBadCharTable(pattern);
    }

    private buildBadCharTable(pattern: string): Map<string, number> {
        const table = new Map<string, number>();
        const length = pattern.length;

        for (let i = 0; i < length; i++) {
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
                    const badCharIndex = this.badCharTable.get(text[i + j]) || -1;
                    skip = Math.max(1, j - badCharIndex);
                    break;
                }
            }

            if (skip === 0) {
                // Match found at index i
                return i; // Return the index of the first match
            }
        }

        return -1; // No match found
    }
}

// Example usage:
const bm = new BoyerMoore("abc");
const text = "abcpqrabcxyz";
const index = bm.search(text);

if (index !== -1) {
    console.log(`Pattern found at index: ${index}`);
} else {
    console.log("Pattern not found");
}
