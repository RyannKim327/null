function boyerMooreSearch(text, pattern) {
    const textSize = text.length;
    const patternSize = pattern.length;
    if (patternSize === 0) return -1;

    const badCharacterTable = new Array(256).fill(-1);
    for (let i = 0; i < patternSize; i++) {
        badCharacterTable[pattern.charCodeAt(i)] = i;
    }

    let suffixes = [];
    let prefix = new Array(patternSize).fill(false);
    generateSuffixes(pattern, suffixes, prefix);

    let i = 0;
    while (i <= textSize - patternSize) {
        let j = patternSize - 1;
        while (j >= 0 && pattern[j] === text[i + j]) {
            j--;
        }
        if (j < 0) {
            return i;
        } else {
            let badCharShift = j - badCharacterTable[text.charCodeAt(i + j)];

            let goodSuffixShift = 0;
            if (j < patternSize - 1) {
                goodSuffixShift = moveBySuffixAndPrefix(j, patternSize, suffixes, prefix);
            }

            i += Math.max(badCharShift, goodSuffixShift);
        }
    }

    return -1;
}

function generateSuffixes(pattern, suffixes, prefix) {
    let length = pattern.length;
    for (let i = length - 1; i >= 0; i--) {
        let j = i + 1;
        while (j < length && pattern[i] !== pattern[j]) {
            j++;
        }
        suffixes[i] = j;
    }

    for (let i = 0; i < length; i++) {
        if (suffixes[i] === length) {
            for (let j = i - 1; j >= 0; j--) {
                if (!prefix[j]) {
                    prefix[j] = true;
                    suffixes[j] = length;
                } else {
                    break;
                }
            }
        }
    }
}

function moveBySuffixAndPrefix(j, patternSize, suffixes, prefix) {
    const k = patternSize - 1 - j;
    if (suffixes[k] > j) {
        return k - suffixes[k] + 1;
    } else {
        let l = j + 1;
        while (l < patternSize && prefix[l]) {
            l++;
        }
        return l;
    }
}

// Example usage
const text = "Hello, how are you?";
const pattern = "are";
const index = boyerMooreSearch(text, pattern);

if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found");
}
