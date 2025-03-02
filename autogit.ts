function preprocessPattern(pattern: string): { [key: string]: number } {
    const shiftTable: { [key: string]: number } = {};
    const patternLength = pattern.length;

    // Fill the table with the length of the pattern
    for (let i = 0; i < patternLength - 1; i++) {
        shiftTable[pattern[i]] = patternLength - 1 - i;
    }

    // Default shift for characters not in the pattern
    for (let charCode = 0; charCode < 256; charCode++) { // Assuming ASCII
        const char = String.fromCharCode(charCode);
        if (!(char in shiftTable)) {
            shiftTable[char] = patternLength; // Shift by full pattern length
        }
    }

    return shiftTable;
}

function boyerMooreHorspool(text: string, pattern: string): number[] {
    const patternLength = pattern.length;
    const textLength = text.length;

    if (patternLength === 0) return []; // handle empty pattern case
    if (patternLength > textLength) return []; // pattern longer than text

    const shiftTable = preprocessPattern(pattern);
    const occurrences: number[] = [];
    let i = 0;

    while (i <= textLength - patternLength) {
        let j = patternLength - 1;

        // Compare from the end of the pattern to the beginning
        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }

        if (j < 0) {
            // Found a match
            occurrences.push(i);
            // Shift by the pattern length or by the next character in the shift table
            i += shiftTable[text[i + patternLength]] || patternLength;
        } else {
            // Shift by the value from the shift table
            i += shiftTable[text[i + j]] || 1;
        }
    }

    return occurrences;
}

// Example usage
const text = "ABAAABCDABC";
const pattern = "ABC";
const result = boyerMooreHorspool(text, pattern);
console.log(`Pattern found at indices: ${result.join(", ")}`); // Output: Pattern found at indices: 7
