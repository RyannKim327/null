function computeLPSArray(pattern: string): number[] {
    const m = pattern.length;
    const lps: number[] = new Array(m).fill(0);
    let length = 0; // length of the previous longest prefix suffix
    let i = 1;

    while (i < m) {
        if (pattern[i] === pattern[length]) {
            length++;
            lps[i] = length;
            i++;
        } else {
            if (length !== 0) {
                length = lps[length - 1]; // Use the previous lps value
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
}

function KMPSearch(text: string, pattern: string): number[] {
    const n = text.length;
    const m = pattern.length;
    const lps = computeLPSArray(pattern);
    const result: number[] = [];

    let i = 0; // index for text
    let j = 0; // index for pattern

    while (i < n) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === m) {
            // Found the pattern at index (i - j)
            result.push(i - j);
            j = lps[j - 1]; // Set j to the last matched position
        } else if (i < n && pattern[j] !== text[i]) {
            // Mismatch after j matches
            if (j !== 0) {
                j = lps[j - 1]; // Use the previous lps value
            } else {
                i++; // Move to the next character in text
            }
        }
    }
    return result;
}

// Example usage:
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const result = KMPSearch(text, pattern);
console.log("Pattern found at indices:", result);
