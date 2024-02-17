function bmHorspoolSearch(text, pattern) {
    const patternLength = pattern.length;
    const textLength = text.length;

    if (patternLength === 0) {
        return -1;
    }

    const badMatchTable = new Array(256).fill(patternLength);

    for (let i = 0; i < patternLength - 1; i++) {
        badMatchTable[pattern.charCodeAt(i)] = patternLength - 1 - i;
    }

    let textIndex = patternLength - 1;

    while (textIndex < textLength) {
        let patternIndex = patternLength - 1;
        let matchIndex = textIndex;

        while (patternIndex >= 0 && text[matchIndex] === pattern[patternIndex]) {
            patternIndex--;
            matchIndex--;
        }

        if (patternIndex === -1) {
            return matchIndex + 1; // Match found
        }

        textIndex += badMatchTable[text.charCodeAt(textIndex)];
    }

    return -1; // Match not found
}

// Test the function
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
const pattern = "consectetur";
const matchIndex = bmHorspoolSearch(text, pattern);

if (matchIndex !== -1) {
    console.log(`Pattern found at index ${matchIndex}`);
} else {
    console.log("Pattern not found");
}
