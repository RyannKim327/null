function boyerMoore(text, pattern) {
    const textLength = text.length;
    const patternLength = pattern.length;
    
    if (patternLength === 0) {
        return 0;
    }
    
    const last = getLastOccurrence(pattern);
    
    let i = patternLength - 1;
    let j = patternLength - 1;
    
    while (i < textLength) {
        if (text[i] === pattern[j]) {
            if (j === 0) {
                return i;
            }
            i--;
            j--;
        } else {
            i += patternLength - Math.min(j, 1 + last[text.charCodeAt(i)]);
            j = patternLength - 1;
        }
    }
    
    return -1;
}

function getLastOccurrence(pattern) {
    const last = {};
    
    for (let i = 0; i < pattern.length; i++) {
        last[pattern.charCodeAt(i)] = i;
    }
    
    return last;
}

// Example Usage
const text = 'exampletextexample';
const pattern = 'text';

const result = boyerMoore(text, pattern);

if (result !== -1) {
    console.log(`Pattern found at index ${result}`);
} else {
    console.log('Pattern not found');
}
