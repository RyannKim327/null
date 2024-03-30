function badCharHeuristic(pattern) {
    const badChar = {};
    const patternLength = pattern.length;

    for (let i = 0; i < patternLength - 1; i++) {
        badChar[pattern[i]] = patternLength - i - 1;
    }

    return badChar;
}

function searchBoyerMoore(text, pattern) {
    const textLength = text.length;
    const patternLength = pattern.length;
    const badChar = badCharHeuristic(pattern);

    let shift = 0;

    while (shift <= textLength - patternLength) {
        let j = patternLength - 1;

        while (j >= 0 && pattern[j] === text[shift + j]) {
            j--;
        }

        if (j < 0) {
            console.log(`Pattern found at index ${shift}`);
            shift += badChar[text[shift + patternLength]] || 1;
        } else {
            shift += Math.max(1, j - (pattern.lastIndexOf(text[shift + j]) || -1));
        }
    }
}

// Test the Boyer-Moore algorithm
const text = "exampletextforexamplesearchingexample";
const pattern = "example";

searchBoyerMoore(text, pattern);
