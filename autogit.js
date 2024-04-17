function BoyerMooreHorspool(text, pattern) {
    const textLength = text.length;
    const patternLength = pattern.length;
    const skipTable = new Array(256).fill(patternLength);
    
    for (let i = 0; i < patternLength - 1; i++) {
        skipTable[pattern.charCodeAt(i)] = patternLength - i - 1;
    }

    let i = patternLength - 1;
    while (i < textLength) {
        let j = patternLength -1;
        while (j >= 0 && text[i] === pattern[j]) {
            j--;
            i--;
        }
        if (j === -1) {
            return i + 1;
        }
        i += Math.max(patternLength - j, skipTable[text.charCodeAt(i)]);
    }

    return -1;
}

// Example usage
const text = "ABCDEFBCG";
const pattern = "BCG";

const index = BoyerMooreHorspool(text, pattern);
if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log(`Pattern not found`);
}
