function KMPSearch(text: string, pattern: string): number[] {
    const lps = computeLPSArray(pattern);
    const result: number[] = [];
    let i = 0; // Index for text
    let j = 0; // Index for pattern

    while (i < text.length) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            result.push(i - j); // Found a match
            j = lps[j - 1]; // Continue to search for more matches
        } else if (i < text.length && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1]; // Use LPS to skip characters
            } else {
                i++;
            }
        }
    }

    return result; // Return all starting indices of the matches
}

function computeLPSArray(pattern: string): number[] {
    const lps: number[] = Array(pattern.length).fill(0);
    let length = 0; // Length of the previous longest prefix suffix
    let i = 1; // We start from the second character

    while (i < pattern.length) {
        if (pattern[i] === pattern[length]) {
            length++;
            lps[i] = length;
            i++;
        } else {
            if (length !== 0) {
                length = lps[length - 1]; // Use LPS to skip characters
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
}

// Example usage:
const text = "ababcabcabababd";
const pattern = "ababd";
const indices = KMPSearch(text, pattern);
console.log(`Pattern found at indices: ${indices}`);
