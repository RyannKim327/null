/**
 * Function to compute the Longest Prefix Suffix (LPS) array.
 * @param pattern The pattern string.
 * @returns An array representing the LPS values for each position in the pattern.
 */
function computeLPS(pattern: string): number[] {
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
                // Fall back in the LPS array
                length = lps[length - 1];
                // Note: Do not increment 'i' here
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
}

/**
 * KMP Search Algorithm.
 * @param text The text string where the pattern is to be searched.
 * @param pattern The pattern string to search for.
 * @returns An array of starting indices where the pattern is found in the text.
 */
function KMPSearch(text: string, pattern: string): number[] {
    const n = text.length;
    const m = pattern.length;

    if (m === 0) {
        throw new Error("Pattern must not be empty.");
    }

    const lps = computeLPS(pattern);
    const result: number[] = [];

    let i = 0; // Index for text
    let j = 0; // Index for pattern

    while (i < n) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === m) {
            // Match found at index i - j
            result.push(i - j);
            j = lps[j - 1]; // Continue searching for next possible match
        } else if (i < n && pattern[j] !== text[i]) {
            // Mismatch after j matches
            if (j !== 0) {
                j = lps[j - 1];
                // Do not increment 'i' here
            } else {
                i++;
            }
        }
    }

    return result;
}

// Example Usage:
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

const occurrences = KMPSearch(text, pattern);
console.log(`Pattern found at indices: ${occurrences}`);
Pattern found at indices: 10
