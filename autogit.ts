function kmpSearch(text: string, pattern: string): number {
    const lps = buildLPS(pattern);
    let i = 0; // index for text
    let j = 0; // index for pattern

    while (i < text.length) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            // Match found; return the starting index of the match
            return i - j;
        } else if (i < text.length && pattern[j] !== text[i]) {
            // Mismatch after j matches
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    // If no match found, return -1
    return -1;
}

function buildLPS(pattern: string): number[] {
    const lps = new Array(pattern.length).fill(0);
    let len = 0; // length of the previous longest prefix suffix
    let i = 1; // index for pattern

    while (i < pattern.length) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            // mismatch after len matches
            if (len !== 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
}

// Example usage:
const text = "ababcabcabcabc";
const pattern = "abc";
const resultIndex = kmpSearch(text, pattern);

if (resultIndex !== -1) {
    console.log(`Pattern found at index: ${resultIndex}`);
} else {
    console.log("Pattern not found");
}
