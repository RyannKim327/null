function KMP(pattern: string, text: string): number[] {
    const lps = computeLPS(pattern);
    const results: number[] = [];
    let i = 0; // index for text
    let j = 0; // index for pattern

    while (i < text.length) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            results.push(i - j); // Match found at index (i - j)
            j = lps[j - 1]; // Continue searching for next occurrence
        } else if (i < text.length && pattern[j] !== text[i]) {
            // Mismatch after j matches
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }
    return results;
}

function computeLPS(pattern: string): number[] {
    const lps = new Array(pattern.length).fill(0); // Longest Prefix Suffix
    let length = 0; // length of the previous longest prefix suffix
    let i = 1;

    while (i < pattern.length) {
        if (pattern[i] === pattern[length]) {
            length++;
            lps[i] = length;
            i++;
        } else {
            // mismatch after length matches
            if (length !== 0) {
                length = lps[length - 1]; // Also note that lps[0] is always 0
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
const matches = KMP(pattern, text);
console.log("Pattern found at indices:", matches);
