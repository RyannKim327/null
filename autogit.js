function buildPatternTable(pattern) {
    const table = [0];
    let prefix = 0;
    
    for (let i = 1; i < pattern.length; i++) {
        while (prefix > 0 && pattern.charAt(i) !== pattern.charAt(prefix)) {
            prefix = table[prefix - 1];
        }
        
        if (pattern.charAt(i) === pattern.charAt(prefix)) {
            prefix++;
        }
        
        table.push(prefix);
    }
    
    return table;
}

function kmpSearch(text, pattern) {
    const patternTable = buildPatternTable(pattern);
    const occurrences = [];
    let j = 0;

    for (let i = 0; i < text.length; i++) {
        while (j > 0 && text.charAt(i) !== pattern.charAt(j)) {
            j = patternTable[j - 1];
        }

        if (text.charAt(i) === pattern.charAt(j)) {
            j++;
        }

        if (j === pattern.length) {
            occurrences.push(i - j + 1);
            j = patternTable[j - 1];
        }
    }

    return occurrences;
}

// Example
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const result = kmpSearch(text, pattern);
console.log(result);
