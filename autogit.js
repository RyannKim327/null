function boyerMooreHorspool(text, pattern) {
    const patternLength = pattern.length;
    const textLength = text.length;

    // Step 1: Create bad character shift table
    const badCharacterShift = new Array(256).fill(patternLength);
    for (let i = 0; i < patternLength - 1; i++) {
        badCharacterShift[pattern.charCodeAt(i)] = patternLength - i - 1;
    }

    // Step 2: Create good suffix shift table
    const goodSuffixShift = new Array(patternLength).fill(patternLength);
    let j = 0;
    let i = patternLength - 1;
    for (; i >= 0; i--) {
        if (pattern[i] === pattern[j]) {
            goodSuffixShift[i] = j - i + patternLength - 1;
            j--;
        } else {
            j = patternLength - 1;
        }
    }
    for (i = 0; i < patternLength - 1; i++) {
        let suffixLength = suffixLengthCalculator(pattern, i);
        if (pattern[i - suffixLength] !== pattern[patternLength - 1 - suffixLength]) {
            goodSuffixShift[patternLength - 1 - suffixLength] = patternLength - 1 - i + suffixLength;
        }
    }

    // Step 3: String search
    let index = patternLength - 1;
    while (index < textLength) {
        let k = index;
        let i = patternLength - 1;
        while (i >= 0 && text[k] === pattern[i]) {
            k--;
            i--;
        }
        if (i === -1) {
            return k + 1; // Match found
        } else {
            index += Math.max(badCharacterShift[text.charCodeAt(index)], goodSuffixShift[i]);
        }
    }
    return -1; // No match found
}

function suffixLengthCalculator(pattern, p) {
    let length = 0;
    let i = p;
    let j = pattern.length - 1;
    while (i >= 0 && pattern[i] === pattern[j]) {
        length++;
        i--;
        j--;
    }
    return length;
}

// Example usage:
const text = 'This is an example string for searching';
const pattern = 'example';
const index = boyerMooreHorspool(text, pattern);

console.log('Pattern occurs at index:', index); // Output: 10
