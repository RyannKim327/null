class KMP {
    // Method to create LPS array
    private createLPS(pattern: string): number[] {
        const lps: number[] = new Array(pattern.length).fill(0);
        let length = 0; // length of the previous longest prefix suffix
        let i = 1;

        while (i < pattern.length) {
            if (pattern[i] === pattern[length]) {
                length++;
                lps[i] = length;
                i++;
            } else {
                if (length !== 0) {
                    length = lps[length - 1];
                } else {
                    lps[i] = 0;
                    i++;
                }
            }
        }
        return lps;
    }

    // Method to perform KMP search
    public kmpSearch(text: string, pattern: string): number {
        const lps = this.createLPS(pattern);
        let i = 0; // index for text
        let j = 0; // index for pattern

        while (i < text.length) {
            if (pattern[j] === text[i]) {
                i++;
                j++;
            }

            if (j === pattern.length) {
                // Found the pattern at index (i - j)
                return i - j; // return the starting index of the match
            } else if (i < text.length && pattern[j] !== text[i]) {
                // Mismatch after j matches
                if (j !== 0) {
                    j = lps[j - 1];
                } else {
                    i++;
                }
            }
        }
        return -1; // Pattern not found
    }
}

// Example usage:
const kmp = new KMP();
const text = "ababcabcabababd";
const pattern = "ababd";
const index = kmp.kmpSearch(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index: ${index}`);
} else {
    console.log("Pattern not found");
}
