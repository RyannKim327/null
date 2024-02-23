function boyerMooreSearch(text, pattern) {
    const textLength = text.length;
    const patternLength = pattern.length;
    const last = buildLastTable(pattern);

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

function buildLastTable(pattern) {
    const last = new Array(256).fill(-1);
    for (let i = 0; i < pattern.length; i++) {
        last[pattern.charCodeAt(i)] = i;
    }
    return last;
}

// Test the Boyer-Moore search function
const text = "ABAAABCD";
const pattern = "ABC";

const index = boyerMooreSearch(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index: ${index}`);
} else {
    console.log("Pattern not found in the text.");
}
