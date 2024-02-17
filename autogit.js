function buildPatternTable(pattern) {
    let table = Array(pattern.length).fill(0);
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

function kmpSearch(text, pattern) {
    let patternTable = buildPatternTable(pattern);
    let i = 0;
    let j = 0;
    
    while (i < text.length) {
        if (text[i] === pattern[j]) {
            i++;
            j++;
            if (j === pattern.length) {
                return i - j;
            }
        } else {
            if (j !== 0) {
                j = patternTable[j - 1];
            } else {
                i++;
            }
        }
    }
    
    return -1;
}

let text = "This is a simple example";
let pattern = "example";
let index = kmpSearch(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
