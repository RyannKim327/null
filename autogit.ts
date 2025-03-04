function computePrefixTable(pattern: string): number[] {
    const prefixTable = new Array(pattern.length).fill(0);
    let j = 0; // length of the previous longest prefix suffix

    for (let i = 1; i < pattern.length; i++) {
        while (j > 0 && pattern[i] !== pattern[j]) {
            j = prefixTable[j - 1]; // Update j to the last matched prefix
        }
        if (pattern[i] === pattern[j]) {
            j++;
        }
        prefixTable[i] = j; // Update prefix table
    }

    return prefixTable;
}

function kmpSearch(text: string, pattern: string): number[] {
    const prefixTable = computePrefixTable(pattern);
    const occurrences: number[] = [];

    let j = 0; // index for pattern
    for (let i = 0; i < text.length; i++) {
        while (j > 0 && text[i] !== pattern[j]) {
            j = prefixTable[j - 1]; // Backtrack in the pattern
        }
        if (text[i] === pattern[j]) {
            j++;
        }
        if (j === pattern.length) { // Match found
            occurrences.push(i - j + 1); // Store the starting index of match
            j = prefixTable[j - 1]; // Continue to look for the next match
        }
    }

    return occurrences; // Return all start indices of matches
}

// Example usage:
const text = "ababcabcabababd";
const pattern = "ababd";
const result = kmpSearch(text, pattern);
console.log(`Pattern found at indices: ${result}`); // Output: Pattern found at indices: [ 10 ]
