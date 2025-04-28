function boyerMooreSearch(text: string, pattern: string): number[] {
    const m = pattern.length;
    const n = text.length;
    const result: number[] = [];

    if (m === 0 || n === 0 || m > n) return result;

    // Preprocessing: Bad Character Rule
    const badCharTable: Record<string, number> = {};
    for (let i = 0; i < m; i++) {
        badCharTable[pattern[i]] = i;
    }

    // Preprocessing: Good Suffix Rule (Optional for basic implementation)
    const suffixes = computeSuffixes(pattern);
    const shift = computeGoodSuffixShifts(suffixes, m);

    let s = 0; // shift of the pattern with respect to text
    while (s <= n - m) {
        let j = m - 1;

        // Compare pattern from end
        while (j >= 0 && pattern[j] === text[s + j]) {
            j--;
        }

        if (j < 0) {
            result.push(s); // match found
            s += s + m < n ? shift[0] : 1; // shift pattern
        } else {
            const badCharShift = Math.max(1, j - (badCharTable[text[s + j]] ?? -1));
            const goodSuffixShift = shift[j + 1] || 1;
            s += Math.max(badCharShift, goodSuffixShift);
        }
    }

    return result;
}

// Compute suffixes for Boyer-Moore's good suffix rule
function computeSuffixes(pattern: string): number[] {
    const m = pattern.length;
    const suffixes = new Array(m).fill(0);
    suffixes[m - 1] = m;
    let g = m - 1;
    for (let i = m - 2; i >= 0; i--) {
        if (i > g && suffixes[i + m - 1 - g] < i - g) {
            suffixes[i] = suffixes[i + m - 1 - g];
        } else {
            g = i;
            while (g >= 0 && pattern[g] === pattern[g + m - 1 - i]) {
                g--;
            }
            suffixes[i] = i - g;
        }
    }
    return suffixes;
}

// Compute shift amounts based on suffixes
function computeGoodSuffixShifts(suffixes: number[], m: number): number[] {
    const shift = new Array(m + 1).fill(0);
    for (let i = 0; i <= m; i++) {
        shift[i] = m;
    }
    for (let i = 0; i < m; i++) {
        const s = suffixes[i];
        shift[m - s] = i;
    }
    return shift;
}
const text = "here is a simple example text to search within.";
const pattern = "example";

const positions = boyerMooreSearch(text, pattern);
console.log(positions); // Should output starting indices where pattern is found
