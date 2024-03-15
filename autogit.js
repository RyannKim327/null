function buildPatternTable(pattern) {
    let table = Array(pattern.length).fill(0);
    let j = 0;
    
    for (let i = 1; i < pattern.length; i++) {
        if (pattern[i] === pattern[j]) {
            table[i] = j + 1;
            j++;
        } else {
            if (j !== 0) {
                j = table[j - 1];
                i--;
            } else {
                table[i] = 0;
            }
        }
    }
    
    return table;
}

function knuthMorrisPratt(text, pattern) {
    let table = buildPatternTable(pattern);
    
    let i = 0;
    let j = 0;
    let matches = [];
    
    while (i < text.length) {
        if (text[i] === pattern[j]) {
            i++;
            j++;
            if (j === pattern.length) {
                matches.push(i - j);
                j = 0;
            }
        } else {
            if (j !== 0) {
                j = table[j - 1];
            } else {
                i++;
            }
        }
    }
    
    return matches;
}

// Example usage
let text = "ABABDABACDABABCABAB";
let pattern = "ABABCABAB";
let matches = knuthMorrisPratt(text, pattern);
console.log(matches);
