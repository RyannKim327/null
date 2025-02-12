class BoyerMoore {
    private pattern: string;
    private skip: number[];
    private patternLength: number;

    constructor(pattern: string) {
        this.pattern = pattern;
        this.patternLength = pattern.length;
        this.skip = this.preprocessPattern();
    }

    private preprocessPattern(): number[] {
        const skip = new Array(256).fill(this.patternLength);
        for (let i = 0; i < this.patternLength - 1; i++) {
            const charCode = this.pattern.charCodeAt(i);
            skip[charCode] = this.patternLength - 1 - i;
        }
        return skip;
    }

    public search(text: string): number {
        const textLength = text.length;
        let i = 0;

        while (i <= textLength - this.patternLength) {
            let j = this.patternLength - 1;

            // Compare the pattern with the text
            while (j >= 0 && this.pattern[j] === text[i + j]) {
                j--;
            }

            // If the pattern is found
            if (j < 0) {
                return i; // Match found at index i
            }

            // Calculate the skip value
            i += this.skip[text.charCodeAt(i + this.patternLength - 1)];
        }

        return -1; // Match not found
    }
}

// Example usage:
const bm = new BoyerMoore("pattern");
const text = "This is a sample text with a pattern somewhere.";
const index = bm.search(text);
console.log(index); // Output: index where pattern is found, or -1 if not found
