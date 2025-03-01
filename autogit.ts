function computeLPSArray(pattern: string): number[] {
    const lps: number[] = new Array(pattern.length).fill(0);
    let length = 0; // length of the previous longest prefix suffix
    let i = 1; // the loop calculates lps[i] for i = 1 to M-1

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

function KMPSearch(text: string, pattern: string): number[] {
    const lps = computeLPSArray(pattern);
    const occurrences: number[] = [];
    
    let i = 0; // index for text
    let j = 0; // index for pattern

    while (i < text.length) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            // Found a match, recording the start index
            occurrences.push(i - j);
            j = lps[j - 1]; // use lps to skip unnecessary comparisons
        } else if (i < text.length && pattern[j] !== text[i]) {
            // mismatch after j matches
            if (j !== 0) {
                j = lps[j - 1]; // use the lps array to skip characters
            } else {
                i++;
            }
        }
    }
    return occurrences;
}

// Example Usage:
const text = "ababcabcabababd";
const pattern = "ababd";
const result = KMPSearch(text, pattern);
console.log(`Pattern found at indices: ${result.join(', ')}`);
