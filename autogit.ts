function KMPSearch(pattern: string, text: string): number[] {
    const lps = computeLPSArray(pattern);
    const occurrences: number[] = [];
    
    let i = 0; // index for text
    let j = 0; // index for pattern

    while (i < text.length) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            occurrences.push(i - j); // Match found at index (i-j)
            j = lps[j - 1]; // Get the next position in the pattern
        } else if (i < text.length && pattern[j] !== text[i]) {
            // Mismatch after j matches
            if (j !== 0) {
                j = lps[j - 1]; // Use the LPS array to skip characters
            } else {
                i++; // Move to the next character in the text
            }
        }
    }

    return occurrences;
}

function computeLPSArray(pattern: string): number[] {
    const lps = new Array(pattern.length).fill(0);
    let len = 0; // Length of the previous longest prefix suffix
    let i = 1; // Start with the second character

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

// Example usage
const text = "abcabcabd";
const pattern = "abcabd";
const matches = KMPSearch(pattern, text);
console.log("Pattern found at indices:", matches);
