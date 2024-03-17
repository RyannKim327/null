function boyerMoore(text, pattern) {
    let badChar = buildBadCharTable(pattern);
    let suffix = buildSuffixTable(pattern);

    let textLength = text.length;
    let patternLength = pattern.length;
    let shift = 0;

    while (shift <= textLength - patternLength) {
        let j = patternLength - 1;

        while (j >= 0 && pattern[j] === text[shift + j]) {
            j--;
        }

        if (j < 0) {
            console.log("Pattern found at index: " + shift);
            shift += suffix[0];
        } else {
            let charShift = j - badChar[text[shift + j]];
            shift += Math.max(1, charShift, suffix[j]);
        }
    }
}

function buildBadCharTable(pattern) {
    let table = {};
    let patternLength = pattern.length;

    for (let i = 0; i < patternLength; i++) {
        table[pattern[i]] = i;
    }

    return table;
}

function buildSuffixTable(pattern) {
    let patternLength = pattern.length;
    let suffix = new Array(patternLength).fill(0);
    let lastPrefixPosition = patternLength;

    for (let i = patternLength - 2; i >= 0; i--) {
        if (isPrefix(pattern, i + 1)) {
            lastPrefixPosition = i + 1;
        }

        suffix[i] = lastPrefixPosition - i + patternLength - 1;
    }

    for (let i = 0; i < patternLength - 1; i++) {
        let j = longestSuffix(pattern, i);
        suffix[j] = patternLength - 1 - i + j;
    }

    return suffix;
}

function isPrefix(pattern, p) {
    let patternLength = pattern.length;
    for (let i = p, j = 0; i < patternLength; i++, j++) {
        if (pattern[i] !== pattern[j]) {
            return false;
        }
    }
    return true;
}

function longestSuffix(pattern, p) {
    let k = 0;
    let patternLength = pattern.length;
    for (let i = p, j = patternLength - 1; i >= 0 && pattern[i] === pattern[j]; i--, j--) {
        k += 1;
    }
    return k;
}

let text = "ABAAABCDBBABCDDEBCABC";
let pattern = "ABC";

boyerMoore(text, pattern);
