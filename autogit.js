function BoyerMooreHorspool(text, pattern) {
    const table = createHorspoolTable(pattern);
    
    let i = pattern.length - 1;
    let j;
    
    while (i < text.length) {
        j = pattern.length - 1;
        
        while (j >= 0 && text[i] === pattern[j]) {
            i--;
            j--;
        }
        
        if (j === -1) {
            return i + 1; // Match found
        }
        
        i += Math.max(1, j - table[text[i]]);
    }
    
    return -1; // Match not found
}

function createHorspoolTable(pattern) {
    const table = {};
    const length = pattern.length - 1;
    
    for (let i = 0; i < length; i++) {
        table[pattern[i]] = length - i;
    }
    
    return table;
}

// Test the algorithm
const text = "Hello, World!";
const pattern = "World";

const result = BoyerMooreHorspool(text, pattern);

if (result !== -1) {
    console.log(`Pattern found at index ${result}`);
} else {
    console.log("Pattern not found");
}
