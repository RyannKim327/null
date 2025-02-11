function kmpSearch(text: string, pattern: string): number[] {
    // Step 1: Preprocess the pattern to create the LPS array
    const lps = buildLPS(pattern);
    const result: number[] = [];
    let i = 0; // index for text
    let j = 0; // index for pattern

    while (i < text.length) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            // Match found, save the starting index
            result.push(i - j);
            j = lps[j - 1]; // Use lps to continue searching
        } else if (i < text.length && pattern[j] !== text[i]) {
            // Mismatch occurs
            if (j !== 0) {
                j = lps[j - 1]; // Use lps to skip characters of the pattern
            } else {
                i++; // Move to the next character in the text
            }
        }
    }

    return result;
}

function buildLPS(pattern: string): number[] {
    const lps = new Array(pattern.length).fill(0);
    let length = 0; // Length of the previous longest prefix suffix
    let i = 1; // Start from the second character

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

// Example usage
const text = "ababcabcabababd";
const pattern = "ababd";
const matches = kmpSearch(text, pattern);
console.log(`Pattern found at indices: ${matches.join(', ')}`);
