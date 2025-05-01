function createBadCharacterTable(pattern: string): { [key: string]: number } {
    const badCharTable: { [key: string]: number } = {};
    const patternLength = pattern.length;

    // Fill in the bad character table with the last occurrence of each character
    for (let i = 0; i < patternLength; i++) {
        // Store the last occurrence index of each character
        badCharTable[pattern[i]] = i;
    }

    return badCharTable;
}

function boyerMooreHorspool(text: string, pattern: string): number {
    const badCharTable = createBadCharacterTable(pattern);
    const patternLength = pattern.length;
    const textLength = text.length;
    
    let index = 0; // Index in the text

    while (index <= textLength - patternLength) {
        let j = patternLength - 1;

        // Continue moving backwards while characters match
        while (j >= 0 && text[index + j] === pattern[j]) {
            j--;
        }

        if (j < 0) {
            // Match found
            return index; // Return the index of the match
        } else {
            // Calculate the shift using the bad character table
            const badCharShift = badCharTable[text[index + j]] !== undefined 
                ? j - badCharTable[text[index + j]]
                : j + 1;
            
            // Shift the index by the calculated amount
            index += badCharShift;
        }
    }

    return -1; // Return -1 if no match is found
}

// Example usage
const text = "ababcabcabababd";
const pattern = "ababd";
const result = boyerMooreHorspool(text, pattern);

if (result !== -1) {
    console.log(`Pattern found at index: ${result}`);
} else {
    console.log("Pattern not found.");
}
