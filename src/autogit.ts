/**
 * KMP Algorithm for string searching
 */
class KMP {
    // Function to preprocess the pattern and create the LPS array
    private createLPS(pattern: string): number[] {
        const lps: number[] = new Array(pattern.length).fill(0);
        let length = 0; // length of the previous longest prefix suffix
        let i = 1; // i starts from 1 because lps[0] is always 0

        while (i < pattern.length) {
            if (pattern[i] === pattern[length]) {
                length++;
                lps[i] = length;
                i++;
            } else {
                if (length !== 0) {
                    length = lps[length - 1]; // Use LPS to skip comparisons
                } else {
                    lps[i] = 0;
                    i++;
                }
            }
        }

        return lps;
    }

    // Function to perform KMP search
    public search(text: string, pattern: string): number[] {
        const lps = this.createLPS(pattern);
        const occurrences: number[] = [];

        let i = 0; // index for text
        let j = 0; // index for pattern

        while (i < text.length) {
            if (pattern[j] === text[i]) {
                i++;
                j++;
            }

            if (j === pattern.length) {
                occurrences.push(i - j); // Found a match, store the start index
                j = lps[j - 1]; // Use LPS to find the next match
            } else if (i < text.length && pattern[j] !== text[i]) {
                if (j !== 0) {
                    j = lps[j - 1]; // Use LPS to skip comparisons
                } else {
                    i++;
                }
            }
        }

        return occurrences; // Return the list of starting indices of matches
    }
}

// Example usage:
const kmp = new KMP();
const text = "ababcabcabababd";
const pattern = "ababd";
const result = kmp.search(text, pattern);
console.log(`Pattern found at indices: ${result}`);
