function preprocessPattern(pattern) {
    const table = new Array(256).fill(pattern.length);
    
    for (let i = 0; i < pattern.length - 1; i++) {
        table[pattern.charCodeAt(i)] = pattern.length - 1 - i;
    }
    
    return table;
}
function boyerMooreHorspool(text, pattern) {
    const table = preprocessPattern(pattern);
    const patternLength = pattern.length;
    const textLength = text.length;
    
    let i = 0;
    
    while (i <= textLength - patternLength) {
        let j = patternLength - 1;

        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }
        
        if (j < 0) {
            return i;
        } else {
            i += table[text.charCodeAt(i + patternLength - 1)];
        }
    }
    
    return -1; // pattern not found
}
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
const pattern = "consectetur";

const index = boyerMooreHorspool(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found in text");
}
