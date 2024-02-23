function buildFailureFunction(pattern) {
    let f = new Array(pattern.length).fill(0);
    let j = 0;

    for (let i = 1; i < pattern.length; i++) {
        while (j > 0 && pattern[i] !== pattern[j]) {
            j = f[j - 1];
        }
        if (pattern[i] === pattern[j]) {
            j++;
        }
        f[i] = j;
    }

    return f;
}

function kmpSearch(text, pattern) {
    let f = buildFailureFunction(pattern);
    let i = 0;
    let j = 0;

    while (i < text.length) {
        if (text[i] === pattern[j]) {
            if (j === pattern.length - 1) {
                return i - j;
            }
            i++;
            j++;
        } else if (j > 0) {
            j = f[j - 1];
        } else {
            i++;
        }
    }

    return -1;
}

// Example usage
let text = "ababcababcabcabc";
let pattern = "abcabc";
let index = kmpSearch(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
