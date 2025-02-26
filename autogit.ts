function KMPSearch(pattern: string, text: string): number[] {
    const lps = createLPS(pattern);
    const result: number[] = [];
    
    let i = 0; // index for text
    let j = 0; // index for pattern
    const m = pattern.length;
    const n = text.length;

    while (i < n) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === m) {
            result.push(i - j); // Found a match
            j = lps[j - 1]; // Continue to search for next match
        } else if (i < n && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1]; // Use LPS to skip unnecessary comparisons
            } else {
                i++;
            }
        }
    }

    return result; // Returning all match starting indices
}

function createLPS(pattern: string): number[] {
    const lps = new Array(pattern.length).fill(0);
    let length = 0; // Length of the previous longest prefix suffix
    let i = 1;

    while (i < pattern.length) {
        if (pattern[i] === pattern[length]) {
            length++;
            lps[i] = length;
            i++;
        } else {
            if (length !== 0) {
                length = lps[length - 1]; // Use previously computed LPS
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    
    return lps;
}

// Example usage
const text = "ababcababcabcabc";
const pattern = "abc";
const matches = KMPSearch(pattern, text);
console.log("Pattern found at indices:", matches); // Output: [2, 7, 12]
