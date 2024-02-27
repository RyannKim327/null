function createBadMatchTable(pattern) {
    const table = {};
    const len = pattern.length;
    
    for (let i = 0; i < len - 1; i++) {
        table[pattern[i]] = len - i - 1;
    }
    
    return table;
}

function boyerMooreHorspool(text, pattern) {
    const badMatchTable = createBadMatchTable(pattern);
    const n = text.length;
    const m = pattern.length;
    let i = m - 1;
    
    while (i < n) {
        let k = 0;
        
        while (k < m && pattern[m - 1 - k] === text[i - k]) {
            k++;
        }
        
        if (k === m) {
            return i - m + 1;
        }
        
        const char = text[i];
        const badMatchOffset = badMatchTable[char] || m;
        i += badMatchOffset;
    }
    
    return -1;
}

// Example usage
const text = 'hello world';
const pattern = 'world';

const index = boyerMooreHorspool(text, pattern);
if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log('Pattern not found');
}
