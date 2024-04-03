function buildKMPTable(pattern) {
    const table = Array(pattern.length).fill(0);
    let j = 0;
    
    for (let i = 1; i < pattern.length; i++) {
        if (pattern[i] === pattern[j]) {
            j++;
            table[i] = j;
        } else {
            if (j !== 0) {
                j = table[j - 1];
                i--;
            }
        }
    }
    
    return table;
}

function searchKMP(text, pattern) {
    const table = buildKMPTable(pattern);
    let i = 0;
    let j = 0;
    
    while (i < text.length) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }
        
        if (j === pattern.length) {
            return i - j;
        } else if (i < text.length && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = table[j - 1];
            } else {
                i++;
            }
        }
    }
    
    return -1;
}

// Example Usage
const text = "ABABCABABCDABABCABAB";
const pattern = "ABABCABAB";
const index = searchKMP(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
