function computeLPSArray(pattern: string): number[] {
    const lps: number[] = new Array(pattern.length).fill(0);
    let len = 0; // Length of the previous longest prefix suffix
    let i = 1;

    while (i < pattern.length) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                // Don't match lps[0..lps[len-1]] characters, they will match anyway
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
}

function KMPSearch(text: string, pattern: string): number {
    const m = pattern.length;
    const n = text.length;
    const lps = computeLPSArray(pattern);

    let i = 0; // index for text
    let j = 0; // index for pattern

    while (i < n) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === m) {
            // Pattern found at index (i - j)
            return i - j; // Return the index of the first occurrence
            j = lps[j - 1]; // Reset j using lps
        } else if (i < n && pattern[j] !== text[i]) {
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

// Example usage:
const text = "ababcabcabababd";
const pattern = "ababd";
const index = KMPSearch(text, pattern);
console.log(`Pattern found at index: ${index}`);
