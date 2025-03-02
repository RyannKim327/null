function KMPSearch(pattern: string, text: string): number[] {
    const lps = computeLPSArray(pattern);
    const result: number[] = [];
    let i = 0; // index for text
    let j = 0; // index for pattern

    while (i < text.length) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            result.push(i - j); // Match found, add the index
            j = lps[j - 1]; // Get the next position of the pattern
        } else if (i < text.length && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1]; // Use LPS to skip characters
            } else {
                i++;
            }
        }
    }

    return result;
}

function computeLPSArray(pattern: string): number[] {
    const lps: number[] = new Array(pattern.length).fill(0);
    let len = 0; // Length of the previous longest prefix suffix
    let i = 1;

    while (i < pattern.length) {
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

    return lps;
}

// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const indices = KMPSearch(pattern, text);
console.log("Pattern found at indices:", indices); // Output: Pattern found at indices: [10]
