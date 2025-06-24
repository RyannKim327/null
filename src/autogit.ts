/**
 * Function to build the shift table for Boyer-Moore-Horspool algorithm.
 * @param pattern - The pattern string to search for.
 * @returns A Map where keys are characters and values are their respective shift distances.
 */
function buildShiftTable(pattern: string): Map<string, number> {
    const shiftTable = new Map<string, number>();
    const patternLength = pattern.length;

    // Initialize the shift table with default value equal to the pattern length
    for (let i = 0; i < patternLength - 1; i++) {
        shiftTable.set(pattern[i], patternLength - 1 - i);
    }

    return shiftTable;
}

/**
 * Implements the Boyer-Moore-Horspool string search algorithm.
 * @param text - The text in which to search for the pattern.
 * @param pattern - The pattern to search for within the text.
 * @returns An array of starting indices where the pattern is found in the text.
 */
function boyerMooreHorspoolSearch(text: string, pattern: string): number[] {
    const n = text.length;
    const m = pattern.length;
    const result: number[] = [];

    if (m === 0) {
        throw new Error("Pattern must not be empty.");
    }

    if (m > n) {
        return result; // Pattern longer than text; no occurrences possible
    }

    const shiftTable = buildShiftTable(pattern);

    let i = 0;

    while (i <= n - m) {
        let j = m - 1;

        // Compare the pattern with the text from the end
        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }

        if (j < 0) {
            // Match found
            result.push(i);
            // Shift the pattern by the length of the pattern
            i += m;
        } else {
            // Mismatch occurred
            const badChar = text[i + m - 1];
            const shift = shiftTable.get(badChar) || m;
            i += shift;
        }
    }

    return result;
}

// Example Usage
const main = () => {
    const text = "HERE IS A SIMPLE EXAMPLE OF BOYER MOORE HORSPROOL ALGORITHM.";
    const pattern = "EXAMPLE";

    try {
        const positions = boyerMooreHorspoolSearch(text, pattern);
        if (positions.length > 0) {
            console.log(`Pattern "${pattern}" found at positions:`, positions);
        } else {
            console.log(`Pattern "${pattern}" not found.`);
        }
    } catch (error) {
        console.error(error.message);
    }
};

main();
Pattern "EXAMPLE" found at positions: [17]
