function computeLPSArray(pattern: string): number[] {
    const m = pattern.length;
    const lps = new Array(m).fill(0);
    
    let len = 0; // Length of the previous longest prefix suffix
    let i = 1;

    while (i < m) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
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

function kmpSearch(text: string, pattern: string): number[] {
    const n = text.length;
    const m = pattern.length;
    const lps = computeLPSArray(pattern);
    const result: number[] = [];

    let i = 0; // text index
    let j = 0; // pattern index

    while (i < n) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === m) {
            result.push(i - j); // Match found, record the starting index
            j = lps[j - 1]; // Look for the next match
        } else if (i < n && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return result; // Return the list of starting indices of matches
}

// Example usage:
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const indices = kmpSearch(text, pattern);
console.log(`Pattern found at indices: ${indices}`);
