function boyerMooreHorspool(text, pattern) {
    const textLength = text.length;
    const patternLength = pattern.length;
    
    if(patternLength === 0) {
        return -1;
    }
    
    const badCharacterTable = new Array(256).fill(patternLength);
    const lastOccurrence = {};

    for(let i = 0; i < patternLength - 1; i++) {
        badCharacterTable[pattern.charCodeAt(i)] = patternLength - i - 1;
    }

    for(let i = 0; i < patternLength; i++) {
        lastOccurrence[pattern[i]] = i;
    }

    let i = patternLength - 1;

    while(i < textLength) {
        let j = patternLength - 1;
        
        while(j >= 0 && text[i] === pattern[j]) {
            i--;
            j--;
        }

        if(j < 0) {
            return i + 1;
        } else {
            i += Math.max(badCharacterTable[text.charCodeAt(i)], j - lastOccurrence[text[i]]);
        }
    }

    return -1;
}

// Example usage
const text = "hello world";
const pattern = "world";
const result = boyerMocheckForSubstrreHorspool(text, pattern);
console.log(`Pattern found at index: ${result}`);
