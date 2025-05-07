function buildLPS(pattern: string): number[] {
    const lps: number[] = new Array(pattern.length).fill(0);
    let len = 0; // Length of previous longest prefix suffix
    let i = 1;   // Current index in pattern

    while (i < pattern.length) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
}

function kmpSearch(text: string, pattern: string): number {
    const lps = buildLPS(pattern);
    let i = 0; // Index for text
    let j = 0; // Index for pattern

    while (i < text.length) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            // Found the pattern at index (i - j)
            return i - j;
        } else if (i < text.length && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }
    // If we reach here, pattern was not found
    return -1;
}

// Example Usage
const text = "ababcabcabababd";
const pattern = "ababd";

const result = kmpSearch(text, pattern);
console.log(result); // Output: 10 (index where "ababd" starts in the text)
