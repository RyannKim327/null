function boyerMooreHorspool(text: string, pattern: string): number[] {
    const m = pattern.length;
    const n = text.length;
    const badCharShift: { [key: string]: number } = {};

    // Preprocess the pattern to create the bad character shift table
    for (let i = 0; i < m; i++) {
        badCharShift[pattern[i]] = m - i - 1;
    }

    const result: number[] = [];
    let s = 0; // s is the shift of the pattern with respect to text

    while (s <= n - m) {
        let j = m - 1;

        // Keep reducing j while characters of pattern and text are matching
        while (j >= 0 && pattern[j] === text[s + j]) {
            j--;
        }

        // If the pattern is found
        if (j < 0) {
            result.push(s);
            // Shift the pattern to the right
            s += (s + m < n) ? m - badCharShift[text[s + m]] || m : 1;
        } else {
            // Shift the pattern based on the bad character rule
            s += Math.max(1, j - (badCharShift[text[s + j]] || -1));
        }
    }

    return result;
}

// Example usage
const text = "ababcabcabababd";
const pattern = "ababd";
const indices = boyerMooreHorspool(text, pattern);
console.log(`Pattern found at indices: ${indices}`);
