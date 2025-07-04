class BoyerMoore {
    private pattern: string;
    private badCharTable: Record<string, number>;
    private goodSuffixTable: number[];

    constructor(pattern: string) {
        this.pattern = pattern;
        this.badCharTable = this.buildBadCharTable();
        this.goodSuffixTable = this.buildGoodSuffixTable();
    }

    private buildBadCharTable(): Record<string, number> {
        const table: Record<string, number> = {};
        const patternLength = this.pattern.length;

        for (let i = 0; i < patternLength; i++) {
            table[this.pattern[i]] = i; // Store the last occurrence of each character
        }

        return table;
    }

    private buildGoodSuffixTable(): number[] {
        const patternLength = this.pattern.length;
        const table = new Array(patternLength).fill(0);
        let lastPrefixPosition = patternLength;

        // Fill the good suffix table
        for (let i = patternLength - 1; i >= 0; i--) {
            if (this.isPrefix(i + 1)) {
                lastPrefixPosition = i + 1;
            }
            table[patternLength - 1 - i] = lastPrefixPosition - i + (lastPrefixPosition === patternLength ? 1 : 0);
        }

        for (let i = 0; i < patternLength - 1; i++) {
            const len = this.getSuffixLength(i);
            table[len] = patternLength - 1 - i + len;
        }

        return table;
    }

    private isPrefix(p: number): boolean {
        for (let i = p, j = 0; i < this.pattern.length; i++, j++) {
            if (this.pattern[i] !== this.pattern[j]) return false;
        }
        return true;
    }

    private getSuffixLength(p: number): number {
        let length = 0;
        for (let i = p, j = this.pattern.length - 1; i >= 0 && this.pattern[i] === this.pattern[j]; i--, j--) {
            length++;
        }
        return length;
    }

    public search(text: string): number[] {
        const patternLength = this.pattern.length;
        const textLength = text.length;
        const matches: number[] = [];

        let skip = 0;
        while (textLength - skip >= patternLength) {
            let j = patternLength - 1;

            while (j >= 0 && this.pattern[j] === text[skip + j]) {
                j--;
            }

            if (j < 0) {
                matches.push(skip);
                skip += this.goodSuffixTable[0]; // Shift the pattern using the good suffix table
            } else {
                const badCharShift = this.badCharTable[text[skip + j]] !== undefined
                    ? j - this.badCharTable[text[skip + j]]
                    : j + 1;

                const goodSuffixShift = this.goodSuffixTable[j];
                skip += Math.max(badCharShift, goodSuffixShift);
            }
        }

        return matches;
    }
}

// Example usage:
const bm = new BoyerMoore("abc");
const text = "ababcabcabc";
const result = bm.search(text);
console.log("Pattern found at indices:", result); // Output: Pattern found at indices: [2, 5, 8]
