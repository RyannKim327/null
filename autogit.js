function boyerMoore(text, pattern) {
    // Create bad character table
    const badChar = {};
    for (let i = 0; i < pattern.length; i++) {
        badChar[pattern[i]] = i;
    }

    const n = text.length;
    const m = pattern.length;
    const indices = [];

    let i = 0;
    while (i <= n - m) {
        let j = m - 1;

        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }

        if (j < 0) {
            indices.push(i);
            i += (i + m < n) ? m - badChar[text[i + m]] : 1;
        } else {
            i += Math.max(1, j - badChar[text[i + j]]);
        }
    }

    return indices;
}

// Example usage
const text = "ABAAABCD";
const pattern = "ABC";
const result = boyerMoore(text, pattern);
console.log(result); // Outputs: [4]
