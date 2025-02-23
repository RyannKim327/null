function computeLPSArray(pattern: string): number[] {
    const lps: number[] = new Array(pattern.length).fill(0);
    let length = 0; // length of the previous longest prefix suffix
    let i = 1;

    while (i < pattern.length) {
        if (pattern[i] === pattern[length]) {
            length++;
            lps[i] = length;
            i++;
        } else {
            if (length !== 0) {
                length = lps[length - 1]; // Use the previous LPS value
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
}

function KMPSearch(text: string, pattern: string): number[] {
    const M = pattern.length;
    const N = text.length;
    const lps = computeLPSArray(pattern);
    const resultIndices: number[] = [];

    let i = 0; // index for text
    let j = 0; // index for pattern

    while (i < N) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === M) {
            resultIndices.push(i - j); // Found a match
            j = lps[j - 1]; // Move to the next character in the pattern
        } else if (i < N && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1]; // Move to the previous matched character
            } else {
                i++;
            }
        }
    }

    return resultIndices;
}

// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const result = KMPSearch(text, pattern);
console.log("Pattern found at indices:", result);
