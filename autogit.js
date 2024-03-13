function buildPatternTable(pattern) {
    let table = [0];
    let prefixEnd = 0;
    let suffixEnd = 1;
    
    while (suffixEnd < pattern.length) {
        if (pattern[suffixEnd] === pattern[prefixEnd]) {
            table[suffixEnd] = prefixEnd + 1;
            suffixEnd++;
            prefixEnd++;
        } else if (prefixEnd === 0) {
            table[suffixEnd] = 0;
            suffixEnd++;
        } else {
            prefixEnd = table[prefixEnd - 1];
        }
    }
    
    return table;
}

function kmpSearch(text, pattern) {
    let patternTable = buildPatternTable(pattern);
    let textIndex = 0;
    let patternIndex = 0;
    
    while (textIndex < text.length) {
        if (text[textIndex] === pattern[patternIndex]) {
            if (patternIndex === pattern.length - 1) {
                return textIndex - pattern.length + 1;
            }
            patternIndex++;
            textIndex++;
        } else if (patternIndex > 0) {
            patternIndex = patternTable[patternIndex - 1];
        } else {
            patternIndex = 0;
            textIndex++;
        }
    }
    
    return -1;
}

let text = "ababcababa";
let pattern = "aba";
let index = kmpSearch(text, pattern);

console.log(`Pattern found at index: ${index}`);
