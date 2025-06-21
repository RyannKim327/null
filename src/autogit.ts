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
                len = lps[len - 1]; // Try to find a shorter prefix that matches
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
}

function KMPSearch(text: string, pattern: string): number[] {
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
            // Match found at index (i - j)
            result.push(i - j);
            j = lps[j - 1]; // Continue searching for next occurrence
        } else if (i < n && text[i] !== pattern[j]) {
            if (j !== 0) {
                j = lps[j - 1]; // Use LPS array to skip characters
            } else {
                i++; // Move to the next character in the text
            }
        }
    }

    return result;
}

// Example Usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

const matches = KMPSearch(text, pattern);
console.log("Pattern found at indices:", matches);
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
Pattern found at indices: [10]
