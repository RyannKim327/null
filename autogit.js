function buildPrefixTable(pattern) {
    const table = Array(pattern.length).fill(0);
    let j = 0;
    
    for (let i = 1; i < pattern.length; i++) {
        while (j > 0 && pattern[i] !== pattern[j]) {
            j = table[j - 1];
        }
        
        if (pattern[i] === pattern[j]) {
            j++;
        }
        
        table[i] = j;
    }
    
    return table;
}
function kmpSearch(text, pattern) {
    const table = buildPrefixTable(pattern);
    let i = 0;
    let j = 0;
    const result = [];

    while (i < text.length) {
        if (text[i] === pattern[j]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            result.push(i - j);
            j = table[j - 1];
        } else if (i < text.length && text[i] !== pattern[j]) {
            if (j !== 0) {
                j = table[j - 1];
            } else {
                i++;
            }
        }
    }

    return result;
}
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
const matches = kmpSearch(text, pattern);

console.log(matches);
