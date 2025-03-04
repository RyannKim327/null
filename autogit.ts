function computeLPSArray(pattern: string): number[] {
    const lps: number[] = new Array(pattern.length).fill(0); // Create LPS array
    let length = 0; // Length of the previous longest prefix suffix
    let i = 1; // We start calculating LPS[1] and so on

    while (i < pattern.length) {
        if (pattern[i] === pattern[length]) {
            length++;
            lps[i] = length;
            i++;
        } else {
            if (length !== 0) {
                length = lps[length - 1]; // Use the previous prefix suffix
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
    const indices: number[] = []; // To store the indices of found pattern
    let i = 0; // Index for text
    let j = 0; // Index for pattern

    while (i < text.length) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            indices.push(i - j); // Pattern found at index (i - j)
            j = lps[j - 1]; // Update j to the last known prefix suffix
        } else if (i < text.length && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1]; // Use the lps to avoid unnecessary checks
            } else {
                i++;
            }
        }
    }
    return indices; // Return the list of starting indices of matches
}

// Example usage:
const text = "ababcabcabababd";
const pattern = "ababd";
const result = KMPSearch(text, pattern);
console.log("Pattern found at indices:", result);
