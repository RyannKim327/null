function BoyerMooreSearch(text, pattern) {
    const n = text.length;
    const m = pattern.length;
    if (m === 0) return 0;
    
    // Preprocess the pattern
    const charTable = [];
    const offsetTable = [];
    for (let i = 0; i < 256; i++) {
        charTable[i] = m;
    }
    for (let i = 0; i < m - 1; i++) {
        charTable[pattern.charCodeAt(i)] = m - 1 - i;
    }
    for (let i = 0; i < m; i++) {
        offsetTable[i] = m;
    }
    for (let i = 0; i < m - 1; i++) {
        offsetTable[m - 1 - i] = i;
    }
    
    // Perform the Boyer-Moore search
    let i = m - 1;
    let j = m - 1;
    while (i < n) {
        if (text[i] === pattern[j]) {
            if (j === 0) {
                return i;
            } else {
                i--;
                j--;
            }
        } else {
            i += Math.max(offsetTable[j], charTable[text.charCodeAt(i)]);
            j = m - 1;
        }
    }
    
    return -1;
}

// Example usage
const text = "ABAAABBABBAAAABBBABAAABBABBAAAABBB";
const pattern = "ABB";
const index = BoyerMooreSearch(text, pattern);
console.log("Pattern found at index: " + index);
