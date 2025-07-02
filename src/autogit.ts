function buildShiftTable(pattern: string): { [char: string]: number } {
    const shiftTable: { [char: string]: number } = {};
    const patternLength = pattern.length;

    // For all characters except the last one in the pattern
    for (let i = 0; i < patternLength - 1; i++) {
        shiftTable[pattern[i]] = patternLength - 1 - i;
    }

    return shiftTable;
}

function boyerMooreHorspoolSearch(text: string, pattern: string): number[] {
    const shiftTable = buildShiftTable(pattern);
    const patternLength = pattern.length;
    const textLength = text.length;
    const resultIndices: number[] = [];

    let index = 0;

    while (index <= textLength - patternLength) {
        let matchIndex = patternLength - 1;

        // Compare pattern from the end
        while (matchIndex >= 0 && pattern[matchIndex] === text[index + matchIndex]) {
            matchIndex--;
        }

        if (matchIndex < 0) {
            // Match found
            resultIndices.push(index);
            // Shift pattern to align after current match
            index += patternLength;
        } else {
            const mismatchedChar = text[index + patternLength - 1];
            // Use shift table; if character not in table, shift by pattern length
            const shift = shiftTable[mismatchedChar] || patternLength;
            index += shift;
        }
    }

    return resultIndices;
}

// Example usage:
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

const matches = boyerMooreHorspoolSearch(text, pattern);
console.log("Pattern found at indices:", matches);
