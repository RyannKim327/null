function kmpSearch(text: string, pattern: string): number[] {
    const m = pattern.length;
    const n = text.length;

    // Step 1: Create the partial match table
    const lps = createLpsArray(pattern);

    const result: number[] = []; // Store the indices where matches are found
    let i = 0; // index for text
    let j = 0; // index for pattern

    // Step 2: Perform the search
    while (i < n) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === m) {
            result.push(i - j); // Match found at index i - j
            j = lps[j - 1]; // Use the partial match table to skip the next characters
        } else if (i < n && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1]; // Skip using the lps array
            } else {
                i++;
            }
        }
    }
    return result;
}

function createLpsArray(pattern: string): number[] {
    const length = pattern.length;
    const lps = Array(length).fill(0);
    let len = 0; // Length of the previous longest prefix suffix
    let i = 1;

    while (i < length) {
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

// Example usage
const text = "ababcabcabababd";
const pattern = "ababd";
const matches = kmpSearch(text, pattern);
console.log("Pattern found at indices:", matches);
