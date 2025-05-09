function buildBadCharTable(pattern: string): number[] {
    const table = new Array(256).fill(-1); // Assuming ASCII charset

    for (let i = 0; i < pattern.length; i++) {
        table[pattern.charCodeAt(i)] = i;
    }

    return table;
}

function boyerMooreSearch(text: string, pattern: string): number {
    const m = pattern.length;
    const n = text.length;

    if (m === 0) return 0;
    if (m > n) return -1;

    const badCharTable = buildBadCharTable(pattern);

    let shift = 0;

    while (shift <= n - m) {
        let j = m - 1;

        while (j >= 0 && pattern[j] === text[shift + j]) {
            j--;
        }

        if (j < 0) {
            // Match found at shift
            return shift;
        } else {
            // Shift pattern so that bad character in text aligns with last occurrence in pattern
            const badCharIndex = text.charCodeAt(shift + j);
            const lastOccurrence = badCharTable[badCharIndex];
            const skip = Math.max(1, j - lastOccurrence);
            shift += skip;
        }
    }

    return -1; // No match found
}

// Example usage:
const text = "HERE IS A SIMPLE EXAMPLE";
const pattern = "EXAMPLE";

const index = boyerMooreSearch(text, pattern);
console.log(index); // Output: index where pattern starts or -1 if not found
