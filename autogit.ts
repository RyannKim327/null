function preprocessPattern(pattern: string): Map<string, number> {
    const map = new Map<string, number>();
    for (let i = 0; i < pattern.length; i++) {
        map.set(pattern[i], i);
    }
    return map;
}

function boyerMooreSearch(text: string, pattern: string): number {
    const patternMap = preprocessPattern(pattern);
    let i = pattern.length - 1;
    let j = pattern.length - 1;

    while (i < text.length) {
        if (text[i] === pattern[j]) {
            if (j === 0) {
                return i;
            }
            i--;
            j--;
        } else {
            const shift = patternMap.has(text[i]) ? Math.max(1, j - patternMap.get(text[i])) : j + 1;
            i += shift;
            j = pattern.length - 1;
        }
    }

    return -1;
}

// Test the implementation
const text = "Hello, this is a test string for searching.";
const pattern = "test";
const index = boyerMooreSearch(text, pattern);
console.log("Pattern found at index:", index);
