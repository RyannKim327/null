function buildBadCharTable(pattern) {
    const table = {};
    
    for (let i = 0; i < pattern.length - 1; i++) {
        table[pattern[i]] = pattern.length - 1 - i;
    }
    
    return table;
}

function boyerMooreSearch(text, pattern) {
    const badCharTable = buildBadCharTable(pattern);
    const n = text.length;
    const m = pattern.length;
    
    let i = 0;
    
    while (i <= n - m) {
        let j = m - 1;
        
        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }
        
        if (j < 0) {
            console.log(`Pattern found at index ${i}`);
            i += m;
        } else {
            const badChar = badCharTable[text[i + j]] || m;
            i += badChar;
        }
    }
}
const text = "ABAAABCDBBABCDDEBCABC";
const pattern = "ABC";

boyerMooreSearch(text, pattern);
