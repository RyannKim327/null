function boyerMooreHorspool(text: string, pattern: string): number {
    const m = pattern.length;
    const n = text.length;

    if (m > n) return -1; // pattern longer than text can't match

    // Build the bad match table
    const skipTable = new Map<string, number>();

    // For all characters except last in pattern, assign shift values
    for (let i = 0; i < m - 1; i++) {
        skipTable.set(pattern[i], m - 1 - i);
    }

    let i = 0; // index in text

    while (i <= n - m) {
        let j = m - 1; // index in pattern starting from end

        // Compare pattern from end to start
        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }

        if (j < 0) {
            // pattern found at position i
            return i;
        } else {
            // Calculate the skip value, default to full pattern length if char not found
            const skip = skipTable.get(text[i + m - 1]) ?? m;
            i += skip;
        }
    }

    return -1; // no match found
}
const text = "here is a simple example";
const pattern = "example";

const pos = boyerMooreHorspool(text, pattern);
if (pos !== -1) {
    console.log(`Pattern found at index: ${pos}`);
} else {
    console.log("Pattern not found");
}
