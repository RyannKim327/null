function computeLPSArray(pattern: string): number[] {
    const lps: number[] = new Array(pattern.length).fill(0);
    let length = 0; // Length of the previous longest prefix suffix
    let i = 1;

    while (i < pattern.length) {
        if (pattern[i] === pattern[length]) {
            length++;
            lps[i] = length;
            i++;
        } else {
            if (length !== 0) {
                // Try to find a shorter prefix that matches
                length = lps[length - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
}

function kmpSearch(text: string, pattern: string): number[] {
    const result: number[] = [];
    const n = text.length;
    const m = pattern.length;

    if (m === 0) return result; // Edge case: empty pattern

    const lps = computeLPSArray(pattern);

    let i = 0; // Index for text
    let j = 0; // Index for pattern

    while (i < n) {
        if (text[i] === pattern[j]) {
            i++;
            j++;
        }

        if (j === m) {
            // Pattern found at index i - j
            result.push(i - j);
            j = lps[j - 1]; // Continue searching for more occurrences
        } else if (i < n && text[i] !== pattern[j]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return result;
}

// Example usage:
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const matches = kmpSearch(text, pattern);
console.log("Pattern found at indices:", matches);
