class BoyerMoore {
    private pattern: string;
    private badCharTable: number[];
    private goodSuffixTable: number[];

    constructor(pattern: string) {
        this.pattern = pattern;
        this.badCharTable = this.buildBadCharTable(pattern);
        this.goodSuffixTable = this.buildGoodSuffixTable(pattern);
    }

    private buildBadCharTable(pattern: string): number[] {
        const badCharTable = Array(256).fill(-1);
        for (let i = 0; i < pattern.length; i++) {
            badCharTable[pattern.charCodeAt(i)] = i;
        }
        return badCharTable;
    }

    private buildGoodSuffixTable(pattern: string): number[] {
        const m = pattern.length;
        const goodSuffixTable = Array(m + 1).fill(m);
        const lastPrefixPosition = m;

        // Create a suffix array that indicates the shift distance for matched suffixes
        for (let i = m - 1; i >= 0; i--) {
            if (this.isPrefix(pattern, i + 1)) {
                lastPrefixPosition = i + 1;
            }
            goodSuffixTable[m - i - 1] = lastPrefixPosition - i + m;
        }

        for (let i = 0; i < m - 1; i++) {
            const length = m - 1 - this.longestSuffixPrefix(pattern, i);
            goodSuffixTable[length] = Math.min(goodSuffixTable[length], m - 1 - i);
        }

        return goodSuffixTable;
    }

    private isPrefix(pattern: string, p: number): boolean {
        for (let i = p, j = 0; i < pattern.length; i++, j++) {
            if (pattern[i] !== pattern[j]) return false;
        }
        return true;
    }

    private longestSuffixPrefix(pattern: string, p: number): number {
        let length = 0;
        let i = p;
        let j = pattern.length - 1;
        while (i >= 0 && pattern[i] === pattern[j]) {
            length++;
            i--;
            j--;
        }
        return length;
    }

    public search(text: string): number[] {
        const occurrences: number[] = [];
        const n = text.length;
        const m = this.pattern.length;

        let skip;
        for (let i = 0; i <= n - m; ) {
            skip = 0;
            for (let j = m - 1; j >= 0; j--) {
                if (this.pattern[j] !== text[i + j]) {
                    const badCharShift = j - this.badCharTable[text.charCodeAt(i + j)];
                    const goodSuffixShift = this.goodSuffixTable[j + 1];
                    skip = Math.max(badCharShift, goodSuffixShift);
                    break;
                }
            }
            if (skip === 0) {
                occurrences.push(i);
                skip = this.goodSuffixTable[0];
            }
            i += skip;
        }

        return occurrences;
    }
}

// Example usage:
const bm = new BoyerMoore("abc");
const text = "ababcabc";
const result = bm.search(text);
console.log("Pattern found at indices:", result); // Output: Pattern found at indices: [ 2, 5 ]
