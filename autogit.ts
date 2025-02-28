function computeLPSArray(pattern: string): number[] {
    const lps: number[] = new Array(pattern.length).fill(0);
    let len = 0; // length of the previous longest prefix suffix
    let i = 1;   // we start from the second character

    while (i < pattern.length) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1]; // Use the previous lps value
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
    const indices: number[] = [];
    let i = 0; // index for text
    let j = 0; // index for pattern

    while (i < text.length) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            // Found the pattern, record the index
            indices.push(i - j);
            j = lps[j - 1];
        } else if (i < text.length && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }
    return indices; // return the list of starting indices where the pattern is found
}

// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const result = KMPSearch(text, pattern);

console.log("Pattern found at indices: ", result);
