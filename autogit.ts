function boyerMooreHorspool(text: string, pattern: string): number[] {
    const m = pattern.length;
    const n = text.length;

    if (m === 0 || n === 0 || m > n) {
        return [];  // Invalid cases
    }

    // Create the skip table
    const skip: { [char: string]: number } = {};
    for (let i = 0; i < 256; i++) {
        skip[String.fromCharCode(i)] = m; // Default shift is m
    }

    for (let i = 0; i < m - 1; i++) {
        skip[pattern[i]] = m - 1 - i; // Update for characters in the pattern
    }

    const occurrences: number[] = [];
    let i = 0;

    while (i <= n - m) {
        let j = m - 1;

        while (j >= 0 && text[i + j] === pattern[j]) {
            j--;
        }

        if (j < 0) {
            occurrences.push(i);  // Found a match
            i += skip[text[i + m]] || m; // Shift by the character after the matched position
        } else {
            i += skip[text[i + j]]; // Shift according to the skip table
        }
    }

    return occurrences; // Return all occurrences
}

// Example usage:
const text = "ababcabcababc";
const pattern = "abc";
const result = boyerMooreHorspool(text, pattern);
console.log(result); // Output: positions of matches
