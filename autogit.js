function boyerMooreHorspool(text, pattern) {
    const patternLength = pattern.length;
    const textLength = text.length;

    if (patternLength === 0) {
        return -1; // Edge case: empty pattern
    }

    const badMatchTable = new Array(256).fill(patternLength);

    for (let i = 0; i < patternLength - 1; i++) {
        // Calculate the bad match table
        badMatchTable[pattern.charCodeAt(i)] = patternLength - 1 - i;
    }

    let i = patternLength - 1;
    while (i < textLength) {
        let j = patternLength - 1;
        while (j >= 0 && text.charAt(i) === pattern.charAt(j)) {
            i--;
            j--;
        }

        if (j === -1) {
            return i + 1; // Match found
        } else {
            i += Math.max(badMatchTable[text.charCodeAt(i)], 1);
        }
    }
    
    return -1; // No match found
}

// Example:
const text = "Hello, how are you?";
const pattern = "are";
const index = boyerMooreHorspool(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
