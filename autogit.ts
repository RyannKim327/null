function computeLPS(pattern: string): number[] {
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
                length = lps[length - 1]; // Use the previously computed lps
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
}

function KMPSearch(text: string, pattern: string): number {
    const m = pattern.length;
    const n = text.length;

    const lps = computeLPS(pattern); // Preprocess the pattern

    let i = 0; // index for text
    let j = 0; // index for pattern

    while (i < n) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === m) {
            // Found pattern at index (i - j)
            return i - j; // index of the pattern in text
        } else if (i < n && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1]; // Move to the next matching position
            } else {
                i++;
            }
        }
    }

    return -1; // Pattern not found
}

// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const result = KMPSearch(text, pattern);

if (result !== -1) {
    console.log(`Pattern found at index: ${result}`);
} else {
    console.log("Pattern not found");
}
