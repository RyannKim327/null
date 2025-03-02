function kmpSearch(text: string, pattern: string): number[] {
    const m = pattern.length;
    const n = text.length;

    // Create the partial match table (also known as the "prefix table")
    const lps = new Array(m).fill(0);
    computeLPSArray(pattern, m, lps);

    const result: number[] = []; // to store the indices of matches
    let i = 0; // index for text
    let j = 0; // index for pattern

    while (i < n) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }
        
        if (j === m) {
            // Found a match, add the starting index to the result
            result.push(i - j);
            j = lps[j - 1]; // continue searching for next match
        } else if (i < n && pattern[j] !== text[i]) {
            // Mismatch after j matches
            if (j !== 0) {
                j = lps[j - 1]; // use LPS array to skip characters
            } else {
                i++;
            }
        }
    }

    return result; // return the array of match indices
}

function computeLPSArray(pattern: string, m: number, lps: number[]): void {
    let len = 0; // length of the previous longest prefix suffix
    lps[0] = 0; // lps[0] is always 0
    let i = 1;

    while (i < m) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            // mismatch after len matches
            if (len !== 0) {
                len = lps[len - 1]; // also check for the necessary previous matching
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
}

// Example usage
const text = "ababcabcabababd";
const pattern = "ababd";
const matchedIndices = kmpSearch(text, pattern);
console.log("Pattern found at indices:", matchedIndices);
