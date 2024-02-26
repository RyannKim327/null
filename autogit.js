function boyerMooreSearch(text, pattern) {
    const textLength = text.length;
    const patternLength = pattern.length;
    const last = buildLast(pattern);
    
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
            i += patternLength - Math.min(j, 1 + last[text.charCodeAt(i)]);
            j = patternLength - 1;
        }
    }

    return -1; // pattern not found
}

function buildLast(pattern) {
    const last = new Array(256).fill(-1);
    for (let i = 0; i < pattern.length; i++) {
        last[pattern.charCodeAt(i)] = i;
    }
    return last;
}

// Example
const text = "ABAACADABRAACAADABRA";
const pattern = "ACA";
const index = boyerMooreSearch(text, pattern);
console.log(index); // Output: 3
