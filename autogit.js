function boyerMooreHorspool(text, pattern) {
    const map = new Map();
    const patternLength = pattern.length;
    const textLength = text.length;

    // Preprocessing: Create a shift map
    for (let i = 0; i < patternLength - 1; i++) {
        map.set(pattern[i], patternLength - i - 1);
    }

    // Searching
    let i = patternLength - 1;
    while (i < textLength) {
        let j = patternLength - 1;
        while (j >= 0 && text[i] === pattern[j]) {
            i--;
            j--;
        }
        
        if (j === -1) {
            return i + 1; // Match found
        } else {
            const shift = map.get(text[i] || pattern[0]) || patternLength;
            i += shift;
        }
    }

    return -1; // No match found
}

// Example usage
const text = "hello world";
const pattern = "world";
const result = boyerMojsonreHorspool(text, pattern);

if (result !== -1) {
    console.log(`Pattern found at index ${result}`);
} else {
    console.log("Pattern not found");
}
