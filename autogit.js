function kmpSearch(text, pattern) {
    // Calculate the prefix table
    let prefixTable = Array(pattern.length).fill(0);
    let j = 0;
    
    for (let i = 1; i < pattern.length; i++) {
        while (j > 0 && pattern[i] !== pattern[j]) {
            j = prefixTable[j - 1];
        }
        
        if (pattern[i] === pattern[j]) {
            j++;
        }
        prefixTable[i] = j;
    }
    
    // Search for the pattern in the text
    let matches = [];
    let i = 0;
    let j = 0;
    
    while (i < text.length) {
        if (text[i] === pattern[j]) {
            i++;
            j++;
        }
        
        if (j === pattern.length) { // Pattern found
            matches.push(i - j);
            j = prefixTable[j - 1];
        } else if (i < text.length && text[i] !== pattern[j]) {
            if (j !== 0) {
                j = prefixTable[j - 1];
            } else {
                i++;
            }
        }
    }
    
    return matches;
}

// Example usage
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const indices = kmpSearch(text, pattern);
console.log("Pattern found at indices:", indices);
