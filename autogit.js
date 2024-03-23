function boyerMoore(text, pattern) {
    function preprocessPattern(pattern) {
        const badChar = {};
        const goodSuffix = [];
        const patternLength = pattern.length;

        for (let i = 0; i < patternLength - 1; i++) {
            badChar[pattern[i]] = patternLength - i - 1;
        }

        for (let i = 0; i <= patternLength; i++) {
            goodSuffix[i] = 0;
        }

        let j = patternLength;
        for (let i = patternLength - 1; i >= 0; i--) {
            if (pattern[i] === pattern[j]) {
                goodSuffix[i] = j - i;
            } else {
                j = i;
            }
        }

        for (let i = 0; i < patternLength - 1; i++) {
            let suffix = getLongestSuffix(pattern, i, patternLength);
            if (pattern[i - suffix] !== pattern[patternLength - suffix - 1]) {
                goodSuffix[patternLength - suffix - 1] = suffix;
            }
        }

        return { badChar, goodSuffix };
    }

    function getLongestSuffix(pattern, i, patternLength) {
        let suffix = 0;
        while (pattern[i] === pattern[patternLength - 1 - suffix] && i > 0) {
            i--;
            suffix++;
        }
        return suffix;
    }

    const patternLength = pattern.length;
    const { badChar, goodSuffix } = preprocessPattern(pattern);

    let textIndex = patternLength - 1;
    let patternIndex = patternLength - 1;

    while (textIndex < text.length) {
        let k = textIndex;
        let j = patternIndex;

        while (j >= 0 && text[k] === pattern[j]) {
            k--;
            j--;
        }

        if (j < 0) {
            return k + 1; // found the pattern at index k + 1
        } else {
            const shiftByBadChar = badChar[text[k]];
            const shiftByGoodSuffix = goodSuffix[j];
            textIndex += Math.max(shiftByBadChar || 0, shiftByGoodSuffix);
        }
    }

    return -1; // pattern not found in text
}

// Test the boyerMoore function
const text = "hello world!";
const pattern = "world";
const index = boyerMoore(text, pattern);
if (index !== -1) {
    console.log(`Pattern found at index ${index}`);
} else {
    console.log("Pattern not found in the text.");
}
