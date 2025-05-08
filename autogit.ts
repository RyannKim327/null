function kmpSearch(text: string, pattern: string): number[] {
    const lps = computeLpsArray(pattern); // Build the LPS array
    const result: number[] = [];
    let j = 0; // Index for pattern
    let i = 0; // Index for text

    while (i < text.length) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            result.push(i - j); // Match found at index (i - j)
            j = lps[j - 1]; // Get the next character to compare
        } else if (i < text.length && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1]; // Use LPS to skip characters
            } else {
                i++;
            }
        }
    }

    return result; // Return all starting indices of matches
}

function computeLpsArray(pattern: string): number[] {
    const lps = new Array(pattern.length).fill(0);
    let length = 0; // Length of previous longest prefix suffix
    let i = 1; // Start from the second character

    while (i < pattern.length) {
        if (pattern[i] === pattern[length]) {
            length++;
            lps[i] = length;
            i++;
        } else {
            if (length !== 0) {
                length = lps[length - 1]; // Use LPS value
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps; // Return the computed LPS array
}

// Example usage
const text = "abcabcabcd";
const pattern = "abcab";
const matches = kmpSearch(text, pattern);
console.log(`Pattern found at indices: ${matches.join(', ')}`);
