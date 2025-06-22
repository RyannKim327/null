function computeLPS(pattern: string): number[] {
    const lps: number[] = new Array(pattern.length).fill(0);
    let length = 0; // Length of the previous longest prefix suffix
    let i = 1;

    while (i < pattern.length) {
        if (pattern[i] === pattern[length]) {
            length++;
            lps[i] = length;
            i++;
        } else {
            if (length !== 0) {
                // Fall back to the previous longest prefix suffix
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
    const lps = computeLPS(pattern);
    const result: number[] = [];
    let i = 0; // Index for text
    let j = 0; // Index for pattern

    while (i < text.length) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            // Match found at index `i - j`
            result.push(i - j);
            j = lps[j - 1]; // Continue searching for next match
        } else if (i < text.length && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1]; // Use LPS array to skip characters
            } else {
                i++;
            }
        }
    }

    return result;
}
const text = "ABABDABACDABABCABAB";
const pattern = "ABABC";

const matches = KMPSearch(text, pattern);
console.log("Pattern found at indices:", matches);
Pattern found at indices: [10]
function computeLPS(pattern: string): number[] {
    const lps: number[] = new Array(pattern.length).fill(0);
    let length = 0;
    let i = 1;

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
    const lps = computeLPS(pattern);
    const result: number[] = [];
    let i = 0;
    let j = 0;

    while (i < text.length) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            result.push(i - j);
            j = lps[j - 1];
        } else if (i < text.length && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return result;
}

// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABC";

const matches = KMPSearch(text, pattern);
console.log("Pattern found at indices:", matches);
