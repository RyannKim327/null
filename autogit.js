function bmhSearch(text, pattern) {
    const patternLength = pattern.length;
    const textLength = text.length;
    
    if (patternLength === 0) {
        return -1;
    }

    const lastOccurrence = {};
    for (let i = 0; i < patternLength - 1; i++) {
        lastOccurrence[pattern[i]] = i;
    }

    let i = patternLength - 1;
    let j = patternLength - 1;

    while (i < textLength) {
        if (text[i] === pattern[j]) {
            if (j === 0) {
                return i; // pattern found
            }
            i--;
            j--;
        } else {
            const charIndex = lastOccurrence[text[i]];
            i += patternLength - Math.min(j, 1 + charIndex);
            j = patternLength - 1;
        }
    }
    
    return -1; // pattern not found
}

const text = "hello world";
const pattern = "world";
const result = bmhSearch(text, pattern);
console.log(result);
