function computeLPSArray(pattern: string): number[] {
    const lps = new Array(pattern.length).fill(0);
    let length = 0;  // Length of the previous longest prefix suffix
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

function KMPsearch(text: string, pattern: string): number[] {
    const lps = computeLPSArray(pattern);
    const result: number[] = [];
    let i = 0; // Index for text
    let j = 0; // Index for pattern

    while (i < text.length) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            // Pattern found, add the start index to results
            result.push(i - j);
            j = lps[j - 1]; // Update j to look for the next match
        } else if (i < text.length && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1]; // Update j using the lps array
            } else {
                i++;
            }
        }
    }
    return result; // Return the indices where the pattern is found in the text
}

// Example usage:
const text = "ababcababcabc";
const pattern = "abc";
const indices = KMPsearch(text, pattern);

console.log(`Pattern found at indices: ${indices}`);
