function badCharacterHeuristic(pattern) {
    const badChar = {};

    for (let i = 0; i < pattern.length - 1; i++) {
        badChar[pattern[i]] = pattern.length - 1 - i;
    }

    return badChar;
}

function boyerMooreSearch(text, pattern) {
    const badChar = badCharacterHeuristic(pattern);
    const n = text.length;
    const m = pattern.length;

    let s = 0;

    while (s <= n - m) {
        let j = m - 1;

        while (j >= 0 && pattern[j] === text[s + j]) {
            j--;
        }

        if (j < 0) {
            console.log(`Pattern found at index ${s}`);
            s += badChar[text[s + m]] || 1;
        } else {
            s += Math.max(1, j - (badChar[text[s + j]] || 0));
        }
    }

    if (s > n) {
        console.log("Pattern not found in text");
    }
}

// Test the Boyer-Moore algorithm with a sample input
const text = "ABAAABCD";
const pattern = "ABC";
boyerMooreSearch(text, pattern);
