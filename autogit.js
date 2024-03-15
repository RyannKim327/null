function buildLPS(pattern) {
    let lps = new Array(pattern.length).fill(0);
    let j = 0, i = 1;
    
    while (i < pattern.length) {
        if (pattern[i] === pattern[j]) {
            lps[i] = j + 1;
            i++;
            j++;
        } else {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    
    return lps;
}

function KMP(text, pattern) {
    let lps = buildLPS(pattern);
    let i = 0, j = 0;
    let matches = [];
    
    while (i < text.length) {
        if (text[i] === pattern[j]) {
            i++;
            j++;
        }
        
        if (j === pattern.length) {
            matches.push(i - j);
            j = lps[j - 1];
        } else if (i < text.length && text[i] !== pattern[j]) {
            if (j !== 0) {
                j = lps[j - 1];
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
let matches = KMP(text, pattern);
console.log(matches);
