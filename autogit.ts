function boyerMooreSearch(text: string, pattern: string): number[] {
    const patternLength = pattern.length;
    const textLength = text.length;

    // Create the bad character table
    const badChar = new Map<string, number>();
    for (let i = 0; i < patternLength; i++) {
        badChar.set(pattern[i], i);
    }

    const result: number[] = [];

    let shift = 0;
    while (shift <= (textLength - patternLength)) {
        let j = patternLength - 1;

        while (j >= 0 && pattern[j] === text[shift + j]) {
            j--;
        }

        if (j < 0) {
            result.push(shift); // Pattern found at shift index
            shift += (shift + patternLength < textLength) ? patternLength - badChar.get(text[shift + patternLength]) || patternLength : 1;
        } else {
            const charShift = badChar.get(text[shift + j]) || -1;
            shift += Math.max(1, j - charShift);
        }
    }

    return result;
}

// Example usage:
const text = "ABAAABCDABAAABCDAB";
const pattern = "ABCD";
const matches = boyerMooreSearch(text, pattern);
console.log(matches); // Output: indices where pattern is found
