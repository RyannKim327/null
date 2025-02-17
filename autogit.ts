function KMPSearch(pattern: string, text: string): number[] {
    const m = pattern.length;
    const n = text.length;

    // Create the LPS array
    const lps = new Array(m).fill(0);
    computeLPSArray(pattern, m, lps);

    const result: number[] = [];
    let i = 0; // index for text
    let j = 0; // index for pattern

    while (i < n) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === m) {
            result.push(i - j); // Match found
            j = lps[j - 1]; // Set j based on lps
        } else if (i < n && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1]; // Use LPS to avoid unnecessary comparisons
            } else {
                i++;
            }
        }
    }

    return result;
}

function computeLPSArray(pattern: string, m: number, lps: number[]): void {
    let len = 0; // Length of previous longest prefix suffix
    lps[0] = 0; // LPS[0] is always 0

    let i = 1;
    while (i < m) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1]; // Use the previous LPS value
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
}

// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const matches = KMPSearch(pattern, text);
console.log(`Pattern found at indices: ${matches}`);
