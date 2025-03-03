function computeLPSArray(pattern: string): number[] {
    const lps: number[] = new Array(pattern.length).fill(0);
    let len = 0; // length of the previous longest prefix suffix
    let i = 1;

    while (i < pattern.length) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1]; // Use LPS to avoid redundant comparisons
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
}

function KMPSearch(text: string, pattern: string): number[] {
    const lps = computeLPSArray(pattern);
    const result: number[] = [];

    let i = 0; // index for text
    let j = 0; // index for pattern

    while (i < text.length) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            // Found the pattern at index (i - j)
            result.push(i - j);
            j = lps[j - 1]; // Continue to search for the next match
        } else if (i < text.length && pattern[j] !== text[i]) {
            // Mismatch after j matches
            if (j !== 0) {
                j = lps[j - 1]; // Use LPS array to skip characters in the pattern
            } else {
                i++;
            }
        }
    }

    return result;
}

// Example usage:
const text = "ababcabcabababd";
const pattern = "ababd";
const matches = KMPSearch(text, pattern);
console.log(`Pattern found at indices: ${matches.join(', ')}`);
