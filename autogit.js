function buildFailureFunction(pattern) {
    const failure = Array(pattern.length).fill(0);
    let j = 0;
    
    for (let i = 1; i < pattern.length; i++) {
        while (j > 0 && pattern[i] !== pattern[j]) {
            j = failure[j - 1];
        }
        
        if (pattern[i] === pattern[j]) {
            j++;
        }
        
        failure[i] = j;
    }
    
    return failure;
}

function kmpSearch(text, pattern) {
    const n = text.length;
    const m = pattern.length;
    const failure = buildFailureFunction(pattern);
    let i = 0;
    let j = 0;
    
    while (i < n) {
        if (text[i] === pattern[j]) {
            if (j === m - 1) {
                return i - j;
            }
            i++;
            j++;
        } else if (j > 0) {
            j = failure[j - 1];
        } else {
            i++;
        }
    }
    
    return -1;
}

// Example
const text = "ababcababcabc";
const pattern = "ababcabc";
console.log(kmpSearch(text, pattern)); // Output: 5
