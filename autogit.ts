function computeLPSArray(pattern: string): number[] {
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
                length = lps[length - 1]; // Use the previous LPS value
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
}

function kmpSearch(text: string, pattern: string): number[] {
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
            // Match found, record the starting index
            result.push(i - j);
            j = lps[j - 1]; // Get the next character to match
        } else if (i < text.length && pattern[j] !== text[i]) {
            // Mismatch after j matches
            if (j !== 0) {
                j = lps[j - 1]; // Try the next character in pattern
            } else {
                i++;
            }
        }
    }

    return result; // Return all starting indices of matches found
}

// Example Usage:
const text = "ababcabcabababd";
const pattern = "ababd";
const indices = kmpSearch(text, pattern);

console.log(`Pattern found at indices: ${indices.join(", ")}`);
