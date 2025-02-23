function kmpSearch(text: string, pattern: string): number[] {
    const lps = buildLPS(pattern);
    const result: number[] = [];
    let i = 0; // index for text
    let j = 0; // index for pattern

    while (i < text.length) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            result.push(i - j); // Match found, add the starting index to results
            j = lps[j - 1]; // Get the next pattern index
        } else if (i < text.length && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1]; // Use the LPS array to skip characters in pattern
            } else {
                i++;
            }
        }
    }
    return result; // Return all starting indices of matches
}

function buildLPS(pattern: string): number[] {
    const lps = new Array(pattern.length).fill(0);
    let len = 0; // Length of the previous longest prefix suffix
    let i = 1;   // Start comparing from the second character

    while (i < pattern.length) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1]; // Use the LPS to avoid unnecessary comparisons
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
}

// Example usage
const text = "ababcabcabababd";
const pattern = "ababd";
const matches = kmpSearch(text, pattern);
console.log("Pattern found at indices:", matches); // Output: Pattern found at indices: [ 10 ]
